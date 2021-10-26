$(document).ready(function () {
  $(".slider").slick({
      autoplay: true,
      autoplaySpeed: 3500,
      cssEase: 'linear',
      fade: true,
      infinite: true,
      speed: 600,
      // prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      // nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
});