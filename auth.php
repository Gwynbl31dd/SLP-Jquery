<?php
    $login = "admin";
    $password = "admin";
    if( isset($_POST['login']) && isset($_POST['password']) ){
        if($_POST['login'] == $login && $_POST['password'] == $password){
            session_start();
            $_SESSION['user'] = $login;
            echo "true";
        }
        else{ // Sinon
            echo "false";
        }
    }
?>

