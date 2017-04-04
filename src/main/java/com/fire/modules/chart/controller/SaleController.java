package com.fire.modules.chart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fire.common.base.BaseDTO;
import com.fire.modules.chart.model.Sale;
import com.fire.modules.chart.service.SaleService;

@Controller
@RequestMapping("/Sale")
public class SaleController {

	@Autowired(required = false)
	private SaleService saleService;

	@ResponseBody
	@RequestMapping(value = "/getSalePersentByMonth", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Sale> getSalePersentByMonth() {
		BaseDTO<Sale> result = new BaseDTO<>();
		List<Sale> list = saleService.getSalePersentByMonth();
		result.setList(list);
		result.setSuccess(true);
		return result;
	}
}
