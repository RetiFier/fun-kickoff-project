let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
const { token } = require('morgan');
let {server} = require('../app');
const User = require("../models/User");
const { expect } = chai;
let should = chai.should();
const generateToken = require("../utils/generateToken");


describe('Test For All Auth Controller', () => {
let regUser;
let checkUserName;
let loginUser;
let loadUser;
let accessToken;
beforeEach(async () => {
   regUser = {
    username: "testingUser",
    email: "testinguser@test.com",
    password: "helloworld"
  }
   checkUserName = {
    username: "testingUser",
    email: "testinguser1@test.com",
    password: "helloworld"
  }
   loginUser = {
    email: "testinguser@test.com",
    password: "helloworld"
  }
   loadUser = {
    username: "testingUser",
    email: "testinguser@test.com",
  }
  const email = "testinguser@test.com"
  const user = await User.findOne({ email });
  accessToken = await generateToken(user?._id);
     
})

// For Register
describe('POST /auth/register', () => {
  it('should register a new user when request is ok', () => {
    return chai.request(server)
      .post('/auth/register')
      .send(regUser)
      .then((res) => {
        expect(res.body.success.user.username).to.include(regUser.username);
        expect(res.body.success.user.email).to.include(regUser.email);
      });
  });
  it('should return error when email already exists', () => {
    return chai.request(server)
      .post('/auth/register')
      .send(regUser)
      .then((res) => {
        expect(res.body.error).to.include('A user with that email already exists');
      });
  });
  it('should return error when username already exists', () => {
    return chai.request(server)
      .post('/auth/register')
      .send(checkUserName)
      .then((res) => {
        expect(res.body.error).to.include('A user with that username already exists');
      });
  });
  it('should return error when email is not vaild', () => {
    regUser.email = 'email';
    return chai.request(server)
      .post('/auth/register')
      .send(regUser)
      .then((res) => {
        const {msg , value} =  res.body.errors[0];
        expect(value).to.be.equal(regUser.email)
        expect(msg).to.include('Please enter a valid email address');
      });
  });
  it('should return error when password is under 6 characters', () => {
    regUser.email = 'test@test.com';
    regUser.password = 'pass';
    return chai.request(server)
      .post('/auth/register')
      .send(regUser)
      .then((res) => {
        const {msg , value} =  res.body.errors[0];
        expect(value).to.be.equal(regUser.password)
        expect(msg).to.include('Please enter a password with 6 or more characters');
      });
  });
});

// For Login 

describe('POST /auth/login', () => {
  it('should login  when request info is valid', () => {
    return chai.request(server)
      .post('/auth/login')
      .send(loginUser)
      .then((res) => {
        expect(res.body.success.user.email).to.include(loginUser.email);
      });
  });
  it('should return error when email or password is wrong', () => {
    loginUser.password = "helloworl"
    return chai.request(server)
      .post('/auth/login')
      .send(loginUser)
      .then((res) => {
        expect(res.body.error).to.include("Invalid email or password");
      });
  });
  it('should return error when email is not vaild', () => {
    loginUser.email = 'email';
    return chai.request(server)
      .post('/auth/login')
      .send(loginUser)
      .then((res) => {
        const {msg , value} =  res.body.errors[0];
        expect(value).to.be.equal(loginUser.email)
        expect(msg).to.include('Please enter a valid email address');
      });
  });
  it('should return error when password is not provide', () => {
    const email = {
      email: "test@test.com"
    }
    return chai.request(server)
      .post('/auth/login')
      .send(email)
      .then((res) => {
        const {msg} =  res.body.errors[0];
        expect(msg).to.include('Password is required');
      });
  });
});

// For User 
describe('GET /auth/user', () => {
  it('should get user after login', () => {
    return chai.request(server)
      .get('/auth/user').set('Cookie' , `token=${accessToken}`)
      .then((res) => {
        expect(res.body.success.user.email).to.include(loadUser.email);
        expect(res.body.success.user.username).to.include(loadUser.username);
      });
  });
  it('should get error when no authorize', () => {
    return chai.request(server)
      .get('/auth/user')
      .then((res) => {
        expect(res.text).to.include('No token, authorization denied');
      });
  });
  it('should get error when invalid authorize', () => {
    return chai.request(server)
    .get('/auth/user').set('Cookie' , `token=${accessToken}1`)
      .then((res) => {
        console.log(accessToken)
        expect(res.text).to.include('Token is not valid');
      });
  });
});

// For Logout
chai.use(chaiHttp);
describe('POST /auth/logout', () => {
  it('should logout and return message ', () => {
    return chai.request(server)
      .post('/auth/logout')
      .then((res) => {
        expect(res).to.have.status(200)
        expect(res).to.not.have.cookie('token'); 
        expect(res.text).to.includes("You have successfully logged out")
      });
  })})
});