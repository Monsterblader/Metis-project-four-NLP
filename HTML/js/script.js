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

  switch (slideIndex) {
    case 2:
      d3.select('.body-background').style('background-image', "url('../images/background.png')");
      break;
    default:
      d3.select('.body-background').style('background-image', "url('')");
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const matchTopics = ref => {
  d3.selectAll(ref + ' tr.match.one')
    .transition()
    .duration(2000)
    .style('background-color', 'maroon');
  setTimeout(() => {
    d3.selectAll(ref + ' tr.match.two')
      .transition()
      .duration(2000)
      .style('background-color', 'darkgreen');
  }, 1000);
  setTimeout(() => {
    d3.selectAll(ref + ' tr.match.three')
      .transition()
      .duration(2000)
      .style('background-color', 'purple');
  }, 2000);
  setTimeout(() => {
    d3.selectAll(ref + ' tr.match.four')
      .transition()
      .duration(2000)
      .style('background-color', 'darkgrey');
  }, 3000);
  setTimeout(() => {
    d3.selectAll(ref + ' tr.match.five')
      .transition()
      .duration(2000)
      .style('background-color', 'orange');
  }, 4000);
}

let slideIndex = 1;

showSlides(slideIndex);
document.onkeydown = checkKey;
