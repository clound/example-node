module.exports = function ( app ) {
    require('./login')(app);
    require('./home')(app);
    require('./logout')(app);
    require('./register')(app);
    require('./cart')(app);
    require('./getAllproductioninfo')(app);
};