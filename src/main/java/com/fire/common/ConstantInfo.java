package com.fire.common;

public interface ConstantInfo {

	String TIME_PATTERN = "yyyy-MM-dd HH:mm:ss";

	/**
	 * 系统当前用户
	 */
	String CURRENT_USER = "CURRENT_USER";

	/**
	 * 系统所有用户
	 */
	int SYSTEM_ROLE_USER_ALL = -1;

	/**
	 * 系统管理员
	 */
	int SYSTEM_ROLE_SYSTEM_MANAGER = 1;

	/**
	 * 社团管理员
	 */
	int SYSTEM_ROLE_CLUB_MANAGER = 2;

	/**
	 * 社团成员
	 */
	int SYSTEM_ROLE_CLUB_MEMBER = 3;

	/**
	 * 普通用户
	 */
	int SYSTEM_ROLE_USER = 4;

	/**
	 * 未满
	 */
	int STATUS_LEISURE = 1;
	String STR_STATUS_LEISURE = "未满";

	/**
	 * 已满
	 */
	int STATUS_FULL = 2;
	String STR_STATUS_FULL = "已满";

	/**
	 * 维修
	 */
	int STATUS_MAINTAIN = 3;
	String STR_STATUS_MAINTAIN = "维修中";

	/**
	 * 已预订
	 */
	Integer STATUS_BOOKED = 4;
	String STR_STATUS_BOOKED = "已预订";

	/**
	 * 未预订
	 */
	Integer STATUS_NOT_BOOKED = 5;
	String STR_STATUS_NOT_BOOKED = "未预定";

	/**
	 * 不可预订
	 */
	Integer STATUS_NO_BOOK = 6;
	String STR_STATUS_NO_BOOK = "不可预订";

	/**
	 * 正常使用
	 */
	int STATUS_NORMALL = 7;
	String STR_STATUS_NORMALL = "正常";

	/**
	 * 已支付
	 */
	Integer STATUS_PAYED = 8;
	String STR_STATUS_PAYED = "已支付";
}