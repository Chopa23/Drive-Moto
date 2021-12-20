$(function () {
  // $(".banner__slider-img").slick({
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  // });
  $(".banner__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-slider-btn banner-slider-btn-prev"><img src="images/file:///C:/Users/User/Documents/Drive-Moto/app/images/left.svg" alt=""></button>',
    nextArrow:
      '<button class="banner-slider-btn banner-slider-btn-next"><img src="images/right.svg" alt=""></button>',
  });
  // $(".products__slider").slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   prevArrow:
  //     '<button class="banner-slider-btn products__slider-btn-prev banner-slider-btn-prev"><img src="images/arrow-left-dark.svg" alt=""></button>',
  //   nextArrow:
  //     '<button class="banner-slider-btn products__slider-btn-next banner-slider-btn-next"><img src="images/arrow-right-dark.svg" alt=""></button>',
  // });
});
