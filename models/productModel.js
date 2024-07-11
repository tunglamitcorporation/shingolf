const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    category: {type: String, required: true},
    productType: {type: String, required: true},
    productCode: {type: String, required: true},
    productName: { type: String, required: true },
    productImage: { type: [String], default: [] },
    status: { type: String, default: "còn hàng" },
    amount: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    saleprice: { type: Number,  default: 0 },
    rate: { type: Number, },
    loft: { type: Object },
    sticktype: { type: String, default:"" },
    stickhardtype: { type: Object, default: {
            type1:"",
             type2:"",
             type3:""
    }},
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
    size: { type: Object },
    shoestype: { type: Object },
    sex: { type: String, default:"" },
    brand: { type: String, default:"" },
    producelocation: { type: String, default:"" },
    guarantee: { type: String, default:"" },
    color: { type: Object },
    material: { type: String, default:"" },
    content: {
        // type: Object
        type: Object ,
        default: {
            content1: { type: String, default:"" },
            content2: { type: String, default:"" },
            content3: { type: String, default:"" },
            content4: { type: String, default:"" }},
    },
    images: {
        type: Object ,
        default: {
            image1: { type: String , default:"" },
            image2: { type: String , default:"" },
            image3: { type: String , default:"" },
            image4: { type: String , default:"" }
        }
    },
    activate: {type: Boolean, default: true}
}, {
    timestamps: true
})

module.exports = mongoose.model("product", productSchema);
