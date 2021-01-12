"undefined" != typeof AOS && AOS.init({
        duration: 700,
        easing: "ease-out-quad",
        once: !0,
        startEvent: "load"
    });

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


var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
