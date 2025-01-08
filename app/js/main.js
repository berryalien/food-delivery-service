$(function () {

  $('.article-slider__box').slick({
    dots: true,
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/icons/icon-chevron-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/icons/icon-chevron-right.svg" alt="arrow right"></button>'
  });

  var header = document.getElementById("assortment__filter");
  var btns = header.getElementsByClassName("assortment__btn-food");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

})


var mixer = mixitup('.assortment__gallery');