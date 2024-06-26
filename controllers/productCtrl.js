const PRODUCT = require('../models/productModel');
const Invoice = require('../models/invoiceModel');
const { getTodayFullFormat } = require('../units/supportDate')
const sentMailSale = require('./units/sentMail');

const productCtrl = {
    addProduct: async (req, res) => {
        try {
            const dataOnBody = req.body;

            dataOnBody.productCode = "XXX";
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
                const dataReturn = await PRODUCT.find({ productName: { $regex: value }, activate: true}, {logEdit: 0, createdAt: 0, updatedAt: 0,}); //, $options: "i"
                //const dataReturn = await PRODUCT.find({ productName: value }, {logEdit: 0, createdAt: 0, updatedAt: 0,});

                return res.json({ status: 1, msg: "successfully find product", data: dataReturn });
            }

            else if(type ==="price") {
                const { min_price, max_price } = dataOnBody;
                // min_price = 10
                // max_price = 100
                const dataReturn = await PRODUCT.find({
                    "price": {
                        "$gte": min_price, 
                        "$lte": max_price  
                    },
                    activate: true
                }, {logEdit: 0, createdAt: 0, updatedAt: 0,});
                return res.json({ status: 1, msg: "successfully find product", data: dataReturn });
            }

            else if(type === "category") {
                const dataReturn = await PRODUCT.find({ category: category , activate: true}, {logEdit: 0, createdAt: 0, updatedAt: 0,});
                return res.json({ status: 1, msg: "successfully find product", data: dataReturn });
            }

            else {
                const queryData = {};
                queryData[""+type] = dataOnBody.value;
                queryData.activate = true

       
                const dataReturn = await PRODUCT.find(queryData, {logEdit: 0, createdAt: 0, updatedAt: 0,});
                return res.json({ status: 1, msg: "successfully find product", data: dataReturn });  
            }


        } catch (err) {
            console.log("err.message", err.message);
            return res.status(500).json({msg: err.message})
        }
    },
    makeListMenu: async (req, res) => {
        try {
            const allData = await PRODUCT.find({activate: true},{ category: 1, productType: 1});
            const dataReturn = {};

            if(!allData) return res.json({ status: 0, msg: "Have not data"});
            
            allData.forEach(item => {
                if(item.category in dataReturn) {
                    if(!dataReturn[item.category].includes(item.productType)) dataReturn[item.category].push(item.productType);
                } else {
                    dataReturn[item.category] = [item.productType];
                }
            })

            return res.json({ status: 1, msg: "successfully find product", data: dataReturn });
        } catch (err) {
            console.log("err.message", err.message);
            return res.status(500).json({msg: err.message})
        }
    },
    takeAll: async (req, res) => {
        try {
            
             const dataReturn = await PRODUCT.find({}, {logEdit: 0, createdAt: 0, updatedAt: 0,});

             console.log("vo here")

             
             return res.json({ status: 1, msg: "successfully find product", data: dataReturn });
            
        } catch (err) {
            console.log("err.message", err.message);
            return res.status(500).json({msg: err.message})
        }
    },
    takeListCategory: async (req, res) => {
        try {
            const { type } = req.params;
            const dataOnBody = req.body;
            const allDataCategory = await PRODUCT.find({},{ category: 1, productType: 1}); //await PRODUCT.find({},{ logEdit: 0, createdAt:0, updatedAt:0, __v:0});

            const categories = [];
            allDataCategory.forEach(item => {
                if(categories.length ===0 ) {
                    categories.push(item.category);
                } else {
                    if(!categories.includes(item.category)) {
                        categories.push(item.category);
                    }
                }
            });

            if(type ==="index") {
                if(dataOnBody.value < categories.length) {
                    const dataCategoryWithIndex = await PRODUCT.find({ category: categories[dataOnBody.value]},{ logEdit: 0, createdAt:0, updatedAt:0, __v:0}); 
                    return res.json({ status:0, msg:"Success take data", data: dataCategoryWithIndex})
                } else return res.json({ status : 1, msg:"Have not data"})
            } else {
                if(categories.includes(dataOnBody.value)) {
                    const dataCategoryWithIndex = await PRODUCT.find({ category: dataOnBody.value},{ logEdit: 0, createdAt:0, updatedAt:0, __v:0}); 
                    return res.json({ status:0, msg:"Success take data", data: dataCategoryWithIndex})

                } else return res.json({ status : 1, msg:"Have not data"})
            }

            // return res.json({ categories });

        } catch (err) {
            console.log("err.message", err.message);
            return res.status(500).json({msg: err.message})
        }
    },
    sendMailSale: async (req, res) => {
        try {
            const dataOnBody = req.body;
            const to = "vanhaicddt2.1@gmail.com";
            const cc = "";
            const bcc = "";
            const subject = "[ShinGolf] Thông báo đơn hàng mới" + dataOnBody.id;

            function renderListProduct() {
                let result = [];
                if(dataOnBody.listProduct.length > 0) {
                    dataOnBody.listProduct.forEach(item => {
                       return result.push(`<tr>
                            <td style="border: 1px solid">${item.name}</td>
                            <td style="border: 1px solid">${item.quantity}</td>
                            <td style="border: 1px solid">${item.price}</td>
                        </tr>`)
                    })
                }

                return result.join('')
            }

            const html = `
                <h1>Thông báo đơn hàng mới</h1>
                <h3>Đơn hàng có mã: ${dataOnBody.id}</h3>
                <h3>Tong tiền: ${dataOnBody.totalPrice}</h3>
                <h3>Người nhận: ${dataOnBody.customerName}</h3>
                <h3>Số điện thoại:: ${dataOnBody.customerPhone}</h3>
                <h3>Địa chỉ: ${dataOnBody.customerAddress}</h3>
                <h3>Ghi chú: ${dataOnBody.customerNote}</h3>
                <br/>
                <h2>Danh sách sản phẩm</h2>
                <table>
                    <tr>
                        <th style="border: 1px solid">Tên hàng hóa</th>
                        <th style="border: 1px solid">Số lượng</th>
                        <th style="border: 1px solid">Thành tiền</th>
                    </tr>
                    ${renderListProduct()}
                </table>
                <br/>`

            sentMailSale(to, cc, bcc, subject, html, undefined, undefined);

            return res.json({ status: 1, msg: "Successfully send mail"});
        } catch (err) {
            console.log("err.message", err.message);
            return res.status(500).json({msg: err.message})    
        }
    },
    makeInvoice: async (req, res) => {
        try {
            const dataOnBody = req.body;

            const newIvocie = new Invoice({
                id: 125,
                customerName: dataOnBody.customerName,
                custormerAddress: dataOnBody.customerAddress,
                custormerPhone: dataOnBody.customerPhone,
                customerNote: dataOnBody.customerNote,
                status: [],
                confirm: false,
                productList: dataOnBody.productList,
                note: ""
            })

            await newIvocie.save()

            

            // send mail
            const to = "vanhaicddt2.1@gmail.com";
            const cc = "";
            const bcc = "";
            const subject = "[ShinGolf] Thông báo đơn hàng mới" + dataOnBody.id;

            function renderListProduct() {
                let result = [];
                if(dataOnBody.listProduct.length > 0) {
                    dataOnBody.listProduct.forEach(item => {
                       return result.push(`<tr>
                            <td style="border:1px solid;padding: 4px;font-size: 1.1rem;">${item.name}</td>
                            <td style="border:1px solid;padding: 4px;font-size: 1.1rem;">${item.quantity}</td>
                            <td style="border:1px solid;padding: 4px;font-size: 1.1rem;">${item.price}</td>
                            <td style="border:1px solid;padding: 4px;font-size: 1.1rem;">${item.option1}</td>
                            <td style="border:1px solid;padding: 4px;font-size: 1.1rem;">${item.option2}</td>
                        </tr>`)
                    })
                }

                return result.join('')
            }

            const html = `
                <h1>Thông báo đơn hàng mới</h1>
                <h3>Đơn hàng có mã: ${dataOnBody.id}</h3>
                <h3>Tong tiền: ${dataOnBody.totalPrice}</h3>
                <h3>Người nhận: ${dataOnBody.customerName}</h3>
                <h3>Số điện thoại:: ${dataOnBody.customerPhone}</h3>
                <h3>Địa chỉ: ${dataOnBody.customerAddress}</h3>
                <h3>Ghi chú: ${dataOnBody.customerNote}</h3>
                <br/>
                <h2>Danh sách sản phẩm</h2>
                <table>
                    <tr>
                        <th style="border:1px solid;padding: 8px;font-size: 1.15rem;background: yellow;">Tên hàng hóa</th>
                        <th style="border:1px solid;padding: 8px;font-size: 1.15rem;background: yellow;">Số lượng</th>
                        <th style="border:1px solid;padding: 8px;font-size: 1.15rem;background: yellow;">Thành tiền</th>
                        <th style="border:1px solid;padding: 8px;font-size: 1.15rem;background: yellow;">Lựa chọn 1</th>
                        <th style="border:1px solid;padding: 8px;font-size: 1.15rem;background: yellow;">Lựa chọn 2</th>
                    </tr>
                    ${renderListProduct()}
                </table>
                <br/>`

            sentMailSale(to, cc, bcc, subject, html, undefined, undefined);

            // send mail
            return res.json({ status: 1, msg: "Successfully send mail"});
            
        } catch(err) {
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
