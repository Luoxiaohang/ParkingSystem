package com.fire.modules.charge.controller;

import java.util.HashSet;
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
import com.fire.modules.charge.model.ChargeStandard;
import com.fire.modules.charge.service.ChargeStandardService;

@Controller
@RequestMapping("/ChargeStandard")
public class ChargeStandController {

	@Autowired(required = false)
	private ChargeStandardService standardService;

	@ResponseBody
	@RequestMapping(value = "/getStandardList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private List<ChargeStandard> getStandardList(HttpServletRequest request) {
		HashSet<ChargeStandard> standards = new HashSet<>();
		standards.addAll(standardService.getChargeStandards());
		List<ChargeStandard> result =standardService.getChargeStandards();
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/addStandard", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<ChargeStandard> addStandard(ChargeStandard standard) {
		standard.setStatusId(ConstantInfo.STATUS_LEISURE);
		boolean success = standardService.addChargeStandard(standard);
		BaseDTO<ChargeStandard> result = new BaseDTO<>();
		result.setSuccess(success);
		if (!success) {
			result.setMsg("添加失败");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/deleteStandard", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<ChargeStandard> deleteStandard(ChargeStandard standard) {
		boolean success;
		BaseDTO<ChargeStandard> result = new BaseDTO<>();

		try {
			success = standardService.deleteChargeStandard(standard);
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
	@RequestMapping(value = "/editStandard", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private boolean editStandard(ChargeStandard standard) {
		boolean success = standardService.editChargeStandard(standard);
		return success;
	}
}
