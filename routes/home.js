module.exports = function ( app ) {
    app.get('/home', function (req, res) {
        if(req.session.user){
            var Commodity = global.dbHelper.getModel('commodity');
            Commodity.find({}, function (error, docs) {
                res.render('home',{Commoditys:docs});
            });
        }else{
            req.session.error = "请先登录"
            res.redirect('/login');
        }
    });
    app.get('/addcommodity', function(req, res) {
        res.render('addcommodity');
    });
    app.post('/addcommodity', function (req, res) {
        var Commodity = global.dbHelper.getModel('commodity');
        console.log("req body" + req.body.description);
        Commodity.create({
            name: req.body.name,
            description:req.body.description,
            price: req.body.price,
            imgSrc: req.body.imgSrc
        }, function (error, doc) {
            if (doc) {
                res.send(200);
            }else{
                res.send(404);
            }
        });
    });
}