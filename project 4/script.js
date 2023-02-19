window.onload = function () {
  const parallax = document.querySelector(".parallax");
  const content = document.querySelector(".parallax__container");
  const clouds = document.querySelector(".images-parallax__clouds");
  const city = document.querySelector(".images-parallax__city");
  const human = document.querySelector(".images-parallax__human");
  //кофіієнти
  const forClouds = 40;
  const forCity = 20;
  const forHuman = 10;

  //швидкість
  const speed = 0.05;
  //змінні
  let positionX = 0,
    positionY = 0;
  let coordXprocent = 0,
    coordYprocent = 0;

  function setMouseParallaxStyle() {
    const distX = coordXprocent - positionX;
    const distY = coordYprocent - positionY;

    positionX = positionX + distX * speed;
    positionY = positionY + distY * speed;

    clouds.style.cssText =
      "transform: franslate(${positionX / forClouds}%, ${positionY / forClouds}%)";
    city.style.cssText =
      "transform: franslate(${positionX / forCity}%, ${positionY / forCity}%)";
    human.style.cssText =
      "transform: franslate(${positionX / forHuman}%, ${positionY / forHuman}%)";

    requestAnimationFrame(setMouseParallaxStyle);
  }

  setMouseParallaxStyle();

  parallax.addEventListener("mousemove", function (e) {
    const parallaxWidth = parallax.offsetWidth;
    const parallaxHeight = parallax.offsetHeight;

    const coordX = e.pageX - parallaxWidth / 2;
    const coordY = e.pageY - parallaxHeight / 2;

    coordXprocent = (coordX / parallaxWidth) * 100;
    coordYprocent = (coordY / parallaxHeight) * 100;
  });
};

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
