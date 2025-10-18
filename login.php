<?php
include 'config.php';
session_start();

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $email= $_POST['email'];
    $password = $_POST['password'];

    $query = "select*from citizens where email='$email'";
    $result = mysqli_query($conn,$query);

    if($result && mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
        if(password_verify($password,$row['password'])){
            $_SESSION['citizen_id'] = $row['id'];
            $_SESSION['citizen_name'] = $row['name'];
            header("Location: dashboard.html");
            exit;
        }else{
            echo "Invalid password";
        }
    }else{
        echo "No account found with that email!";
    }
}
?>