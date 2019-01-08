function openNav() {
  $('#side-nav').width('200px');
  $(document.body).css('background-color', 'rgba(0,0,0,0.5)');
}

function closeNav() {
  $('#side-nav').width('0px');
  $(document.body).css('background-color', 'white');
}

function cross(bar) {
  bar.classList.toggle("change");
  $('.hidden-mobile-contents').toggleClass('hidden-figure');
  $('.nested-hidden-contents').css('display', 'hidden');
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slideshow-container');
  var dots = document.getElementsByClassName('preview');
  var captionText = document.getElementById('caption');
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

$(document).ready(function () {
  let modal = document.getElementById('modal-container');

  $('#first-option').hover(
    function () {
      $('#second-nav').width('200px');
    },
    function () {
      $('#second-nav').width('0px');
    });

  $('#second-nav').hover(
    function () {
      $('#second-nav').width('200px');
    },
    function () {
      $('#second-nav').width('0px');
    });

  $('.button').click(
    function () {
      $('.modal').css('display', 'block');
    });
  $('.close').click(
    function () {
      $('.modal').css('display', 'none');
    });
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  $('#expand').click(
    function () {
      $(".nested-hidden-contents").toggle();
    });
  showSlides(slideIndex);
}); 
