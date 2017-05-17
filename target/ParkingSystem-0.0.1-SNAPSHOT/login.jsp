<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport"
	content="width=device-width,initial-scale=1,maximum-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>烽火停车场管理系统</title>

<script src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>

<link rel="stylesheet" type="text/css" href="resource/css/login.css" />

</head>

<body onload=loading()>
	<script>
		function checkUser(){
			var account = document.getElementById("account").value;
		   	var password = document.getElementById("password").value;
		   	
		   	if(account.trim() == ""){
		     	alert("输入用户名无效");
		     	return false;
		   	}
		   	if(password.trim() == ""){
		   		alert("输入密码无效");
		     	return false;
		   	}
		   	
		   	$.ajax({
           		type : "POST",  
               	url : "/ParkingSystem/User/login",
               	data:$("#loginForm").serialize(),
               	success : function(msg) {
               		var obj = eval(msg);
                   	if (obj.success) { 
                       	window.location.href = "index.jsp";
                   	} else {
                      	alert(obj.msg);
                   	}  
               	}
           	});
           	return false;
		}
	</script>

	<div class="box">
		<div class="login-box">
			<div class="login-title">
				<h1>
					<small>烽火停车场管理系统</small>
				</h1>
			</div>
			<div class="login-content">
				<div class="form">
					<form id="loginForm" action="User/login" method="post"
						onsubmit="return checkUser();">
						<div class="input-group">
							<input type="text" id="account" name="account"
								class="form-control" placeholder="用户名" required="required"
								autofocus="autofocus">
						</div>
						<div class="input-group">
							<input type="password" id="password" name="password"
								class="form-control" placeholder="密码" required="required">
						</div>
						<div class="link">
							<a href="regist.jsp">注册</a> <a href="findPassword.jsp">忘记密码</a>
						</div>
						<div>
							<button type="submit" class="btn-sm">登录</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>