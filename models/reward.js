const mongoose = require("mongoose")
const Schema = mongoose.Schema

const rewardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    pointCost: {
        type: Number,
        required: true,
        min: 0
    },
    details: {
        type: String,
    },
    needsApproval: {
        type: Boolean,
        default: false
    }

})
        
module.exports = mongoose.model("Reward", rewardSchema)