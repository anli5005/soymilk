$(function () {
  $(".has-tooltip").hover(function() {
    $(this).children(".tooltip").toggleClass("active");
  });
});
