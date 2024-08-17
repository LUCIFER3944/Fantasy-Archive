<?php

if($_SERVER['REQUEST_METHOD']=='POST'  ){
include('server.php');
$fname=$_POST['fname'];
$lname=$_POST['lname'];
$email=$_POST['email'];
$password=$_POST['password'];
$sql="INSERT INTO `userdetails`( `fname`, `lname`, `email`, `password`) VALUES ('$fname','$lname','$email','$password')";

if(mysqli_query($conn,$sql)){
    header("location:Login.php");
}



}





?>