$(document).ready(function(){

// Модальное окно
  var navbarBtn = $('.callback');
  var closeBtn = $('#close-mdl');
  var modal = $('#modal');
  var overlay = $('#overlay');

  navbarBtn.on('click', function(){
    modal.addClass('modal_active');
  });

  closeBtn.on('click', function(){
    modal.removeClass('modal_active');
  });

  overlay.on('click', function(){
    modal.removeClass('modal_active');
  });

// Валидация форм в секции оформление заявки
$("#form-order").validate({
  errorElement: "div",
  errorClass: "invalid",
  rules: {
    userName: {
      required: true,
      minlength: 2,
    },
    userPhone: {
      required: true,
      minlength: 1,
    },
  },
  messages: {
    userName: "Пожалуйста, введите свое имя",
    userPhone: "Пожалуйста, введите свой телефон",
  }
});

// Валидация форм в модальных окнах
$("#form-modal").validate({
  errorElement: "div",
  errorClass: "invalid",
  rules: {
    userNameModal: {
      required: true,
      minlength: 2,
    },
    userPhoneModal: {
      required: true,
      minlength: 1,
    },
  },
  messages: {
    userNameModal: "Пожалуйста, введите свое имя",
    userPhoneModal: "Пожалуйста, введите свой телефон",
  }
});

 // Маска для телефона
 $(".phone").mask("+7 (999) 999-99-99");

// Форма модального окна при отправке
      var submitBtn = $('#submit-btn');
      var modalSuccess = $('#success');

      submitBtn.on('submit', function(e) {
      e.preventDefault();
      if ($('#modal-phone').val().length) {
        $.ajax({
          url: 'mail.php',
          type: 'POST',
          data: $(this).serialize(),
          success: function(data) {
            $(this).closest('form').find("input[type=tel]").val('');
            modalSuccess.addClass('modal-success_active'); 
            modal.removeClass('modal_active');
            $('input').removeClass('valid')
          }
        }); 
      } else {
      }
    });

// инициализация select
$('select').select2({
  minimumResultsForSearch: Infinity,
  theme: 'classic'
});

// Якорные ссылки
$("#heroButton").click(function (e) {
e.preventDefault();
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
return false;
});


});