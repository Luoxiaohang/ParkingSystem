package com.fire.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TimeUtils {
	/**
	 * 判断两个时间段是否重合
	 * 
	 * @param startTime1
	 * @param endTime1
	 * @param startTime2
	 * @param endTime2
	 * @return
	 */
	public static boolean isOverlapping(Date startTime1, Date endTime1,
			Date startTime2, Date endTime2) {
		if (endTime2.before(startTime1) || endTime2.equals(startTime1)
				|| startTime2.after(endTime1) || startTime2.equals(endTime1)) {
			return false;
		}
		return true;
	}

	/**
	 * 计算两个日期间隔天数
	 * 
	 * @param fromDate
	 * @param toDate
	 * @return
	 */
	public static int getDaysBetweenDates(Date fromDate, Date toDate) {
		int days = (int) ((toDate.getTime() - fromDate.getTime()) / (24 * 60 * 60 * 1000));
		return days;
	}

	/**
	 * 计算两个日期(不计算日期，只计算时间)间隔小时
	 * 
	 * @param fromDate
	 * @param toDate
	 * @return
	 */
	public static int getHoursBetweenDates(Date fromDate, Date toDate) {
		int hours = (int) ((toDate.getTime() - fromDate.getTime()) / (60 * 60 * 1000)) % 24;
		return hours;
	}

	/**
	 * 把字符串类型的日期转换成Date类型
	 * 
	 * @param strDate
	 * @param 转换日期格式
	 * @return
	 */
	public static Date parseDate(String strDate, String pattern) {
		SimpleDateFormat df = new SimpleDateFormat(pattern);
		Date date = null;
		try {
			if (null != strDate && strDate.trim().length() != 0) {
				date = df.parse(strDate);
			}
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return date;
	}
}
