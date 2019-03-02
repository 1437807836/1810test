<?php
require "conn.php";
if (isset($_POST['telphone']) && isset($_POST['password'])) {
    $user = $_POST['telphone'];
    $pass = sha1($_POST['password']);
    $result = mysql_query("select * from user where user='$user' ");
    if (mysql_fetch_array($result)) {
        echo true;
    } else {
        echo false;
    }
}
 