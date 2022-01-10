const Profile =  require('../models/Profile')
const User = require('../models/User')
const asyncHandler = require("express-async-handler");

exports.createProfile = asyncHandler(async (req, res, next) => {

const {firstName , lastName , description , gender , dateOfBirth , phone ,availability } = req.body
  const {id} = req.user
  const profileExists = await Profile.findOne({ user: id });
  if(profileExists){
    res.status(400);
    throw new Error("this user already created the  profile")
  }
    const profile = await Profile.create(
      {
        firstName,
        lastName, 
        description,
        gender,
        dateOfBirth,
        phone,
        availability,
        user: id
      }
    )
    if (profile) {
      res.status(201).json({
        success: {
          profile: {
          profile
          },
          msg: "Profile Created"
        }
      });
    } else {
      res.status(400);
      throw new Error("Invalid Profile Data");
    }
  
});

exports.editProfile = asyncHandler(async (req, res, next) => {

  const {firstName, lastName, description, gender, dateOfBirth, phone, availability } = req.body
    const {id} = req.params
    const profile  = await Profile.findById(id)
    if(profile){
      const opts = { runValidators: true };
      const profile = await Profile.findByIdAndUpdate(
        id,
        {
          firstName,
          lastName, 
          description,
          gender,
          dateOfBirth,
          phone,
          availability
        },
         opts
      )
      if (profile) {
        res.status(201).json({
          success: {
            msg: "Profile Updated"
          }
        });
      } else {
        res.status(400);
        throw new Error("Invalid Profile Data");
      }
    } else {
      res.status(404);
      throw new Error("Pls enter valid profile id");
    }
  
    
  });
  
exports.loadProfile = asyncHandler(async (req, res, next) => {
      const {id} = req.params
      const profile = await Profile.findById(id).populate('user')
      if(profile){
        res.status(200).json({
          success: {   
              profile     
          }
        });
      } else {
        res.status(404);
        throw new Error("Pls enter valid profile id");
      }   
    });
exports.deleteProfile = asyncHandler(async (req, res, next) => {
      const {id} = req.params
      const profileID = await Profile.findById(id)
      if(profileID){
        const profile = await Profile.findByIdAndDelete(
          id
        )
        if(profile){
          res.status(200).json({
            success: {   
                msg: `Profile ID ${id} Successfully Deleted`     
            }
          });
        }
        else{
          res.status(400);
          throw new Error("Something is wrong!");
        }
   
      } else {
        res.status(404);
        throw new Error("Pls enter valid profile id");
      }   
    });

exports.loadAllProfile = asyncHandler(async (req, res, next) => {
    const profile = await Profile.find()
      if(profile){
        res.status(200).json({
          success: {   
            profile     
          }
        });
      } else {
        res.status(404);
        throw new Error("Pls enter valid profile id");
      }   
    });