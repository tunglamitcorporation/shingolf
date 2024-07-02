const mongoose = require('mongoose');
var conn = require('../config/dbm');

const invoiceSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
    },
    customerName: {
        type: String,
        trim: true,
    },
    custormerAddress: {
        type: String,
        trim: true,
    },
    custormerPhone: {
        type: String,
        trim: true,
    },
    customerNote: {
        type: String,
        trim: true,
    },
    status: {
        type: Array,
        trim: true,
    },
    confirm: {
        type: Boolean,
        trim: true,
    },
    note: {
        type: String,
        trim: true,
    },
    productList: {
        type: Array,
        default: []
    }

    
}, {
    timestamps: true
});

module.exports = conn.model("Invoice", invoiceSchema);
 