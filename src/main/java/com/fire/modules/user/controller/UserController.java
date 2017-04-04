package com.fire.modules.user.controller;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fire.common.ConstantInfo;
import com.fire.common.base.BaseDTO;
import com.fire.modules.user.model.Users;
import com.fire.modules.user.serviceI.UserServiceI;
import com.fire.utils.StringUtils;

@Controller
@RequestMapping("/User")
public class UserController {

	@Autowired(required = false)
	private UserServiceI userService;

	@ResponseBody
	@RequestMapping(value = "/login", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Users> login(HttpServletRequest request, Users user) {
		BaseDTO<Users> loginDto = new BaseDTO<>();
		user.setPassword(StringUtils.string2MD5(user.getPassword()));
		Users userInfo = userService.login(user);
		if (userInfo != null) {
			loginDto.setSuccess(true);
			request.getSession().setAttribute(ConstantInfo.CURRENT_USER,
					userInfo);
		} else {
			loginDto.setSuccess(false);
			loginDto.setMsg("登录失败");
		}
		return loginDto;
	}

	@ResponseBody
	@RequestMapping(value = "/checkEmail", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Users> checkEmail(String Email) {
		BaseDTO<Users> result = new BaseDTO<>();
		boolean exist = userService.checkEmail(Email);
		result.setSuccess(exist);
		if (exist) {
			result.setSuccess(true);
			result.setMsg("邮箱已存在");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/checkAccount", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Users> checkAccount(String account) {
		BaseDTO<Users> result = new BaseDTO<>();
		boolean exist = userService.checkAccount(account);
		result.setSuccess(exist);
		if (exist) {
			result.setSuccess(true);
			result.setMsg("邮箱已存在");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/checkPhone", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Users> checkPhone(String phone) {
		BaseDTO<Users> result = new BaseDTO<>();
		boolean exist = userService.checkPhone(phone);
		result.setSuccess(exist);
		if (exist) {
			result.setSuccess(true);
			result.setMsg("邮箱已存在");
		}
		return result;
	}

	@RequestMapping(value = "/loginout", method = RequestMethod.GET)
	private void loginout(HttpServletRequest request,
			HttpServletResponse response) {
		request.getSession(false).removeAttribute(ConstantInfo.CURRENT_USER);
		request.getSession().invalidate();
		try {
			response.setHeader("Cache-Control", "no-cache");
			response.setHeader("Cache-Control", "no-cache");
			response.setDateHeader("Expires", 0);
			response.setHeader("Pragma", "no-cache");
			response.sendRedirect("/ParkingSystem/login.jsp");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@ResponseBody
	@RequestMapping(value = "/confirmPassword", method = RequestMethod.POST)
	private BaseDTO<Users> confirmPassword(HttpServletRequest request,
			String password) {
		BaseDTO<Users> result = new BaseDTO<>();
		Users user = (Users) request.getSession().getAttribute(
				ConstantInfo.CURRENT_USER);
		password = StringUtils.string2MD5(password);
		boolean success = userService.confirmUser(user.getId(), password);
		result.setSuccess(success);
		if (!success) {
			result.setMsg("密码验证失败");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/regist", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Users> regist(Users user) {
		BaseDTO<Users> dto = new BaseDTO<>();
		user.setRoleId(ConstantInfo.SYSTEM_ROLE_USER);
		user.setPassword(StringUtils.string2MD5(user.getPassword()));
		boolean success = userService.regist(user);
		dto.setSuccess(success);
		if (!success) {
			dto.setMsg("注册失败");
		}
		return dto;
	}

	@ResponseBody
	@RequestMapping(value = "/updateUserInfo", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Users> updateUserInfoById(HttpServletRequest request,
			Users user) {
		BaseDTO<Users> dto = new BaseDTO<>();
		SimpleDateFormat df = new SimpleDateFormat("yy年MM月dd日");
		try {
			Date birthday = df.parse(user.getBirthdayTemp());
			user.setBirthday(birthday);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(user.toString());
		boolean success = userService.updateUserInfoById(user);
		request.getSession().setAttribute(ConstantInfo.CURRENT_USER,
				userService.getUserInfoById(user.getId()));
		dto.setSuccess(success);
		if (!success) {
			dto.setMsg("更新失败");
		}
		return dto;
	}

	@ResponseBody
	@RequestMapping(value = "/updateSecure", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Users> updateSecure(HttpServletRequest request, String key,
			String value) {
		BaseDTO<Users> dto = new BaseDTO<>();
		boolean success = false;
		Users user = (Users) request.getSession().getAttribute(
				ConstantInfo.CURRENT_USER);
		if (key.equals("PHONE")) {
			user.setPhone(value);
			success = userService.updatePhoneById(user);
		} else if (key.equals("EMAIL")) {
			user.setEmail(value);
			success = userService.updateEmailById(user);
		} else if (key.equals("PASSWORD")) {
			user.setPassword(StringUtils.string2MD5(value));
			success = userService.updatePasswordById(user);
		}

		dto.setSuccess(success);
		if (!success) {
			dto.setMsg("更新失败");
		}
		return dto;
	}

	@ResponseBody
	@RequestMapping(value = "/resetPassword", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Users> forgetPassword(HttpServletRequest request,
			String Email) {
		BaseDTO<Users> result = new BaseDTO<>();
		// 判断邮箱是否注册
		boolean exist = userService.checkEmail(Email);
		if (exist) {
			boolean success = userService.resetPassword(Email);
			result.setSuccess(success);
			if (!success) {
				result.setMsg("处理错误");
			}
		} else {
			result.setMsg("邮箱未注册");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/getInfo", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Users> getInfo(int userId, HttpServletRequest request) {
		Users user = new Users();
		BaseDTO<Users> result = new BaseDTO<>();
		try {
			if (userId == -1) {
				user = (Users) request.getSession().getAttribute(
						ConstantInfo.CURRENT_USER);
			} else {
				user = userService.getUserInfoById(userId);
			}
			result.setSuccess(true);
			List<Users> list = new ArrayList<Users>();
			list.add(user);
			result.setList(list);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result.setMsg("处理错误");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/getSystemUserList", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Users> getSystemUserList(int start, int limit) {
		BaseDTO<Users> result = new BaseDTO<>();
		try {
			int totalCount = userService.getTotalCount();
			result.setTotalCount(totalCount);
			List<Users> list = userService.getSystemUserList(start, limit);
			result.setSuccess(true);
			result.setList(list);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result.setSuccess(false);
			result.setMsg("系统出错");
		}
		return result;
	}
}
