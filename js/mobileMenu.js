$(document).ready(function(){

// Настройки navbar 
$(window).scroll(function(){
  scroll = $(window).scrollTop();
  if (scroll > 500) {
      $('.logo').addClass('logo_active');
      $('#navbar-btn').hide();
  } else {
      $('.logo').removeClass('logo_active');
      $('#navbar-btn').show();
  }
});

let flag = false
$(window).resize(function() {
  width = $(window).width();
  if (width < 991 && !flag) {
    $('.navbar__button').remove();
    flag = true
  }
  else if (width >= 991 && flag) {
    newdiv = $("<button id=\"navbar-btn\" class=\"button callback navbar__button\">Заказать звонок<\/button>");
    $("#navbar-info").append(newdiv);
    flag = false
  }
});

// Появление меню при клике на экранах меньше 991px

$('#menu-btn').click(function(){
    $('#menu-btn').toggleClass('menu-mobile__burger_active');
    $('#menu-list').toggleClass('menu-mobile__list_active');
    $('.menu-mobile__item').toggleClass('menu-mobile__item_active');
    
    if($('.menu-mobile__burger').hasClass('menu-mobile__burger_active')) {
      $('html, body').css('overflow', 'hidden');
    } else {
      $('html, body').css('overflow', 'visible');
    }
});


});