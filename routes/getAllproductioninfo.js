/**
 * Created by oem on 16-3-18.
 */
module.exports = function ( app ) {
    //查看购物车商品
    app.get('/getAllproductioninfo', function(req, res) {
        var Productinfo = global.dbHelper.getModel('commodity');
            Productinfo.find({}, function (error, docs) {
                if(error){
                    console.log("docs1 %o", docs);
                }
                else{
                    console.log("docs %o", docs);
                    res.send(docs);

                }
            });
    })
}

