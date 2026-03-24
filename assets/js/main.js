jQuery(document).ready(function($) {

  // Header scroll
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
      $('.ds-header').addClass('ds-fixed-header');
    } else {
      $('.ds-header').removeClass('ds-fixed-header');
    }
  }).scroll();

  // Theme toggle
  var saved = localStorage.getItem('theme') || 'dark';
  $('html').attr('data-theme', saved);
  updateIcon(saved);

  $('#ds-mode-toggle').on('click', function() {
    var current = $('html').attr('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    $('html').attr('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
  });

  function updateIcon(theme) {
    $('#ds-mode-toggle').html(
      theme === 'dark' ? '<i class="ri-sun-line"></i>' : '<i class="ri-moon-line"></i>'
    );
  }

});
