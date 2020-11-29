$(document).ready(function(){

  // OPEN/CLOSE RESPONSIVE MENU

    // menu mobile open

    $('.mob_menu__button').on('click touchstart', function(event) {
      event.preventDefault();

      $('body').addClass('active');
      $('.responsive_wrapper').addClass('active');
    });

    // menu close

    $('.responsive_wrapper .close_menu').on('click touchstart', function(event) {
      event.preventDefault();

      $('body').removeClass('active');
      $('.responsive_wrapper').removeClass('active');
    });

});