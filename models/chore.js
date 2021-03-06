const mongoose = require("mongoose")
const Schema = mongoose.Schema

const choreSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    details: {
        type: String
    },
    pointValue: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        default: null
    },
    available: {
        type: Boolean,
        default: true
    },
    frequency: {
        type: String,
        enum: [
            "daily", "weekly", "as needed"
        ],
        default: "weekly"
    },
    completed: {
        type: Boolean,
        default: false
    },
    history: {
        type: [Object]
    },
    needsApproval: {
        type: Boolean, 
        default: false
    }

})
module.exports = mongoose.model("Chore", choreSchema)