$(".autoplay").slick({
  autoplay: true,
  centerMode: true,
  centerPadding: "110px",
  autoplaySpeed: 2500,
  dots: false,
  infinite: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 1.7,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        centerPadding: "140px",
      },
    },
    {
      breakpoint: 576,
      settings: {
        centerPadding: "10px",
        slidesToShow: 1,
      },
    },
  ],
});

$(".vertical_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 3,
  centerMode: true,
  centerPadding: "110px",
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2500,
  vertical: true,
  verticalswaping: true,
  asNavFor: ".vertical_image_slider",
  responsive: [
    {
      breakpoint: 576,
      settings: {
        centerPadding: "80px",
        slidesToShow: 1,
      },
    },
  ],
});
$(".vertical_image_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "25px",
  autoplay: true,
  arrows: false,
  fade: true,
  asNavFor: ".vertical_slider",
  autoplaySpeed: 2500,
  focusOnSelect: true,
});
