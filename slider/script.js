let allSlides = [
  {
    src: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  },
  {
    src: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
  },
  {
    src: "https://www.lightstalking.com/wp-content/uploads/stephanie-leblanc-JLMEZxBcXCU-unsplash.jpg",
  },
  {
    src: "https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1907862843.jpg",
  },
  {
    src: "https://t3.ftcdn.net/jpg/07/61/66/26/360_F_761662688_PtKytZfox6XNk7bslR5ahhGswCJN5QBZ.jpg",
  },
];

function AddImages() {
  let slider = document.querySelector(".slider");

  allSlides.forEach((val, index) => {
    let div = document.createElement("div");
    let img = document.createElement("img");

    img.src = val.src;
    div.classList.add("slide");

    if (index == 0) {
      div.classList.add("active");
    }
    if (index == 1) {
      div.classList.add("next");
    }
    if (index == allSlides.length - 1) {
      div.classList.add("prev");
    }

    div.appendChild(img);
    slider.append(div);
  });
}

AddImages();

let activeSlide = 0;
const slides = document.querySelectorAll(".slide");

let left = document.querySelector("#click-left");

left.onclick = function () {
  SwipePrevSlide();
};

let right = document.querySelector("#click-right");

right.onclick = function () {
  SwipenewSlide();
};

function SwipenewSlide() {
  slides[activeSlide].classList.add("prev");
  let nextSlide = activeSlide < slides.length - 1 ? activeSlide + 1 : 0;
  slides[nextSlide].classList.remove("prev");
  slides[nextSlide].classList.remove("next");
  slides[nextSlide].classList.add("active");

  if (nextSlide < slides.length - 1) {
    slides[nextSlide + 1].classList.add("next");
    slides[nextSlide + 1].classList.remove("prev");
  } else {
    slides[0].classList.remove("prev");
    slides[0].classList.add("next");
  }
  activeSlide = nextSlide;
}

function SwipePrevSlide() {
  slides[activeSlide].classList.add("next");
  let prevSlide = activeSlide > 0 ? activeSlide - 1 : slides.length - 1;
  slides[prevSlide].classList.remove("next");
  slides[prevSlide].classList.remove("prev");
  slides[prevSlide].classList.add("active");

  if (prevSlide > 0) {
    slides[prevSlide - 1].classList.add("prev");
    slides[prevSlide - 1].classList.remove("next");
  } else {
    slides[slides.length - 1].classList.remove("next");
    slides[slides.length - 1].classList.add("prev");
  }

  activeSlide = prevSlide;
}
