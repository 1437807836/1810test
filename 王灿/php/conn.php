<?php 
// header('content-type:text/html;charset="utf-8"');
// $conn=@mysql_connect('localhost','root','');
// if(!$conn){
// 	die('数据库连接有问题:'.mysql_error());
// }
// mysql_select_db('project');
// mysql_query('SET NAMES UTF8');
header("content-type:text/html;charset=utf-8");
$con = mysql_connect("localhost", "root", "");
if ($con) {
    $db = mysql_select_db("project");
    mysql_query("set names utf8");
}

 