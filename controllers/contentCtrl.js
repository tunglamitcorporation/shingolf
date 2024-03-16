// const axios = require('axios');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const CONTENT = require('../models/contentModel');

const contentCtrl = {
    loadDataContent: async (req, res) => {
        try {
            const { type } = req.params;
            const connect = await CONTENT.findOne({type:"main"},{type: 0})

            if(type) {
                if ( type in connect) {
                    const dataReturn = {};
                    dataReturn[""+type] = connect[type]
                    return res.json(dataReturn) 
                }  else return res.json(connect._doc)

            } else {
                return res.json({...connect})
            }
        } catch (err) {
            console.log("err.message", err.message);
            return res.status(500).json({msg: err.message})
        }
    }, 
    loadDataContentWithTarget: async (req, res) => {
        try {
            const { target, language } = req.params;
            const connect = await CONTENT.findOne({type:"main"},{[""+language]: 1});

            if(connect) {
                const dataReturn = connect[language][target];
                return res.json({
                    status : 1,
                    data: dataReturn,
                    msg: "Success take data"
                });
            } return res.json({
                status: 2,
                msg: "have not data"
            })

        } catch (error) {
            console.log("err.message", error.message);
            return res.status(500).json({msg: error.message})
        }
    },
    updateContent: async (req, res) => {
        try {
            const dataOnBody = req.body;

            const { type, langue, content, target} = dataOnBody;

            // const connect = CONTENT.findOne({ type: type}, {[""+langue] : 1});
            // connect[langue][target] = content;
            await CONTENT.findOneAndUpdate({type: type}, {
                [""+langue] : dataOnBody
            }, {new: true})

        } catch (err) {
            console.log("err.message", err.message);
            return res.status(500).json({msg: err.message})
        }
    }, 
}

module.exports = contentCtrl
