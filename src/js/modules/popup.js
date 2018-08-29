module.exports = function() {

  // begin popup-service open
  $('.services__item').on('click', function() {
    var popup = $(this).data('popup');

    $('.popup-layer').fadeIn();
    $('#' + popup).fadeIn();
    $('body').addClass('no-scroll');
  });
  // end popup-service open

  // begin popup close
  $('.popup__close, .popup-layer').on('click', function() {
    $('.popup-layer, .popup-wrap').fadeOut();
    $('body').removeClass('no-scroll');
  });
  // end popup close

};