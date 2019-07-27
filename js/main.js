$(document).ready(function(){

// Настройки слайдера
  var worksSlider =  $(".owl-carousel");
  worksSlider.owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: false,
    margin: 30,
    responsive: {
      768 : {
        items: 2

      },
      992 : {
        items: 3

      },
      1200 : {
        items: 3

      },
    }
  });

  $('#worksControlsLeft').click(function() {
    worksSlider.trigger('prev.owl.carousel');
  })

  $('#worksControlsRight').click(function() {
    worksSlider.trigger('next.owl.carousel');
  })


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
  
  // Настройки navbar 
$(window).resize(function() {
  width = $(window).width();
  if (width < 991) {
    $('#navbar-btn').addClass('navbar__button_active');
  }
  else {
    $('#navbar-btn').removeClass('navbar__button_active');
  }
});

// Появление меню при клике на экранах меньше 991px
$('#menu-btn').click(function(){
  $('#menu-btn').toggleClass('menu-mobile__burger_active');
  $('#menu-list').toggleClass('menu-mobile__list_active');
});


});
