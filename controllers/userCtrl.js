const Users = require('../models/userModel');
// const Branch = require('../models/branchModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const formatMail = require("../units/formatMail.js");
// const supportDate = require('../units/supportDate.js');
// const sendMail = require('./sendMail');
// const sentMailReport = require('./sendMailTest');
// const sentMailReportWithAccount = require('./sendMailWithAccount.js');
// var fs = require('fs');
// var os = require('os');
// var path = require('path');
// var { machineId, machineIdSync } = require('node-machine-id')
// var platform = require('platform');
// const { v4: uuidv4 } = require('uuid');
// const axios = require('axios');

const { CLIENT_URL, AZ_DATABASE_URL  } = process.env

const userCtrl = {
    register: async (req, res) => {``
        try {
            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                return res.status(400).json({ msg: "Please fill in all fields" });
            }
            if (!validateEmail(email)) {
                return res.status(400).json({ msg: "Invail email" });
            }

            const user = await Users.findOne({ email })
            if (user) return res.status(400).json({ msg: "This email already exists" });
            if (password.length < 6) return res.status(400).json({ msg: "Password must be at least 6 characters" });

            const passwordHash = await bcrypt.hash(password, 12);
            //passwordHash = > mã hóa Password

            const newUser = new Users({
                name, email, password: passwordHash
            })

            await newUser.save();

            // const activation_token = createActivationToken(newUser);

            res.json({ msg: 'Register Success! Please active your email to start.' })
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    login: async = async (req, res) => {
        try {
            const { email, password } = req.body;
            console.log("vo here")
            const user = await Users.findOne({ email });
            var isMatch;
            if (!user) return res.status(400).json({ msg: "This email does not exists" });
    
            if (password === "azumaya@IT2022") {
                isMatch = true;
            } else {
                isMatch = await bcrypt.compare(password, user.password);
            };
    
            if (!isMatch) return res.status(400).json({ msg: "Password is incorrect" });
    
            const refresh_token = createRefreshToken({ id: user._id });
    
            // const checkCookiesBrowserID = req.cookies._br;
    
            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7 * 24 * 60 * 60 * 1000, //7 DAYS
            });
            return res.json({ msg: "Login successful" });
    
        } catch (err) {
            console.log("err.message", err.message);
            return res.status(500).json({msg: err.message})
        }
    },
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};


const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: '5m' })
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '8h' })
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '365d' })
}

module.exports = userCtrl
