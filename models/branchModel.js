const mongoose = require('mongoose')

const branchSchema = new mongoose.Schema({

}, {
    timestamps: true
})

module.exports = mongoose.model("content", branchSchema)