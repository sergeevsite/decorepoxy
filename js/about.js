$(document).ready(function(){

  // Настройки слайдера about
    var worksSlider =  $(".owl-carousel");
    worksSlider.owlCarousel({
      items: 3,
      dots: false,
      nav: true,
      margin: 30,
      animateOut: 'fadeOut',
    });
  
    // $('#worksControlsLeft').click(function() {
    //   worksSlider.trigger('prev.owl.carousel');
    // })
  
    // $('#worksControlsRight').click(function() {
    //   worksSlider.trigger('next.owl.carousel');
    // })
  
  });
  
  