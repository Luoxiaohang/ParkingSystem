<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport"
	content="width=device-width,initial-scale=1,maximum-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>找回密码</title>

<script src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>

<link rel="stylesheet" type="text/css" href="resource/css/login.css" />

</head>

<body>
	<script>
		function resetPassword() {
			var email = document.getElementById("Email").value;

			if (email.trim() == "") {
				alert("输入用户名无效");
				return false;
			}

			$.ajax({
				type : "POST",
				url : "/ParkingSystem/User/resetPassword",
				data : $("#loginForm").serialize(),
				success : function(msg) {
					var obj = eval(msg);
					if (obj.success) {
						alert("新密码已经发送到邮箱，请用新密码登录");
						window.location.href = "login.jsp";
					} else {
						var errorMsg = obj.msg;
						alert(errorMsg);
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
					<small>烽火社团网申系统</small>
				</h1>
			</div>
			<div class="login-content">
				<div class="form">
					<form id="loginForm" onsubmit="return resetPassword();">
						<div style="padding-bottom:40px;">
							<span>请输入注册的邮箱:</span>
						</div>
						<div class="input-group">
							<input type="email" id="Email" name="Email" class="form-control"
								placeholder="请输入注册的邮箱" required="required" autofocus="autofocus">
						</div>
						<div class="link">
							<a href="login.jsp">返回登录</a> <a href="regist.jsp">注册</a>
						</div>
						<div style="padding-top: 20px;">
							<button type="submit" class="btn-sm">找回密码</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>