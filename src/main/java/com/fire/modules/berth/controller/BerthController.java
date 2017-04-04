package com.fire.modules.berth.controller;

import java.util.ArrayList;
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
import com.fire.modules.berth.model.Berth;
import com.fire.modules.berth.model.BerthBook;
import com.fire.modules.berth.service.BerthService;
import com.fire.modules.charge.service.ChargeService;
import com.fire.modules.user.model.Users;
import com.fire.utils.SpringContextHolder;
import com.fire.utils.TimeUtils;

@Controller
@RequestMapping("/Berth")
public class BerthController {

	@Autowired(required = false)
	private BerthService berthService;

	@ResponseBody
	@RequestMapping(value = "/getBerth", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Berth> getBerth(HttpServletRequest request, Integer zoneId,
			String fromTime, String toTime) {
		BaseDTO<Berth> result = new BaseDTO<Berth>();
		Date formDate = TimeUtils
				.parseDate(fromTime, ConstantInfo.TIME_PATTERN);
		Date toDate = TimeUtils.parseDate(toTime, ConstantInfo.TIME_PATTERN);
		Users user = (Users) request.getSession().getAttribute(
				ConstantInfo.CURRENT_USER);
		List<Berth> list = berthService.getBerths(user.getId(), zoneId,
				formDate, toDate);
		result.setList(list);
		result.setSuccess(true);
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/getBookedBerth", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<BerthBook> getBookedBerth(HttpServletRequest request) {
		BaseDTO<BerthBook> result = new BaseDTO<BerthBook>();
		Users user = (Users) request.getSession().getAttribute(
				ConstantInfo.CURRENT_USER);
		List<BerthBook> list = berthService.getBookedBerths(user.getId());
		result.setList(list);
		result.setSuccess(true);
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/addBerth", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Berth> addBerth(Berth berth) {
		boolean success = berthService.addBerth(berth);
		BaseDTO<Berth> result = new BaseDTO<Berth>();
		if (success) {
			result.setSuccess(true);
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/delBerth", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Berth> deleteBerth(Berth berth) {
		boolean success = berthService.deleteBerth(berth);
		BaseDTO<Berth> result = new BaseDTO<Berth>();
		if (success) {
			result.setSuccess(true);
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/editBerth", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Berth> editBerth(Berth berth) {
		boolean success = berthService.editBerth(berth);
		BaseDTO<Berth> result = new BaseDTO<Berth>();
		if (success) {
			result.setSuccess(true);
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/bookBerth", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<BerthBook> bookBerth(HttpServletRequest request,
			BerthBook berthBook) {
		Users user = (Users) request.getSession().getAttribute(
				ConstantInfo.CURRENT_USER);
		berthBook.setUserId(user.getId());
		berthBook.setStatusId(ConstantInfo.STATUS_PAYED);
		berthBook.setBookTime(new Date());
		Date fromDate = TimeUtils.parseDate(berthBook.getFromTimeStr(),
				ConstantInfo.TIME_PATTERN);
		berthBook.setFromTime(fromDate);
		Date toDate = TimeUtils.parseDate(berthBook.getToTimeStr(),
				ConstantInfo.TIME_PATTERN);
		berthBook.setToTime(toDate);
		boolean success = berthService.bookBerth(berthBook);
		BaseDTO<BerthBook> result = new BaseDTO<BerthBook>();
		if (success) {
			result.setSuccess(true);
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/getCost", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<BerthBook> getCost(BerthBook berthBook) {
		BaseDTO<BerthBook> result = new BaseDTO<BerthBook>();
		ChargeService cs = SpringContextHolder.getBean("ChargeService");
		Date fromDate = TimeUtils.parseDate(berthBook.getFromTimeStr(),
				ConstantInfo.TIME_PATTERN);
		Date toDate = TimeUtils.parseDate(berthBook.getToTimeStr(),
				ConstantInfo.TIME_PATTERN);
		float cost = cs.getCost(berthBook.getStandardId(), fromDate, toDate,
				false);
		berthBook.setCost(cost);
		List<BerthBook> berthBooks = new ArrayList<BerthBook>();
		berthBooks.add(berthBook);
		result.setList(berthBooks);
		result.setSuccess(true);
		result.setMsg(cost + "");
		return result;
	}
}
