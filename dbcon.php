<?php
$host = getenv('DB_HOST') ?: "localhost";
$user = getenv('DB_USER') ?: "root";
$pass = getenv('DB_PASS') ?: "";
$name = getenv('DB_NAME') ?: "gymnsb";

$con = mysqli_connect($host, $user, $pass, $name);

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?><!-- Visit codeastro.com for more projects -->
