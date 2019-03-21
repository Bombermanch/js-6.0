$(document).ready(function() {
  $('.main_btn, .main_btna, a[href="#sheldure"]').on('click', function(){
    $('.overlay').fadeToggle('slow');
    $('.modal').slideToggle('slow');
  });  
  $('.close').on('click', function(){
    $('.overlay').fadeToggle('slow');
    $('.modal').slideToggle('slow');
  });
  
});