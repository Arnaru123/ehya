<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['username'];
$email = $_POST['email'];
$subscribe = $_POST['subscribe'];
$userlogin = $_POST['username'];


// Формирование самого письма

if(isset($subscribe)){
    $title = "Подписка";
    $body = "
    <h2>Новая подписка</h2>    
    <b>Email:</b> $subscribe
    ";    
} else if(isset($userlogin)){
    $title = "Почта\логин";
    $body = "
    <h2>Ваша почта и логин</h2>
    <b>Name:</b> $name<br>    
    <b>Email:</b> $email<br><br>    
    ";
} 


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;    
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

// Настройки вашей почты
$mail->Host = 'smtp.gmail.com'; // SMTP сервера вашей почты
$mail->Username = 'solotag9@gmail.com'; // Логин на почте
$mail->Password = 'FeranirFRNR123'; // Пароль на почте
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('solotag9@gmail.com', 'Best Tour Plan'); // Адрес самой почты и имя отправителя

// Получатель письма
$mail->addAddress('Di17000@mail.ru');  

    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: subscribe.html');