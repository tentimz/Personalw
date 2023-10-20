<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = fz.tenfati@gmail.com; // Replace with your email address
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";
    
    mail($to, $subject, $message, $headers);
    
    // Send a response back to the client (you can customize this).
    echo "Email sent successfully!";
}
?>
