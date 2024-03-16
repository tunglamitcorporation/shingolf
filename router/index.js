function route(app) {
    app.use('/content', require('./contentRouter'));
    app.use('/reservation', require('./reservationRouter'));

}

module.exports = route;
