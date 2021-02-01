const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  adult: {
    type: Boolean,
    default: false
  },
  points: {
    type: Number,
    default: 0, 
    min: 0
  },
  rewardRecord: {
    type: [Object]
  },
  pastChores: {
    type: [Object]
  },
  pin: {
    type: String,
    default: "0000",
    validate: {
      validator: function(v) {
        return /\d{4}/.test(v);
      }, 
      message: props => `Please enter a 4 digit PIN`
    }
  }

})
module.exports = mongoose.model("User", userSchema)