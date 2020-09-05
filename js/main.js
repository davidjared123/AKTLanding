  $(window).scroll(function() {        
    var scroll = $(window).scrollTop();    
    if (scroll >= 100) {
       $("#header").addClass("bgcolor");    
    }else{
       $("#header").removeClass("bgcolor");
    }
});