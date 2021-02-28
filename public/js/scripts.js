// Carousel slideshow source: https://www.w3schools.com/howto/howto_js_slideshow.asp
// Combination of manual and automatic functionality source: https://stackoverflow.com/questions/43961189/automatic-slideshow-with-button

var timeoutId;
var slideIndex = 0;
showSlides();
var slides,
  dots;

function plusSlides(position) {
  clearTimeout(timeoutId);
  slideIndex += position;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function currentSlide(index) {
  clearTimeout(timeoutId);
  if (index > slides.length) {
    index = 1;
  } else if (index < 1) {
    index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index - 1].style.display = "block";
}

function showSlides() {
  var i;
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  timeoutId = setTimeout(showSlides, 3000); // Change image every 3 seconds
}
