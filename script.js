function increment(value) {
  if (value == 5) {
    value = 1;
  } else {
    value++;
  }
  return value;
}

function decrement(value) {
  if (value == 1) {
    value = 5;
  } else {
    value--;
  }
  return value;
}

function previousPreview() {
  let previewCount = document.getElementById("previewCount").innerHTML;
  document.getElementById("previewCount").innerHTML = decrement(previewCount);
}

function nextPreview() {
  let previewCount = document.getElementById("previewCount").innerHTML;
  document.getElementById("previewCount").innerHTML = increment(previewCount);
}

// slider 2 actions
let scrollPosition = 0;

let carouselWidth_slider2 = document.getElementById(
  "carousel-inner-slider2"
).scrollWidth;
let carouselItemWidth_slider2 = document.querySelector(
  ".carousel-item-slider2"
).offsetWidth;

function nextPreviewSlider2() {
  if (scrollPosition < carouselWidth_slider2 - carouselItemWidth_slider2*3) {
    scrollPosition = scrollPosition + carouselItemWidth_slider2;
    document.getElementById("carousel-inner-slider2").scrollLeft =
      scrollPosition + 10;
  }
}

function previousPreviewSlider2() {
  if (scrollPosition > 0) {
    scrollPosition = scrollPosition - carouselItemWidth_slider2;
    document.getElementById("carousel-inner-slider2").scrollLeft =
      scrollPosition - 10;
  }
}
