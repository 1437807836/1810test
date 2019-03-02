<?php
require_once('conn.php');
if (isset($_POST['telphone']) ) {
    $telphone = $_POST['telphone'];
    $query = "select * from user where user='$telphone'";
	$result = mysql_query($query);
	
    if (mysql_fetch_array($result)) {
        echo false;
    } else {
        echo true;
    }
}
if(isset($_POST['submit'])){
	$tel=$_POST['tel'];
	$pass=$_POST['pass'];
	$pass=md5($pass);
	// $select="insert into user(user,password) values('{$tel}','{$pass}')";
	$sql="insert into `user`(`user`,`password`) VALUES('{$tel}','{$pass}')";
	$row=mysql_query($sql);
	if($row){
	echo "<script>
			alert('注册成功！正在进入登录页面...');
			window.location.href='../src/login.html';
		</script>";
	}	
	// mysql_query($sql);      
	// header('location:../src/login.html');
}