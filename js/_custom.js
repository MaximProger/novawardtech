$(document).ready(function () {
  // Burger menu
  $(".header__burger").on("click", function () {
    $("#nav").toggleClass("active");
  });

  var header = $("#header");
  var introH = $("#intro").innerHeight();
  var scrollOffset = $(window).scrollTop();

  /* Fixed Header */

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
  });

  /* Smooth scroll */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav").removeClass("active");
    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });
});
