"undefined" != typeof AOS && AOS.init({
        duration: 700,
        easing: "ease-out-quad",
        once: !0,
        startEvent: "load"
    });

// Contador
var e = document.querySelectorAll('[data-toggle="countup"]');

function o(e) {
    var t = e.dataset.from ? +e.dataset.from : null,
        o = e.dataset.to ? +e.dataset.to : null,
        n = e.dataset.decimals ? +e.dataset.decimals : null,
        a = e.dataset.duration ? +e.dataset.duration : null,
        i = e.dataset.options ? JSON.parse(e.dataset.options) : null,
        l = new CountUp(e, t, o, n, a, i);
    l.error ? console.error(l.error) : (l.start(), e.classList.add("counted"))
}
"undefined" != typeof CountUp && e && [].forEach.call(e, function(e) {
    "countup:in" !== e.getAttribute("data-aos-id") && o(e)
}), document.addEventListener("aos:in:countup:in", function(e) {
    if (e.detail instanceof Element) o(e.detail);
    else {
        var t = document.querySelectorAll('.aos-animate[data-aos-id="countup:in"]:not(.counted)');
        [].forEach.call(t, function(e) {
            o(e)
        })
    }
});

// header fixed
var header = new Headroom(document.querySelector("#header"), {
tolerance: 5,
offset : 205,
classes: {
  initial: "animated",
  pinned: "slideDown",
  unpinned: "slideUp"
}
});
header.init();

// slider documentos
var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 2,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
// slider Componenetes
var swiper = new Swiper('.swiper-container2', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 576px
    375: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 768px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    },
  },
  on: {
    init: function() {
      checkArrow();
    },
    resize: function () {
      checkArrow();
    }
  }
});

function checkArrow() {
  var swiperPrev = document.querySelector('.swiper-button-prev');
  var swiperNext = document.querySelector('.swiper-button-next');
  if ( window.innerWidth > 1024  ) {
    console.log('Success', window.innerWidth);
    swiperPrev.style.display = 'block';
    swiperNext.style.display = 'block';
  } else {
    swiperPrev.style.display = 'none';
    swiperNext.style.display = 'none';
  }
}