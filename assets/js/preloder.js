//----------- PRELOADER-----------------
// $("body").addClass("overflow-y-hidden");
// $("body").addClass("preloader-class");
// setTimeout(function () {
//   $("#preloader").fadeToggle();
//   $("body").removeClass("overflow-y-hidden");
//   $("body").removeClass("preloader-class");
// }, 3000);

// ===============BACK-TO-TOP=================
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});
