function openNav() {
  $('#side-nav').width('200px');
  $(document.body).css('background-color', 'rgba(0,0,0,0.5)');
}

function closeNav() {
  $('#side-nav').width('0px');
  $(document.body).css('background-color', 'white');
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
}); 
