// menu toggle
$(function () {
  $(".menu-toggle").on("click", function () {
    var $toggle = $(this);

    $toggle.toggleClass("active").siblings(".menu-sub").slideToggle();

    $toggle.siblings(".menu-mega").children(".menu-sub").slideToggle();

    $toggle.parent().siblings(".menu-item-group").children(".menu-sub").slideUp();

    $toggle.parent().siblings(".menu-item-group").children(".menu-mega").children(".menu-sub").slideUp();

    $toggle.parent().siblings(".menu-item-group").children(".menu-toggle").removeClass("active");
  });

  $(".menu-item-group > .menu-link, .menu-item-mega > .menu-link").on("click", function (e) {
    if ($(window).width() < 1200 || !mobileAndTabletCheck()) return;

    e.preventDefault();
  });
});

// navbar mobile toggle
$(function () {
  var $body = $("html, body");
  var $navbar = $(".js-navbar");
  var $navbarToggle = $(".js-navbar-toggle");

  $navbarToggle.on("click", function () {
    $navbarToggle.toggleClass("active");
    $navbar.toggleClass("is-show");
    $body.toggleClass("overflow-hidden");
  });
});

$(function () {
  var $moveTop = $(".btn-movetop");
  var $window = $(window);
  var $body = $("html");

  if (!$moveTop.length) return;

  $window.on("scroll", function () {
    if ($window.scrollTop() > 150) {
      $moveTop.addClass("show");

      return;
    }

    $moveTop.removeClass("show");
  });

  $moveTop.on("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });
});

// file input
$(function () {
  $(".js-file-input").on("change", function () {
    var fileName = $(this).val().split(/\\|\//).pop();

    $(this).closest(".js-file").find(".js-file-text").text(fileName);

    var target = $(this).data("target");
    if (target) {
      readURL(this, target);
    }
  });

  function readURL(input, target) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $(target).show();
        $(target).attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
});

// swiper template
function addSwiper(selector, options = {}) {
  return Array.from(document.querySelectorAll(selector), function (item) {
    var $sliderContainer = $(item),
        $sliderEl = $sliderContainer.find(selector + "__container");

    if (options.navigation) {
      $sliderContainer.addClass("has-nav");
      options.navigation = {
        prevEl: $sliderContainer.find(selector + "__prev"),
        nextEl: $sliderContainer.find(selector + "__next")
      };
    }

    if (options.pagination) {
      $sliderContainer.addClass("has-pagination");
      options.pagination = {
        el: $sliderContainer.find(selector + "__pagination"),
        clickable: true
      };
    }

    return new Swiper($sliderEl, options);
  });
}

$(function () {
  const infoSlider = addSwiper('.info-slider', {
    speed: 600,
    loop: true,
    navigation: true,
    pagination: true
  })[0];

  const imgSlider = addSwiper('.img-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  })[0];

  if (infoSlider && imgSlider) {
    infoSlider.controller.control = imgSlider;
    imgSlider.controller.control = infoSlider;
  }
});

$(function () {
  addSwiper('.intro-slider', {
    speed: 600,
    loop: true,
    navigation: true,
    pagination: true,
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  })[0];
});

$(function () {
  addSwiper('.banner-slider', {
    speed: 800,
    loop: true,
    navigation: true,
    pagination: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  })[0];
});

$(function () {

  const $search = $('.search');

  $('.search-btn').on('click', function () {

    $search.addClass('show');
  });

  $('.search__close').on('click', function () {

    $search.removeClass('show');
  });
});

$(function () {

  $('.filter__btn').on('click', function () {

    $('.filter__box').slideToggle('fast');
  });
});

$(function () {

  new WOW().init();
});

$(function () {

  const $container = $('.project-sync');

  $('.img-slider, .info-slider__title, .info-slider__link').on('mouseover', function () {

    $container.addClass('active');
  }).on('mouseleave', function () {

    $container.removeClass('active');
  });
});

$(function () {

  const $window = $(window);

  const $content = $('.intro-slider__content, .js-left-content');

  const $frame = $('.intro-slider__frame, .js-right-content');

  if (!$frame.length || $window.width() < 992) return;

  $window.on('scroll', calcPos);

  function calcPos() {

    const windowHeight = $window.height();

    const scrollTop = $window.scrollTop();

    const framePos = $frame.offset().top - windowHeight * 2 / 3 - scrollTop + $frame.outerHeight() / 2;

    const contentPos = $content.offset().top - windowHeight * 2 / 3 - scrollTop + $content.outerHeight() / 2;

    $content.css('transform', `translateX(-${contentPos > 0 ? Math.floor(contentPos / 2) : 0}px)`);

    $frame.css('transform', `translateX(${framePos > 0 ? Math.floor(framePos / 2) : 0}px)`);
  }
});

$(function () {

  const $window = $(window);

  const $content = $('.js-right-part');

  const $frame = $('.js-left-part');

  if (!$frame.length || $window.width() < 992) return;

  $window.on('scroll', calcPos);

  calcPos();

  function calcPos() {

    const windowHeight = $window.height();

    const scrollTop = $window.scrollTop();

    const framePos = $frame.offset().top - windowHeight * 2 / 3 - scrollTop + $frame.outerHeight() / 2;

    const contentPos = $content.offset().top - windowHeight * 2 / 3 - scrollTop + $content.outerHeight() / 2;

    $content.css('transform', `translateY(-50%) translateX(-${contentPos > 0 ? Math.floor(contentPos / 2) : 0}px)`);

    $frame.css('transform', `translateX(${framePos > 0 ? Math.floor(framePos / 2) : 0}px)`);
  }
});

$(function () {

  const $window = $(window);

  const $content = $('.parallax-1');

  if (!$content.length || $window.width() < 992) return;

  $window.on('scroll', calcPos);

  function calcPos() {

    const windowHeight = $window.height();

    const scrollTop = $window.scrollTop();

    const contentPos = $content.offset().top - windowHeight * 2 / 3 - scrollTop + $content.outerHeight() / 3;

    $content.css('transform', `translateY(${contentPos > 0 ? Math.floor(contentPos / 5) : 0}px)`);
  }
});

$(function () {

  const $window = $(window);

  const $content = $('.parallax-2');

  if (!$content.length || $window.width() < 992) return;

  $window.on('scroll', calcPos);

  function calcPos() {

    const windowHeight = $window.height();

    const scrollTop = $window.scrollTop();

    const contentPos = $content.offset().top - windowHeight * 2 / 3 - scrollTop + $content.outerHeight() / 3;

    $content.css('transform', `translateY(${Math.floor(contentPos / 5)}px)`);
  }
});