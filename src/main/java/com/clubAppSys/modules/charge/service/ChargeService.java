package com.clubAppSys.modules.charge.service;

import java.sql.Time;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.clubAppSys.modules.charge.model.ChargeCustomize;
import com.clubAppSys.utils.SpringContextHolder;
import com.clubAppSys.utils.TimeUtils;

@Service("ChargeService")
public class ChargeService {
	public float getCost(int standardId, Date fromDate, Date toDate,
			boolean isVIP) {
		if (fromDate == null || toDate == null) {
			return 0;
		}

		// 获取日期间隔天数
		int days = TimeUtils.getDaysBetweenDates(fromDate, toDate);

		// 获取收费时间段
		ChargeCustomizeService ccs = SpringContextHolder
				.getBean("ChargeCustomizeService");
		List<ChargeCustomize> customizes = ccs
				.getCustomizesByStandardId(standardId);
		// 计算收费
		float totalCost = 0;
		fromDate.getTime();
		Time fromTime = new Time(fromDate.getHours(), fromDate.getMinutes(),
				fromDate.getSeconds());
		Time toTime = new Time(toDate.getHours(), toDate.getMinutes(),
				toDate.getSeconds());
		for (ChargeCustomize customize : customizes) {
			Time fromTime1 = customize.getStartTime();
			Time toTime1 = customize.getEndTime();
			if (!TimeUtils.isOverlapping(fromTime, toTime, fromTime1, toTime1)) {
				float cost = 0;
				if (fromTime.before(fromTime1) && toTime.after(toTime1)) {
					// 获取间隔小时数
					int hours = TimeUtils.getHoursBetweenDates(toTime1,
							fromTime1);
					if (isVIP) {
						cost = customize.getVipCost() * hours;
					}
					cost = customize.getCommonCost() * hours;
				} else if (fromTime.after(fromTime1) && toTime.before(toTime1)) {
					// 获取间隔小时数
					int hours = TimeUtils
							.getHoursBetweenDates(fromDate, toDate);
					if (isVIP) {
						cost = customize.getVipCost() * hours;
					}
					cost = customize.getCommonCost() * hours;
				} else if (fromTime.after(fromTime1) && toTime.after(toTime1)) {
					int hours = TimeUtils.getHoursBetweenDates(toTime1,
							fromTime);
					if (isVIP) {
						cost = customize.getVipCost() * hours;
					}
					cost = customize.getCommonCost() * hours;
				} else if (fromTime.before(fromTime1) && toTime.before(toTime1)) {
					int hours = TimeUtils.getHoursBetweenDates(toTime,
							fromTime1);
					if (isVIP) {
						cost = customize.getVipCost() * hours;
					}
					cost = customize.getCommonCost() * hours;
				}
				totalCost = totalCost + cost;
			}
		}
		return totalCost;
	}
}
