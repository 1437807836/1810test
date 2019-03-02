<?php  
	include "conn.php";
	$id=$_GET['sid'];
	$result=mysql_query("select * from list where sid=$id ");
	
	$arr=mysql_fetch_array($result,MYSQL_ASSOC);
	echo json_encode($arr);

?>