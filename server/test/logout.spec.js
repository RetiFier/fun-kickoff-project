let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
const { token } = require('morgan');
let {server} = require('../app');
const { expect } = chai;
let should = chai.should();


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
