const mongoose = require('mongoose');
var conn = require('../config/dbm');

const orderSchema = new mongoose.Schema({
    oderId: {
        type: String,
        trim: true,
    },
    guestName:  {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    note: {
        type: String,
        trim: true,
    },
    noteByAdmim: {
        type: String,
        trim: true,
    },
    cartSelected: {
        type: Array,
        default: []
    },
    status: {
        type: Array,
        trim: true,
    },
    confirm: {
        type: Boolean,
        trim: true,
    },
}, {
    timestamps: true
});

module.exports = conn.model("Order", orderSchema);
 