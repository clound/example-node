/**
 * Created by oem on 16-3-18.
 */
module.exports = function ( app ) {
    //查看商品
    app.get('/getAllproductioninfo', function(req, res) {
        var Productinfo = global.dbHelper.getModel('commodity');
            Productinfo.find({},function (error, docs) {
                if(error){
                    //console.log("docs1 %o", docs);
                }
                else{
                    //console.log("docs %o", docs);
                    res.send(docs);

                }
        });
    })
    app.get('/getAllproductioninfo/:id', function(req, res) {
        var page = req.params.id;
        console.log("page+" + page);
        var Productinfo = global.dbHelper.getModel('commodity');
        Productinfo.count({}, function(err, count) {
            Productinfo.find({}, null, {skip: (page-1)*8, limit: 8,sort:{"time":-1}}, function (error, docs) {
                if(error){
                    console.log("docs1 %o", docs);
                }
                else{
                    console.log("docs %o", docs);
                    res.send(docs);

                }
            })
        });
    })
}
