package com.clubAppSys.modules.berth.model;

import java.io.Serializable;

import org.apache.ibatis.type.Alias;

@Alias("Zone")
public class Zone implements Serializable {
	private Integer id;
	private String name;
	private Integer parkingId;
	private Integer statusId;
	private Float cost;
	private Float vipCost;
	private Integer chargingStandardId;
	private String chargeStandardName;
	private String parkingName;
	private String status;

	private float useRate;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getParkingId() {
		return parkingId;
	}

	public void setParkingId(Integer parkingId) {
		this.parkingId = parkingId;
	}

	public Integer getStatusId() {
		return statusId;
	}

	public void setStatusId(Integer statusId) {
		this.statusId = statusId;
	}

	public Integer getChargingStandardId() {
		return chargingStandardId;
	}

	public void setChargingStandardId(Integer chargingStandardId) {
		this.chargingStandardId = chargingStandardId;
	}

	public String getChargeStandardName() {
		return chargeStandardName;
	}

	public void setChargeStandardName(String chargeStandardName) {
		this.chargeStandardName = chargeStandardName;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getParkingName() {
		return parkingName;
	}

	public void setParkingName(String parkingName) {
		this.parkingName = parkingName;
	}

	public Float getCost() {
		return cost;
	}

	public void setCost(Float cost) {
		this.cost = cost;
	}

	public Float getVipCost() {
		return vipCost;
	}

	public void setVipCost(Float vipCost) {
		this.vipCost = vipCost;
	}

	public float getUseRate() {
		return useRate;
	}

	public void setUseRate(float useRate) {
		this.useRate = useRate;
	}

	@Override
	public String toString() {
		return "Zone [id=" + id + ", name=" + name + ", parkingId=" + parkingId
				+ ", statusId=" + statusId + ", cost=" + cost + ", vipCost="
				+ vipCost + ", chargingStandardId=" + chargingStandardId
				+ ", chargeStandardName=" + chargeStandardName
				+ ", parkingName=" + parkingName + ", status=" + status
				+ ", useRate=" + useRate + "]";
	}

}