$(document).ready(function(){
    $("#open_menu").click(function(){
        $("nav").css("width","240px")
    });
    $("#close_menu").click(function(){
        $("nav").css("width","0")
    });

    let sirina = $(window).width()

    if(sirina <= 991){
        $("#md_7").removeClass("col-md-7");
        $("#md_7").addClass("col-md-12");
    }
    if(sirina <= 767){
        $(".order_now").addClass("btn-warning");
    }
    
});
 
