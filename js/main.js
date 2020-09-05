// $(document).ready(function(){
//     var $cabecera = $('#header');
//     var previousScroll = 0;
//     $(window).scroll(function(event){
//        var scroll = $(this).scrollTop();
//        if (scroll > previousScroll && scroll > 50){
//            $cabecera.addClass('bgcolor');
//        } else {
//            $cabecera.removeClass('bgcolor');
//        }
//        previousScroll = scroll;    });
 
//   });


  $(window).scroll(function() {        
    var scroll = $(window).scrollTop();    
    if (scroll >= 100) {
       $("#header").addClass("bgcolor");    
    }else{
       $("#header").removeClass("bgcolor");
    }
});