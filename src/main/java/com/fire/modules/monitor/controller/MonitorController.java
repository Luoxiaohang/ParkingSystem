package com.fire.modules.monitor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fire.common.base.BaseDTO;
import com.fire.modules.monitor.model.Monitor;
import com.fire.modules.monitor.service.MonitorService;

@Controller
@RequestMapping("/Monitor")
public class MonitorController {

	@Autowired(required = false)
	private MonitorService ms;

	@ResponseBody
	@RequestMapping(value = "/getMonitorList", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Monitor> getMonitorUrlList(int zoneId) {
		List<Monitor> status;
		if (zoneId == -1) {
			status = ms.getAllMonitors();
		} else {
			status = ms.getMonitorsByZoneId(zoneId);
		}

		BaseDTO<Monitor> result = new BaseDTO<Monitor>();
		if (null != status && status.size() != 0) {
			result.setSuccess(true);
			result.setList(status);
		}
		return result;
	}

}
