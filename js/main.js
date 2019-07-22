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
  });

  $('#worksControlsLeft').click(function() {
    console.log('left');
    worksSlider.trigger('prev.owl.carousel');
  })

  $('#worksControlsRight').click(function() {
    console.log('right');
    worksSlider.trigger('next.owl.carousel');
  })

// Настройки navbar меню
$(window).scroll(function(){
  if ($(window).scrollTop() > 500) {
      $('.logo').addClass('navbar__logo_active');
      $('.navbar__button').addClass('navbar__button_active');
    }
    else {
      $('.logo').removeClass('navbar__logo_active');
      $('.navbar__button').removeClass('navbar__button_active');
  }
});

});