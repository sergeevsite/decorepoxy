$(document).ready(function(){

// Настройки слайдера в секции Work
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
      320 : {
        items: 1

      },
      576 : {
        items: 2

      },
      768 : {
        items: 3

      },
      992 : {
        items: 3

      },
      1200 : {
        items: 4

      },
    }
  });

  $('#worksControlsLeft').click(function() {
    worksSlider.trigger('prev.owl.carousel');
  })

  $('#worksControlsRight').click(function() {
    worksSlider.trigger('next.owl.carousel');
  })

// Подключение и настройка плагина для стилизации Select
  $(function() {
  
    $('.form-select').styler();
    
  });
  

// Slick Slider

$('.wood-slider').slick({
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  speed: 100,
  infinite: true,
  nextArrow: '#woodControlsRight',
  prevArrow: '#woodControlsLeft',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        variableWidth: false,
        arrows: false,
      }
    },
  ]
});

$('.epoxy-slider').slick({
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  speed: 100,
  infinite: true,
  nextArrow: '#epoxyControlsRight',
  prevArrow: '#epoxyControlsLeft',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        variableWidth: false,
        arrows: false,
      }
    },
  ]
});


});

