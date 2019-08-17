$(document).ready(function(){

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

// Обработка и отправка формы через AJAX в секции формы
$('#form-order').on('submit', function(event){
  event.preventDefault();
  var len = $('#user-name').val().length;
    if ( len >= 2 ){
      if ($('#user-name').val().length && $('#user-phone').val().length) {
        $.ajax({
          url: 'mail.php',
          type: 'POST',
          data: $(this).serialize(),
          success: function(data) {
            $(this).closest('form').find("input[type=text]").val('');
            $(this).closest('form').find("input[type=tel]").val('');
            modalSuccess.addClass('success_active');
            $('input').removeClass('valid')
          }
        });
      } else {
      }
    } else {
      return;
    }
  });
});