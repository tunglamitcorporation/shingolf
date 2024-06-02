const mongoose = require('mongoose');
var conn = require('../config/dbm');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"],
    },
    role: {
        type: Number,
        default: 0 // 0 = user,1=admin,2=BM,3=SUp.4=Account,5=AccLeader,6=AM,7=CEO
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dsm20cmen/image/upload/c_scale,w_100/v1627702670/avatar/kisspng-united-states-avatar-organization-information-user-avatar-5ac20804cee8a0.5851027215226654768475_knymsx.png"
    },
    access: {
        type: Object,
        default: {}
    },
}, {
    timestamps: true
});

module.exports = conn.model("Users", userSchema);
 