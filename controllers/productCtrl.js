const PRODUCT = require('../models/productModel');
const { getTodayFullFormat } = require('../units/supportDate')

const productCtrl = {
    addProduct: async (req, res) => {
        try {
            const dataOnBody = req.body;

            if(!dataOnBody) return res.json({ msg: "Have note data"}) 
            dataOnBody.logEdit = [];
            dataOnBody.logEdit.push({
                date: getTodayFullFormat(),
                action: "Add product"
            });
            const newProduct = new PRODUCT(dataOnBody);
            await newProduct.save();
            return res.status(200).json({msg: "Product added successfully"})

        } catch (err) { 
            console.log("err.message", err.message);
            return res.status(500).json({msg: err.message})
        }
    }, 
    updatePorduct: async (req, res) => {
        try {
            const dataOnBody = req.body;
            const id = req.params.id;

            const oldData = await PRODUCT.findOne({_id: id}, {logEdit: 0, createdAt: 0, updatedAt: 0, __v: 0});
            if("logEdit" in dataOnBody) delete dataOnBody.logEdit;
            if(!oldData) return res.json({ status: 2, msg:"Have not product"});
            delete oldData._id
            const changeDataRecord = compareObjects(oldData._doc, dataOnBody);

            if(Object.keys(changeDataRecord).length > 1) {
                delete changeDataRecord._id;
                await PRODUCT.findByIdAndUpdate(id, {
                    ...dataOnBody,
                    $push: { logEdit: changeDataRecord}
                });
                return res.json({ status: 1, msg: "Product updated successfully"})
            } else {
                return res.json({ status: 3, msg:"Have not data change"})
               // await PRODUCT.findByIdAndUpdate(id, dataOnBody,);
            }
        } catch (err) {
            console.log("err.message", err.message);
            return res.status(500).json({msg: err.message})
        }            
    },
    findProduct: async (req, res) => {
        try {
            const { category, type } = req.params;
            const dataOnBody = req.body;
            const { value } = dataOnBody;

            if(type === "name") {
                const dataReturn = await PRODUCT.find({ name: { $regex: value, $options: "i" }}, {logEdit: 0, createdAt: 0, updatedAt: 0,});
                return res.json({ status: 1, msg: "successfully find product", data: dataReturn });
            }

            if(type ==="price") {
                const { min_price, max_price } = dataOnBody;
                // min_price = 10
                // max_price = 100
                const dataReturn = await PRODUCT.find({
                    "price": {
                        "$gte": min_price, 
                        "$lte": max_price  
                    }
                }, {logEdit: 0, createdAt: 0, updatedAt: 0,});
                return res.json({ status: 1, msg: "successfully find product", data: dataReturn });
            }

            if(type === "category") {
                const dataReturn = await PRODUCT.find({ category: category }, {logEdit: 0, createdAt: 0, updatedAt: 0,});
                return res.json({ status: 1, msg: "successfully find product", data: dataReturn });
            }
        } catch (err) {
            console.log("err.message", err.message);
            return res.status(500).json({msg: err.message})
        }
    },
    makeListMenu: async (req, res) => {
        try {
            const allData = await PRODUCT.find({},{ category: 1, type: 1});
            const dataReturn = {};

            if(!allData) return res.json({ status: 0, msg: "Have not data"});
            
            allData.forEach(item => {
                if(item.category in dataReturn) {
                    dataReturn[item.category].push(item.type);
                } else {
                    dataReturn[item.category] = [item.type];
                }
            })

            return res.json({ status: 1, msg: "successfully find product", data: dataReturn });
        } catch (error) {
            console.log("err.message", err.message);
            return res.status(500).json({msg: err.message})
        }
    }
}

function compareObjects(obj1, obj2) {
    const diff = {};
    for (let key in obj1) {
        if (obj1.hasOwnProperty(key) && obj1[key] !== obj2[key]) {
            diff[key] = obj2[key];
        }
    }
    return diff;
}

module.exports = productCtrl
