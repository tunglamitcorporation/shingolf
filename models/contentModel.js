const mongoose = require('mongoose');
var conn = require('../config/dbm');

const contentSchema = new mongoose.Schema({
    type: {
        type: String,
        default :"main"
    },
    data: {
        type: Object,
        default: {}
    },
    en: {
        type: Object,
        default: {}
    },
    ja: {
        type: Object,
        default: {}
    },
    kor: {
        type: Object,
        default: {}
    }
}, {
    timestamps: true
})

module.exports = conn.content.model("content", contentSchema);
