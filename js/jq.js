$(document).ready(function(){

 
   $("#brand").animate({fontSize:'40px'},'slow');

    
if ( $(window).width() > 739) { 
   
 $(window).scroll(function(){
   
    var ScrollTop = $(window).scrollTop();
    if (ScrollTop > 20) {
    $("#navEx").fadeIn(1000);

    $("#navEx").css({ background:"white"});
      
    }
   if(ScrollTop==0){
       
      $("#navEx").css({background: "-webkit-gradient(linear,left top,right bottom, from(#5E35B1), to(#BA68C8))"});
   }
 
});


$("#port").click(function() {
    $('html,body').animate({
        scrollTop: $("#aboutImg").offset().top+582},
        'slow');
});
$("#about").click(function() {
    $('html,body').animate({
        scrollTop: $("#subHead").offset().top-48},
        'slow');
});
$("#career").click(function() {
    $('html,body').animate({
        scrollTop: $("#subHead").offset().top+1320},
        'slow');
});
}
}); 
       
     

        
  
 



