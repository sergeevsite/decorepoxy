$(document).ready(function(){

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


// Модальное окно
  var navbarBtn = $('#navbar-btn');
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

  // Форма в модального окна в шапке
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


});