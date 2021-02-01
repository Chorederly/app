const mongoose = require("mongoose")
const Schema = mongoose.Schema

const choreSchema = new Schema({
    name: {
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
        
module.exports = mongoose.model("Chore", choreSchema)