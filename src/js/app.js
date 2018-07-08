$(function() {

  // begin require SVG for IE
  require('./modules/svg4everybody')();
  // end   require SVG for IE

  // begin preloader
  require('./modules/preloader')();
  // end   preloader

  // begin Popup
  // require('./modules/popup')();
  // end   Popup

  // begin Sticky header
  require('./modules/stickyHeader')();
  // end   Sticky header

  // begin Animate.css
  // require('./modules/waypoints')();
  // require('./modules/animateCss')();
  // end   Animate.css

  // begin Fancybox3
  require('./modules/fancybox')();
  // end   Fancybox3

  // begin slick
  require('./modules/slick')();
  // end   slick

  // begin mobile menu
  require('./modules/mobileMenu')();
  // end   mobile menu

  // begin всплывающий подвал
  require('./modules/bubbleFooter')();
  // end   всплывающий подвал

  // begin активация кастомизированного пункта списка при клике
  require('./modules/customUl')();
  // end   активация кастомизированного пункта списка при клике

  // begin маска телефона в inputs
  require('./modules/maskedinput')();
  // end   маска телефона в inputs

  // begin отправка формы на странице контактов
  require('./modules/sendForm')();
  // end отправка формы на странице контактов

});