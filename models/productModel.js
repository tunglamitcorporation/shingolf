const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    price: { type: Number, required: true},
    description: { type: String, required: true},
    category: { type: String, required: true},
    type: { type: String, required: true},
    quantity: { type: Number, required: true},
    rate: { type: Number },
    image1: { type: String },
    image2: { type: String },
    image3: { type: String },
    image4: { type: String },
    image5: { type: String },
    image6: { type: String },
    image7: { type: String },
    image8: { type: String },
    image9: { type: String },
    image10: { type: String},
    logEdit: { type: Array, default: []}
}, {
    timestamps: true
})

module.exports = mongoose.model("product", productSchema);
