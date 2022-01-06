const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  availabilityDays: {
    type: Array
  },
  availability: [{
    day: {
      type: Date,
    },
    periods: [{
      start: Date,
      end:  Date
      }],
      available:{
        type:Boolean,
        default: false 
      } 
  }]
})



module.exports = Availability  = mongoose.model("availability ", availabilitySchema);
