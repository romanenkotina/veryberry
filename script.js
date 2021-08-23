$("#promoCarousel").carousel({
  interval: 5000,
});

$("#carouselPhotosIndicators").carousel({
  interval: 2500,
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

$("#btnBooking").on("touchstart", () => {
  window.location.href = "dummy.html";
});

$("#btnBooking").on("click", () => {
  $(".popup-fade").fadeIn("slow");
});

$(".close").on("click", () => {
  $(".popup-fade").fadeOut("slow");
});

$(".popup-fade").click(function (e) {
  if ($(e.target).closest(".popup").length == 0) {
    $(this).fadeOut();
  }
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    $(".arrowtop").removeClass("hidden");
  } else {
    $(".arrowtop").addClass("hidden");
  }
});

$(".arrowtop").on("click", () => {
  window.scrollTo(0, 0);
});

const mainMenu = document.getElementById("mainMenu");
const btnMobile = document.getElementById("btnMobile");

btnMobile.addEventListener("click", () => {
  mainMenu.classList.toggle("menu-mobile");
});
