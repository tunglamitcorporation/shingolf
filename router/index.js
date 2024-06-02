function route(app) {
    app.use('/product', require('./productRouter'));
    app.use('/user', require('./userRouter'));
}

module.exports = route;
