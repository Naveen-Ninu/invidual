$(".hamburger-menu").on("click", function () {
  $(".hamburger-menu").toggleClass("animate");
  $("#overlay").toggleClass("overlay-active");
  $(".main-top-section").toggleClass("mobile-view");
  $("body").toggleClass("fix-screen-mobile");
  $(".hero-background").toggleClass("overflow-initial");
});
$(document).ready(function () {
  const Section1 = document.querySelector("#mint");
  const Section2 = document.querySelector("#about");
  const Section3 = document.querySelector("#showcase");
  const Section4 = document.querySelector("#mission");
  const Section5 = document.querySelector("#roadmap");
  const Section6 = document.querySelector("#Team");

  // const mainMenu = document.querySelector(" #main-menu ");
  // SECTION-1 SCROLL
  $(".section-1").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $(".main-top-section").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section1.scrollIntoView();
  });
  // SECTION-2 SCROLL
  $(".section-2").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $(".main-top-section").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section2.scrollIntoView();
  });

  // SECTION-3 SCROLL
  $(".section-3").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $(".main-top-section").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section3.scrollIntoView();
  });

  // SECTION-4 SCROLL
  $(".section-4").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $(".main-top-section").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section4.scrollIntoView();
  });

  // SECTION-5 SCROLL
  $(".section-5").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $(".main-top-section").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section5.scrollIntoView();
  });

  // SECTION-6 SCROLL
  $(".section-6").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $(".main-top-section").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section6.scrollIntoView();
  });
});
$(".contact_link").on("click", function () {
  $(".hamburger-menu").removeClass("animate");
  $("#overlay").removeClass("overlay-active");
  $(".main-top-section").removeClass("mobile-view");
  $("body").removeClass("fix-screen-mobile");
  $(".hero-background").removeClass("overflow-initial");
});
