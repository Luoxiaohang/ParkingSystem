<%@ page language="java" pageEncoding="UTF-8"%>
<%
	if (session.getAttribute("CURRENT_USER") == null) { //用户未登录
		response.sendRedirect("login.jsp");
	};
	String path = request.getContextPath();
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="cache-control" content="no-store">
<meta http-equiv="expires" content="0">

<link rel="stylesheet" type="text/css" href="resource/css/index.css">

<!-- 引入图标定义文件 -->
<link rel="stylesheet" type="text/css" href="resource/css/image.css">

<link rel="stylesheet" type="text/css"
	href="extjs/resources/css/ext-all-neptune.css">
<script type="text/javascript" src="extjs/bootstrap.js"></script>

<script src="extjs/locale/ext-lang-zh_CN.js"></script>
<script type="text/javascript" src="app.js"></script>
<script type="text/javascript" src="resource/js/jquery.js"></script>
</head>

<body>
	<script type="text/javascript">
		var SYSTEM_CONTEXTPATH="<%=path%>";
	</script>
</body>
</html>
