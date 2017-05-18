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
		List<Monitor> monitors;
		if (zoneId == -1) {
			monitors = ms.getAllMonitors();
		} else {
			monitors = ms.getMonitorsByZoneId(zoneId);
		}

		BaseDTO<Monitor> result = new BaseDTO<Monitor>();
		if (null != monitors) {
			result.setSuccess(true);
			result.setList(monitors);
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/addMonitor", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Monitor> addMonitor(Monitor monitor) {
		BaseDTO<Monitor> result = new BaseDTO<Monitor>();
		boolean success = ms.addMonitor(monitor);
		if (!success) {
			result.setMsg("添加失败");
		}
		result.setSuccess(success);
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/editMonitor", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Monitor> editMonitor(Monitor monitor) {
		BaseDTO<Monitor> result = new BaseDTO<Monitor>();
		boolean success = ms.updateMonitor(monitor);
		if (!success) {
			result.setMsg("添加失败");
		}
		result.setSuccess(success);
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/delMonitor", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Monitor> delMonitor(Monitor monitor) {
		BaseDTO<Monitor> result = new BaseDTO<Monitor>();
		boolean success = ms.delMonitor(monitor);
		if (!success) {
			result.setMsg("添加失败");
		}
		result.setSuccess(success);
		return result;
	}
}
