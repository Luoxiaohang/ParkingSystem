package com.clubAppSys.common.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.clubAppSys.common.ConstantInfo;
import com.clubAppSys.modules.user.model.Users;

public class LoginInterceptor extends HandlerInterceptorAdapter {

	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		Users user = (Users) request.getSession().getAttribute(
				ConstantInfo.CURRENT_USER);
		if (user != null) {
			return true;
		} else {
			response.sendRedirect("/ParkingSystem/login.jsp");
		}
		return false;
	}

	@Override
	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		super.postHandle(request, response, handler, modelAndView);
	}
}
