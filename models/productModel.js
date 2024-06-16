const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    category: {type: String, required: true},
    productType: {type: String, required: true},
    productCode: {type: String, required: true},
    productname: { type: String, required: true },
    productImage: { type: [String], default: [] },
    status: { type: String, required: true },
    amount: { type: Number, required: true },
    price: { type: Number, required: true },
    saleprice: { type: Number, required: true },
    rate: { type: Number, required: true },
    loft: { type: String },
    sticktype: { type: String },
    stickhardtype: { type: String },
    feature: { type: String },
    long: { type: String },
    weight: { type: String },
    stickcover: { type: String },
    accessory: { type: String },
    grip: { type: String },
    hand: { type: String },
    rank: { type: String },
    produceyear: { type: String },
    managenumber: { type: String },
    size: { type: String },
    shoestype: { type: String },
    sex: { type: String },
    brand: { type: String },
    producelocation: { type: String },
    guarantee: { type: String },
    color: { type: String },
    material: { type: String },
    content: {
        // type: Object
        content1: { type: String },
        content2: { type: String },
        content3: { type: String },
        content4: { type: String }
    },
    images: {
        image1: { type: String },
        image2: { type: String },
        image3: { type: String },
        image4: { type: String }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("product", productSchema);
