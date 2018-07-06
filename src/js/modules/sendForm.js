module.exports = function() {

  // begin отправка формы на странице контактов

  $("#contacts__form").submit(function () {
    $.ajax({
      type: "POST",
      url: "assets/php/form.php",
      data: $(this).serialize()
    }).done(function () {
      $('#contacts__form')[0].reset();
      $('.popup-success__layer').fadeIn();
    });
    return false;
  });

  // end отправка формы на странице контактов

}