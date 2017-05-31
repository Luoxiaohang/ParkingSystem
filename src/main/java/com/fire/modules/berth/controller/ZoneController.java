package com.fire.modules.berth.controller;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fire.common.ConstantInfo;
import com.fire.common.base.BaseDTO;
import com.fire.modules.berth.model.Zone;
import com.fire.modules.berth.service.ZoneService;
import com.fire.utils.TimeUtils;

@Controller
@RequestMapping("/Zone")
public class ZoneController {

	@Autowired(required = false)
	private ZoneService zoneService;

	@ResponseBody
	@RequestMapping(value = "/getZoneList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private List<Zone> getZoneList(HttpServletRequest request, String fromTime,
			String toTime) {
		Date fromDate = TimeUtils
				.parseDate(fromTime, ConstantInfo.TIME_PATTERN);
		Date toDate = TimeUtils.parseDate(toTime, ConstantInfo.TIME_PATTERN);
		List<Zone> result = zoneService.getZonesByDate(fromDate, toDate);
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/addZone", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Zone> addZone(HttpServletRequest request, Zone zone) {
		zone.setStatusId(ConstantInfo.STATUS_LEISURE);
		zone.setParkingId(1);
		boolean success = zoneService.addZone(zone);
		BaseDTO<Zone> result = new BaseDTO<>();
		result.setSuccess(success);
		if (!success) {
			result.setMsg("添加失败");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/delZone", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Zone> deleteZone(Zone zone) {
		boolean success;
		BaseDTO<Zone> result = new BaseDTO<>();

		try {
			success = zoneService.deleteZone(zone);
			result.setSuccess(success);
			if (!success) {
				result.setMsg("删除失败");
			}
		} catch (Exception e) {
			result.setSuccess(false);
			result.setMsg("请先从角色管理中删除角色对应的功能");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/editZone", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Zone> editZone(Zone zone) {
		boolean success = zoneService.editZone(zone);
		BaseDTO<Zone> result = new BaseDTO<>();
		result.setSuccess(success);
		return result;
	}
}
