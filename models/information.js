const mongoose = require('mongoose');
var conn = require('../config/dbm');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true,
    },
    rate: {
        type: Number,
        trim: true,
    },
    saleHome: {
        type: String,
        default: "",
    },
    
}, {
    timestamps: true
});

module.exports = conn.model("Users", userSchema);
 