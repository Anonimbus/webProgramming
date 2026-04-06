<?php
$conn = new mysqli("127.0.0.1", "username", "password", "test");
// add your login credentials here with the table_name

if ($conn->connect_error) {
    echo "DB ERROR: " . $conn->connect_error;
}
?>