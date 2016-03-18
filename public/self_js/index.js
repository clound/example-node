/**
 * Created by oem on 16-3-17.
 */
$(function () {
    $.ajax({
        url:'/getAllproductioninfo',
        type:'get',
        success:function(data,status){
            var result = data;
            if(status == 'success'){
                for(var i= 0,len= result.length;i<len;i++){
                    var html = '<li class="brick-item">'+
                            '<div class="figure figure-img">'+
                            '<a target="_blank"  href="#">'+
                            '<img width="160" height="160" alt="" src="/images/'+result[i].imgSrc+'">'+
                            '</a>'+
                            '</div>'+
                            '<h3 class="title">'+
                            '<a target="_blank"  href="#"></a>'+
                            '</h3>'+
                            '<p class="desc">'+result[i].description+'</p>'+
                            '<p class="price"> <span class="num">'+result[i].price+'</span>元 </p>'+
                            '</li>';
                    $(".content ul").append(html);
                }
            }
        },
        error:function(data,err){
            console.log("data %o",  data);
        }
    });
});