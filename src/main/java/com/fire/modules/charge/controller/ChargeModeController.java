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
import com.fire.modules.charge.service.ChargeModeService;
import com.fire.modules.charge.service.ChargeStandardService;

@Controller
@RequestMapping("/ChargeMode")
public class ChargeModeController {

	@Autowired(required = false)
	private ChargeModeService modeService;

	@ResponseBody
	@RequestMapping(value = "/getModeList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private List<ChargeStandard> getStandardList(HttpServletRequest request) {
		HashSet<ChargeStandard> standards = new HashSet<>();
		standards.addAll(modeService.getChargeModes());
		List<ChargeStandard> result = modeService.getChargeModes();
		return result;
	}
}
