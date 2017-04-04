package com.fire.modules.system.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fire.common.base.BaseDTO;
import com.fire.modules.system.model.Status;
import com.fire.modules.system.service.StatusService;

@Controller
@RequestMapping("/Status")
public class StatusController {

	@Autowired(required = false)
	private StatusService statusService;

	@ResponseBody
	@RequestMapping(value = "/getStatusList", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Status> getModuleList(HttpServletRequest request) {

		List<Status> status = statusService.getStatus();
		BaseDTO<Status> result = new BaseDTO<Status>();
		if (null != status && status.size() != 0) {
			result.setSuccess(true);
			result.setList(status);
		}
		return result;
	}

}
