$(document).ready(function(){
// Slick Slider

  $('.wood-slider').slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 300,
    infinite: false,
    nextArrow: '.wood-control__right',
    prevArrow: '.wood-control__left'
  });

  // $('.epoxy-slider').slick({
  //   centerMode: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   variableWidth: true,
  //   speed: 300,
  //   infinite: false,
  // });

});
  
  