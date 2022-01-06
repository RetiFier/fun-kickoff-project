const mongoose = require("mongoose");


const profileSchema = new mongoose.Schema({
 firstName: {
   type: String,
   trim: true
 },
 lastName: {
   type: String,
   trim: true
 },
 description:{
   type: String,
   trim:true
 },
 gender:{
   type: String ,
   trim: true
 },
 dateOfBirth: {
  type: Date,
  required: true,
  trim: true,
},
phone: {
  type: String,
  trim: true,
  validate: {
    validator: function (v) {
      return /^[0-9]{10}/.test(v);
    },
    message: '{VALUE} is not a valid 10 digit number!'
  }
},
description:{
  type: String,
  trim:true
},
 availability:{
   date: Date,
   time: [{from: Number, to: Number}]
 } ,
 user: { type: Schema.Types.ObjectId, ref: 'User' }
},{ timestamps: true })
module.exports = Profile = mongoose.model("profile", profileSchema);