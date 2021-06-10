$("#recipeCarousel").carousel({
  interval: 0,
});

$(".carousel .carousel-item").each(function () {
  let minPerSlide = 3;
  let next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (let i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});

$(".promotion-control-next").on("click", function () {
  if ($(".promo1").hasClass("active")) {
    $(".promo-text1").addClass("promo-text-active");
  } else {
    $(".promo-text1").removeClass("promo-text-active");
  }
  if ($(".promo2").hasClass("active")) {
    $(".promo-text2").addClass("promo-text-active");
  } else {
    $(".promo-text2").removeClass("promo-text-active");
  }
  if ($(".promo3").hasClass("active")) {
    $(".promo-text3").addClass("promo-text-active");
  } else {
    $(".promo-text3").removeClass("promo-text-active");
  }
  if ($(".promo4").hasClass("active")) {
    $(".promo-text4").addClass("promo-text-active");
  } else {
    $(".promo-text4").removeClass("promo-text-active");
  }
  if ($(".promo5").hasClass("active")) {
    $(".promo-text5").addClass("promo-text-active");
  } else {
    $(".promo-text5").removeClass("promo-text-active");
  }
});

$(".promotion-control-prev").on("click", function () {
  if ($(".promo1").hasClass("active")) {
    $(".promo-text5").removeClass("promo-text-active");
    $(".promo-text4").addClass("promo-text-active");
  } else if ($(".promo2").hasClass("active")) {
    $(".promo-text1").removeClass("promo-text-active");
    $(".promo-text5").addClass("promo-text-active");
  } else if ($(".promo3").hasClass("active")) {
    $(".promo-text2").removeClass("promo-text-active");
    $(".promo-text1").addClass("promo-text-active");
  } else if ($(".promo4").hasClass("active")) {
    $(".promo-text3").removeClass("promo-text-active");
    $(".promo-text2").addClass("promo-text-active");
  } else if ($(".promo5").hasClass("active")) {
    $(".promo-text4").removeClass("promo-text-active");
    $(".promo-text3").addClass("promo-text-active");
  }
});

$("#agecheck").on("click", () => {
  $(".popup").removeClass("popup-fade");
  console.log("boop");
});

$(".close").on("click", () => {
  $(".popup").addClass("popup-fade");
  console.log("boop");
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    $(".arrowtop").removeClass("popup-fade");
  } else {
    $(".arrowtop").addClass("popup-fade");
  }
});

$(".arrowtop").on("click", () => {
  window.scrollTo(0, 0);
});
