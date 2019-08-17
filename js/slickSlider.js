$(document).ready(function(){
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
        dots: true,
        dotsClass: 'materials-dots',
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
        dots: true,
        dotsClass: 'materials-dots',
      }
    },
  ]
});

});