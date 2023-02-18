const sliderImgs = document.querySelectorAll(".slider__img"),
  sliderLine = document.querySelector(".slider__line"),
  sliderDots = document.querySelectorAll(".slider__dot"),
  sliderBntPrev = document.querySelector(".slider__bnt-prev"),
  sliderBntNext = document.querySelector(".slider__bnt-next");

let sliderCount = 0,
  sliderWidth;

window.addEventListener("resize", showSlide);

sliderBntNext.addEventListener("click", nextSlide);
sliderBntPrev.addEventListener("click", prevSlide);

function showSlide() {
  sliderWidth = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImgs.length + "px";
  sliderImgs.forEach((item) => {
    item.style.width = sliderWidth + "px";
    item.style.height = "auto";
  });

  rollSlider();
}
showSlide();

function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImgs.length) sliderCount = 0;
  rollSlider();
  thisSlide(sliderCount);
}

function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderImgs.length - 1;
  rollSlider();
  thisSlide(sliderCount);
}

function rollSlider() {
  sliderLine.style.transform = "translateX(${-sliderCount * sliderWidth}px)";
}

function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove("active-dot"));
  sliderDots[index].classList.add("active-dot");
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});
