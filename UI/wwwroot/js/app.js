function openNav() {
  $('#side-nav').width('200px');
  $(document.body).css('background-color', 'rgba(0,0,0,0.5)');
}

function closeNav() {
  $('#side-nav').width('0px');
  $(document.body).css('background-color', 'white');
}

$(document).ready(function () {
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
});
