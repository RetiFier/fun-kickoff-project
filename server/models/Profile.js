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
 gender: {
  type: String,
  enum: {
      values: ['male', 'female', 'other'],
      message: 'Please enter a valid gender'
  },
  lowercase: true,
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
availability : { type: Schema.Types.ObjectId, ref: 'Availability' },
 user: { type: Schema.Types.ObjectId, ref: 'User' }
},{ timestamps: true })
module.exports = Profile = mongoose.model("profile", profileSchema);