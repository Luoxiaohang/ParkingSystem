package com.fire.modules.charge.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fire.common.base.BaseDTO;
import com.fire.modules.charge.model.ChargeCustomize;
import com.fire.modules.charge.service.ChargeCustomizeService;

@Controller
@RequestMapping("/ChargeCustomize")
public class ChargeCustomizeController {

	@Autowired(required = false)
	private ChargeCustomizeService customizeService;

	@ResponseBody
	@RequestMapping(value = "/getCustomize", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<ChargeCustomize> getCustomize(HttpServletRequest request,
			int standardId) {
		BaseDTO<ChargeCustomize> result = new BaseDTO<ChargeCustomize>();
		List<ChargeCustomize> list = customizeService
				.getCustomizesByStandardId(standardId);
		result.setList(list);
		result.setSuccess(true);
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/addCustomize", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<ChargeCustomize> addCustomize(ChargeCustomize customize) {
		boolean success = customizeService.addCustomize(customize);
		BaseDTO<ChargeCustomize> result = new BaseDTO<ChargeCustomize>();
		if (success) {
			result.setSuccess(true);
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/delCustomize", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<ChargeCustomize> deleteCustomize(ChargeCustomize customize) {
		boolean success = customizeService.deleteCustomize(customize);
		BaseDTO<ChargeCustomize> result = new BaseDTO<ChargeCustomize>();
		if (success) {
			result.setSuccess(true);
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/editCustomize", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<ChargeCustomize> editCustomize(ChargeCustomize customize) {
		boolean success = customizeService.editCustomize(customize);
		BaseDTO<ChargeCustomize> result = new BaseDTO<ChargeCustomize>();
		if (success) {
			result.setSuccess(true);
		}
		return result;
	}

}
