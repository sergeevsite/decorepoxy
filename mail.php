<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['userName'];
$phone = $_POST['userPhone'];
$length = $_POST['userLength'];
$width = $_POST['userWidth'];
$hight = $_POST['userHight'];
$wood = $_POST['userWood'];
$epoxy = $_POST['userEpoxy'];
$extra = $_POST['userExtra'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'decorepoxy@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'zapana21'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('decorepoxy@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('decorepoxy@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка отправлена с сайта Decor Epoxy.';
$mail->Body    = '' .$name . ' Отправил(а) заявку с сайта. <br> Номер телефона: ' .$phone ' <br> Размеры изделия. <br> Длина: ' .$length ' <br> Ширина: ' .$width ' <br> Высота: ' .$hight ' <br> Вид дерева: ' .$wood ' <br> Вид полимерки: ' .$epoxy ' <br> Комментарий: ' .$extra;

$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Пожалуйста, повторите позже';
} else {
    echo 'Форма успешно отправлена';
}
?>