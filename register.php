<?php
include 'config.php';

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'],PASSWORD_BCRYPT);
    $phone = $_POST['phone'];
    $address = $_POST['address'];

    $sql = "insert into citizens (name,email,password,phone,address) values('$name','$email','$password','$phone','$address')";

    if(mysqli_query($conn,$sql)){
        echo "Registration successful!";
    }else{
        echo "Error: " . mysqli_error($conn);
    }
}
?>