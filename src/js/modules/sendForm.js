module.exports = function() {

  // begin отправка формы на странице контактов

  $("#contacts__form").submit(function () {
    $.ajax({
      type: "POST",
      url: "assets/php/form.php",
      data: $(this).serialize()
    }).done(function () {
      $('#contacts__form')[0].reset();
      $('.popup-layer, .popup-wrap').fadeIn();
      $('body').addClass('no-scroll');
    });
    return false;
  });

  // end отправка формы на странице контактов

}