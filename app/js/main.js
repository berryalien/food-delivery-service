$(function () {

  $('.select-styler, .product__input').styler();


  $('.burger').on('click', function () {
    $('.burger').toggleClass('burger__line--active');

    $('body').toggleClass('lock');
    $('.burger-nav').toggleClass('burger-nav--active');
  });

  $('.burger-filter').on('click', function () {
    $('.burger-filter').toggleClass('burger-filter--active');
    $('.catalog__filter-box').toggleClass('catalog__filter-box--active');
    $('body').toggleClass('lock');
  });

  $('.description__link').on('click', function (e) {
    e.preventDefault();
    $('.description__link').removeClass('description__link--active');
    $(this).addClass('description__link--active');

    $('.description__content').removeClass('description__content--active');
    $($(this).attr('href')).addClass('description__content--active');
  })

  $('.product__img-link').on('click', function (tabs) {
    tabs.preventDefault();
    $('body').addClass('lock');

    $('.product__console-wrapper').addClass('product__console-wrapper--active');
  })

  $('.product__console-btn').on('click', function () {
    $('body').removeClass('lock');
    $('.product__console-wrapper').removeClass('product__console-wrapper--active');
  })

  $('.nav__link').on('click',function () { 
    $('.nav__link').removeClass('nav__link--active');
    $(this).addClass('nav__link--active');
  })

  $(document).mouseup(function (e) {
    var div = $('.burger');
    if (!$('.product__console-wrapper, .burger-nav, .catalog__filter-box').is(e.target) &&
      $('.product__console-wrapper, .burger-nav, .catalog__filter-box').has(e.target).length === 0) {
      $('.burger').removeClass('burger__line--active');
      $('.burger-filter').removeClass('burger-filter--active');
      $('.burger-nav').removeClass('burger-nav--active');
      $('.catalog__filter-box').removeClass('catalog__filter-box--active');
      $('.product__console-wrapper').removeClass('product__console-wrapper--active');
      $('body').removeClass('lock');
    }
  });

  $('.filter-category__btn').on('click', function () {
    $('.burger-filter').removeClass('burger-filter--active');
    $('.catalog__filter-box').removeClass('catalog__filter-box--active');
    $('body').removeClass('lock');
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 769) {
      $('.restaurants__list:not(.slick-initialized), .discount__list:not(.slick-initialized)').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 12000,
      });
    }
    if ($(window).width() > 769) {
      $(".restaurants__list.slick-initialized").slick("unslick");
      $(".discount__list.slick-initialized").slick("unslick");
    }
  });

  $('.comments__slider:not(.slick-initialized)').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    infinite: false,
    prevArrow: '<button type="button" class="comments__arrow comments__arrow--prev"><span class="sr-only">Предидущий слайд</span><svg class="icons-sprite"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button>',
    nextArrow: '<button type="button" class="comments__arrow comments__arrow--next"><span class="sr-only">Следующий слайд</span><svg class="icons-sprite"><use xlink:href="images/sprite.svg#icon-right"></use></svg></button>',
    appendArrows: '.comments__slider',
    responsive: [{
      breakpoint: 769,
      settings: {
        dots: false
      }
    }]
  });

  $('.product__images:not(.slick-initialized)').slick({
    fade: true,
    prevArrow: '<button type="button" class="product__arrow product__arrow--prev"><span class="sr-only">Предидущий слайд</span><svg class="product__icons-sprite"><use xlink:href="images/sprite.svg#icon-chevron-left"></use></svg></button>',
    nextArrow: '<button type="button" class="product__arrow product__arrow--next"><span class="sr-only">Следующий слайд</span><svg class="product__icons-sprite"><use xlink:href="images/sprite.svg#icon-chevron-left"></use></svg></button>',
    appendArrows: '.product__images',
    asNavFor: '.product__console',
    responsive: [{
      breakpoint: 769,
      settings: {
        dots: false,
        arrows: false
      }
    }]
  });

  $('.product__console:not(.slick-initialized)').slick({
    fade: true,
    dots: true,
    prevArrow: '<button type="button" class="product__arrow product__arrow--prev"><span class="sr-only">Предидущий слайд</span><svg class="product__icons-sprite"><use xlink:href="images/sprite.svg#icon-chevron-left"></use></svg></button>',
    prevArrow: '<button type="button" class="product__arrow product__arrow--prev"><span class="sr-only">Предидущий слайд</span><svg class="product__icons-sprite"><use xlink:href="images/sprite.svg#icon-chevron-left"></use></svg></button>',
    nextArrow: '<button type="button" class="product__arrow product__arrow--next"><span class="sr-only">Следующий слайд</span><svg class="product__icons-sprite"><use xlink:href="images/sprite.svg#icon-chevron-left"></use></svg></button>',
    appendArrows: '.product__console',
    asNavFor: '.product__images',
    responsive: [{
      breakpoint: 769,
      settings: {
        dots: false
      }
    }]
  });

  $(".product__star").rateYo({
    starWidth: "16px",
    fullStar: true,
    spacing: "6px",
    normalFill: "#C1C1C1",
    readOnly: true,
    ratedFill: "#FFB800"
  });

  $(".description__stars").rateYo({
    starWidth: "16px",
    fullStar: true,
    spacing: "6px",
    normalFill: "#C1C1C1",
    readOnly: true,
    ratedFill: "#FFB800"
  });

  $(".description__form-stars").rateYo({
    starWidth: "16px",
    fullStar: true,
    spacing: "6px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
  });
});

var $range = $(".filter-price__input");
var $inputFrom = $(".filter-price__from");
var $inputTo = $(".filter-price__to");
var instance;
var min = 0;
var max = $inputTo;
var from = 0;
var to = 0;

$range.ionRangeSlider({
  type: "double",
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });

  $(this).prop("value", val);

});

$inputTo.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });

  $(this).prop("value", val);
});

var mixer = mixitup('.choice__foods, .catalog__list');
mixer.filter('.category-a');
