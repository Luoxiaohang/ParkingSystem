package com.fire.modules.berth.model;

import java.util.Date;

import org.apache.ibatis.type.Alias;

@Alias("BerthBook")
public class BerthBook {
	private Integer id;
	private Integer parkingId;
	private Integer zoneId;
	private String parkingName;
	private String zoneName;
	private String carId;
	private Integer berthId;
	private Integer statusId;
	private Integer userId;
	private Date fromTime;
	private Date toTime;
	private Date bookTime;
	private String bookTimeStr;
	private String toTimeStr;
	private String fromTimeStr;
	private String status;
	private Integer standardId;
	private Float cost;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getBerthId() {
		return berthId;
	}

	public void setBerthId(Integer berthId) {
		this.berthId = berthId;
	}

	public Integer getStatusId() {
		return statusId;
	}

	public void setStatusId(Integer statusId) {
		this.statusId = statusId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Date getBookTime() {
		return bookTime;
	}

	public void setBookTime(Date bookTime) {
		this.bookTime = bookTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getStandardId() {
		return standardId;
	}

	public void setStandardId(Integer standardId) {
		this.standardId = standardId;
	}

	public Float getCost() {
		return cost;
	}

	public void setCost(Float cost) {
		this.cost = cost;
	}

	public String getParkingName() {
		return parkingName;
	}

	public void setParkingName(String parkingName) {
		this.parkingName = parkingName;
	}

	public String getZoneName() {
		return zoneName;
	}

	public void setZoneName(String zoneName) {
		this.zoneName = zoneName;
	}

	public Integer getParkingId() {
		return parkingId;
	}

	public void setParkingId(Integer parkingId) {
		this.parkingId = parkingId;
	}

	public Integer getZoneId() {
		return zoneId;
	}

	public void setZoneId(Integer zoneId) {
		this.zoneId = zoneId;
	}

	public String getBookTimeStr() {
		return bookTimeStr;
	}

	public void setBookTimeStr(String bookTimeStr) {
		this.bookTimeStr = bookTimeStr;
	}

	public Date getFromTime() {
		return fromTime;
	}

	public void setFromTime(Date fromTime) {
		this.fromTime = fromTime;
	}

	public Date getToTime() {
		return toTime;
	}

	public void setToTime(Date toTime) {
		this.toTime = toTime;
	}

	public String getToTimeStr() {
		return toTimeStr;
	}

	public void setToTimeStr(String toTimeStr) {
		this.toTimeStr = toTimeStr;
	}

	public String getFromTimeStr() {
		return fromTimeStr;
	}

	public void setFromTimeStr(String fromTimeStr) {
		this.fromTimeStr = fromTimeStr;
	}

	public String getCarId() {
		return carId;
	}

	public void setCarId(String carId) {
		this.carId = carId;
	}

	@Override
	public String toString() {
		return "BerthBook [id=" + id + ", parkingId=" + parkingId + ", zoneId="
				+ zoneId + ", parkingName=" + parkingName + ", zoneName="
				+ zoneName + ", carId=" + carId + ", berthId=" + berthId
				+ ", statusId=" + statusId + ", userId=" + userId
				+ ", fromTime=" + fromTime + ", toTime=" + toTime
				+ ", bookTime=" + bookTime + ", bookTimeStr=" + bookTimeStr
				+ ", toTimeStr=" + toTimeStr + ", fromTimeStr=" + fromTimeStr
				+ ", status=" + status + ", standardId=" + standardId
				+ ", cost=" + cost + "]";
	}

}