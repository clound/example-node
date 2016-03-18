/**
 * Created by oem on 16-3-17.
 */
var Firstpage ={
    init: function(){
        var _this = this;
            $.ajax({
                url:'/getAllproductioninfo',
                type:'get',
                success:function(data,status){
                    var result = data;
                    if(status == 'success') {
                        var num = Math.floor(result.length / 8);
                        for (var i = 0; i <= 8; i++) {
                            console.log("len" + i+Math.floor(result.length/8));
                            var html = '<li class="brick-item">' +
                                '<div class="figure figure-img">' +
                                '<a target="_blank"  href="#">' +
                                '<img width="160" height="160" alt="" src="/images/' + result[i].imgSrc + '">' +
                                '</a>' +
                                '</div>' +
                                '<h3 class="title">' +
                                '<a target="_blank"  href="#"></a>' +
                                '</h3>' +
                                '<p class="desc">' + result[i].description + '</p>' +
                                '<p class="price"> <span class="num">' + result[i].price + '</span>元 </p>' +
                                '</li>';
                            if(Math.floor(i/8) <= 0) {
                                $(".content ul").append(html);
                            }
                            if(i<=num){
                                var pagcont = '<span class="prepage">'+
                                    '<a title="prefix" href="#">' + (i+1) + '</a>'+
                                    '</span>';
                                $(".content .product-list").append(pagcont);
                            }
                        }
                    }
                },
                error:function(data,err){
                    console.log("data %o",  data);
                }
            });
        _this.showPage();
    },
    showPage: function () {
        console.log("len+++++++++++++");
        //$(".content ul").children('li').remove();
        $(".content .prepage").on('click','a',function () {
            var num = $(this).children('a').text();
            var url = '/getAllproductioninfo/' + num;
            console.log("len+++++++++++++*"+num);
            $.ajax({
                url: url,
                type: 'get',
                success:function(data,status){
                    var result = data;
                    $(".content ul").removeChild();
                    if(status == 'success') {
                        var len = Math.floor(result.length);
                        for (var i = 0; i <= len; i++) {
                            console.log("len+++++++++++++");
                            var html = '<li class="brick-item">' +
                                '<div class="figure figure-img">' +
                                '<a target="_blank"  href="#">' +
                                '<img width="160" height="160" alt="" src="/images/' + result[i].imgSrc + '">' +
                                '</a>' +
                                '</div>' +
                                '<h3 class="title">' +
                                '<a target="_blank"  href="#"></a>' +
                                '</h3>' +
                                '<p class="desc">' + result[i].description + '</p>' +
                                '<p class="price"> <span class="num">' + result[i].price + '</span>元 </p>' +
                                '</li>';
                            $(".content ul").append(html);
                        }
                    }
                },
                error:function(data,err){
                    console.log("data %o",  data);
                }
            })
        })
    }
}

