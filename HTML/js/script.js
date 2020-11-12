const checkKey = e => {
  const err = e || window.event;

  if (e.keyCode == '37') {
    plusSlides(-1);
  } else if (e.keyCode == '39') {
    plusSlides(1);
  }
}

// Next/previous controls
const plusSlides = n => showSlides(slideIndex += n);

// Thumbnail image controls
const currentSlide = n => showSlides(slideIndex = n);

const showSlides = n => {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("slideshow-dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let slideIndex = 1;

showSlides(slideIndex);
document.onkeydown = checkKey;
