package com.fire.modules.berth.model;

import org.apache.ibatis.type.Alias;

@Alias("Berth")
public class Berth {
	private Integer id;
	private Integer zoneId;
	private String zoneName;
	private Integer statusId;
	private String status;
	private Integer parkingId;
	private String parkingName;
	private Integer chargeModeId;
	private String chargeModeName;
	private Integer chargeStandardId;
	private String chargeStandardName;
	private float price;
	private float vipPrice;

	private String remark;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getStatusId() {
		return statusId;
	}

	public void setStatusId(Integer statusId) {
		this.statusId = statusId;
	}

	public Integer getZoneId() {
		return zoneId;
	}

	public void setZoneId(Integer zoneId) {
		this.zoneId = zoneId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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

	public String getParkingName() {
		return parkingName;
	}

	public void setParkingName(String parkingName) {
		this.parkingName = parkingName;
	}

	public Integer getChargeStandardId() {
		return chargeStandardId;
	}

	public void setChargeStandardId(Integer chargeStandardId) {
		this.chargeStandardId = chargeStandardId;
	}

	public String getChargeStandardName() {
		return chargeStandardName;
	}

	public void setChargeStandardName(String chargeStandardName) {
		this.chargeStandardName = chargeStandardName;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public float getVipPrice() {
		return vipPrice;
	}

	public void setVipPrice(float vipPrice) {
		this.vipPrice = vipPrice;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Integer getChargeModeId() {
		return chargeModeId;
	}

	public void setChargeModeId(Integer chargeModeId) {
		this.chargeModeId = chargeModeId;
	}

	public String getChargeModeName() {
		return chargeModeName;
	}

	public void setChargeModeName(String chargeModeName) {
		this.chargeModeName = chargeModeName;
	}

	@Override
	public String toString() {
		return "Berth [id=" + id + ", zoneId=" + zoneId + ", zoneName="
				+ zoneName + ", statusId=" + statusId + ", status=" + status
				+ ", parkingId=" + parkingId + ", parkingName=" + parkingName
				+ ", chargeModeId=" + chargeModeId + ", chargeModeName="
				+ chargeModeName + ", chargeStandardId=" + chargeStandardId
				+ ", chargeStandardName=" + chargeStandardName + ", price="
				+ price + ", vipPrice=" + vipPrice + ", remark=" + remark + "]";
	}

}