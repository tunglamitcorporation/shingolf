const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    category: {type: String, required: true},
    productType: {type: String, required: true},
    productCode: {type: String, required: true},
    productname: { type: String, required: true },
    productImage: { type: [String], default: [] },
    status: { type: String, required: true, default: "còn hàng" },
    amount: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    saleprice: { type: Number, required: true, default: 0 },
    rate: { type: Number, required: true },
    loft: { type: String, default:"" },
    sticktype: { type: String, default:"" },
    stickhardtype: { type: String, default:"" },
    feature: { type: String, default:"" },
    long: { type: String, default:"" },
    weight: { type: String, default:"" },
    stickcover: { type: String, default:"" },
    accessory: { type: String, default:"" },
    grip: { type: String, default:"" },
    hand: { type: String, default:"" },
    rank: { type: String, default:"" },
    produceyear: { type: String, default:"" },
    managenumber: { type: String, default:"" },
    size: { type: String, default:"" },
    shoestype: { type: String, default:"" },
    sex: { type: String, default:"" },
    brand: { type: String, default:"" },
    producelocation: { type: String, default:"" },
    guarantee: { type: String, default:"" },
    color: { type: String, default:"" },
    material: { type: String, default:"" },
    content: {
        // type: Object
        content1: { type: String, default:"" },
        content2: { type: String, default:"" },
        content3: { type: String, default:"" },
        content4: { type: String, default:"" },
    },
    images: {
        image1: { type: String , default:"" },
        image2: { type: String , default:"" },
        image3: { type: String , default:"" },
        image4: { type: String , default:"" }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("product", productSchema);
