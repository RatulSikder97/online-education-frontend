$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });

  $("#menu").slicknav({
    label: "",
    closeOnClick: true,
    prependTo: "nav .wrapper",
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll > 70) {
      $("nav, header + section").addClass("fixed");
    } else {
      $("nav, header + section").removeClass("fixed");
    }
  });
});
