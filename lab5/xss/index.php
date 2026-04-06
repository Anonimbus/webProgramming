<!DOCTYPE html>
<html>
<body>

<h2>XSS Demo (Vulnerable)</h2>

<form method="GET">
    Enter name: <input type="text" name="name">
    <button type="submit">Submit</button>
</form>

<p>Hello,
<?php
if (isset($_GET['name'])) {
    echo $_GET['name']; // NOT SAFE
}
?>
</p>

</body>
</html>


<!-- 
Run using
```
cd lab5/xss
php -S localhost:8000
```
in the field "Enter name:" put
```
<script>alert('XSS')</script>
```
This will bring out a popup in the webise
-->