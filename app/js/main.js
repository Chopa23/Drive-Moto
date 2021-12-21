$(function () {
  $(".banner__slider").slick({
    dots: true,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    prevArrow:
      '<button class="banner-slider-btn banner-slider-btn-prev"><img src="images/left.svg" alt=""></button>',
    nextArrow:
      '<button class="banner-slider-btn banner-slider-btn-next"><img src="images/right.svg" alt=""></button>',
  });
});
