<?php
session_start();
//the isset function to check username is already loged in and stored on the session
if(!isset($_SESSION['user_id'])){
header('location:../index.php');	
}
?>

<?php 
        
            if(isset($_POST['fullname'])){
            $fullname = $_POST["fullname"];    
            $username = $_POST["username"];
            $gender = $_POST["gender"];
            $contact = $_POST["contact"];
            $address = $_POST["address"];
            $designation = $_POST["designation"];
            $id = $_POST["id"];
            // 
            include 'dbcon.php';
            //code after connection is successfull
            //update query
            $qry = "update staffs set fullname='$fullname', username='$username', gender='$gender', contact='$contact',  address='$address', designation='$designation' where user_id='$id'";
            $result = mysqli_query($con,$qry); //query executes
            
            if(isset($_POST['ajax'])){
              if($result){
                echo json_encode(['status' => 'success', 'message' => 'Staff details has been updated successfully!', 'redirect' => 'staffs.php']);
              } else {
                $errorMsg = mysqli_error($con);
                echo json_encode(['status' => 'error', 'message' => 'Error: ' . $errorMsg]);
              }
              exit;
            }

            if(!$result){
                echo"ERROR!!";
            }else {

                header('Location:staffs.php');

            }

            }else{
                echo"<h3>YOU ARE NOT AUTHORIZED TO REDIRECT THIS PAGE. GO BACK to <a href='index.php'> DASHBOARD </a></h3>";
            }
?>
