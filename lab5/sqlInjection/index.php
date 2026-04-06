<!DOCTYPE html>
<html>
<body>

<h2>XSS Demo (Vulnerable)</h2>
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
<form method="GET">
    Enter name: <input type="text" name="name">
    <button type="submit">Submit</button>
</form>

<p>Hello,
<?php
if (isset($_GET['name'])) {
    echo $_GET['name']; //  XSS vulnerable
}
?>
</p>

<hr>

<h2>SQL Injection Demo (Vulnerable)</h2>

<p>
    To test SQL Injection:<br> 
    - you have to create a table named 'test' inside
    your sql database using phpmyadmin(or such) <br>
    - add your Credentials in db.php along with the table_name

</p>

<?php include 'db.php'; ?>

<?php
if (!$conn) {
    echo "Connection variable not set!";
}
?>

<form method="POST">
    Username: <input name="user"><br>
    Password: <input name="pass" type="password"><br>
    <button type="submit">Login</button>
</form>

<?php
if ($_POST) {
    $u = $_POST['user'];
    $p = $_POST['pass'];

    $sql = "SELECT * FROM users WHERE username='$u' AND password='$p'";

    echo "<pre>$sql</pre>"; // DEBUG: shows query

    $result = $conn->query($sql);

    if (!$result) {
        die("SQL Error: " . $conn->error); // SHOW ERROR
    }

    if ($result->num_rows > 0) {
        echo "<p style='color:green;'>Login Success</p>";
    } else {
        echo "<p style='color:red;'>Login Failed</p>";
    }
}
?>

</body>
</html>