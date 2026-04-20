<?php

session_start();
//the isset function to check username is already loged in and stored on the session
if(!isset($_SESSION['user_id'])){
header('location:../index.php');	
}

if(isset($_GET['id'])){
$id=$_GET['id'];

include 'dbcon.php';


$qry="delete from staffs where user_id=$id";
$result=mysqli_query($con,$qry);

if(isset($_GET['ajax'])){
    if($result){
        echo json_encode(['status' => 'success', 'message' => 'Staff member has been removed successfully!', 'redirect' => 'staffs.php']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error occurred while removing staff member.']);
    }
    exit;
}

if($result){
    echo"DELETED";
    header('Location:staffs.php');
}else{
    echo"ERROR!!";
}
}
?>