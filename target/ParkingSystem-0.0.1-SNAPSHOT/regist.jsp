<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport"
	content="width=device-width,initial-scale=1,maximum-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>欢迎注册</title>

<script src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>

<link rel="stylesheet" type="text/css" href="resource/css/regist.css" />

</head>

<body onload=loading()>
	<script>
		function checkIsValid(errorTip,id){
			if($("#"+id).val().trim() == ""){
				console.log(errorTip);
		     	$("#"+id).val("");
		   	}
		}
		function checkInfo(){
		   	var password = document.getElementById("password").value;
		   	var confirm = document.getElementById("confirm").value;
		  
		   	if(password.trim().length!=password.length){
		   		alert("输入密码无效");
		     	return false;
		   	} 	
		   	
		   	if(password!=confirm){
		   		alert("输入密码不匹配");
		     	return false;
		   	}
		  
		   	$.ajax({
           		type : "POST",  
               	url : "/ParkingSystem/User/regist",
               	data:$("#registForm").serialize(),
               	success : function(msg) {
               		var obj = eval(msg);
                   	if (obj.success) { 
                   		alert("注册成功，请登录！");
                       	window.location.href = "index.jsp";
                   	} else {
                   		var errorMsg = obj.msg;
                      	alert(errorMsg);
                   	}  
               	}
           	});
           	return false;
		};
		
		function checkEmail(value){
			$.ajax({
           		type : "POST",  
               	url : "/ParkingSystem/User/checkEmail",
               	data:'Email='+value,
               	success : function(msg) {
               		var obj = eval(msg);
                   	if (obj.success) { 
                   		alert("邮箱已注册");
                   		$("#Email").val("");
                   	}  
               	}
           	});
		};
		
		function checkAccount(value){
			if(value.trim() == ""){
				console.log("账号为空");
		     	$("#account").val("");
		   	}else{
		   		$.ajax({
	           		type : "POST",  
	               	url : "/ParkingSystem/User/checkAccount",
	               	data:'account='+value,
	               	success : function(msg) {
	               		var obj = eval(msg);
	                   	if (obj.success) { 
	                   		alert("该账号已注册,请重新输入账号");
	                   		$("#account").val("")
	                   	}  
	               	}
	           	});
		   	}
		};
		
		function checkPhone(value){
			$.ajax({
           		type : "POST",  
               	url : "/ParkingSystem/User/checkPhone",
               	data:'phone='+value,
               	success : function(msg) {
               		var obj = eval(msg);
                   	if (obj.success) { 
                   		alert("电话已注册");
                   		$("#phone").val("")
                   	}  
               	}
           	});
		}
	</script>

	<div class="box">
		<div class="login-box">
			<div class="login-title">
				<h1>
					<small>烽火社团网申系统</small>
				</h1>
			</div>
			<div class="login-content">
				<div class="form">
					<form id="registForm" action="User/regist" method="post"
						onsubmit="return checkInfo();">
						<div class="link">
							<a href="login.jsp">返回登录</a> <a href="findPassword.jsp">找回密码</a>
						</div>
						<div class="input-group">
							<input type="email" id="Email" name="Email" class="form-control"
								placeholder="请输入注册邮箱" required="required" autofocus="autofocus"
								onblur="checkEmail(this.value);">
						</div>
						<div class="input-group">
							<input type="tel" id="phone" name="phone" class="form-control"
								placeholder="请输入手机号码" required="required"
								onblur="checkPhone(this.value);">
						</div>
						<div class="input-group">
							<input type="text" id="account" name="account"
								class="form-control" placeholder="用户名(用于登录)" required="required"
								onblur="checkAccount(this.value)">
						</div>
						<div class="input-group">
							<input type="text" id="nickName" name="nickName"
								class="form-control" placeholder="昵称(用于展示)" required="required"
								onblur="checkIsValid('昵称为空',this.id)">
						</div>
						<div class="input-group">
							<input type="password" id="password" name="password"
								class="form-control" placeholder="密码(首尾不能含有空格)"
								required="required">
						</div>
						<div class="input-group">
							<input type="password" id="confirm" class="form-control"
								placeholder="确认密码" required="required">
						</div>
						<div>
							<button type="submit" class="btn-sm">注册</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>