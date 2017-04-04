package com.fire.modules.charge.model;

import java.io.Serializable;
import java.sql.Time;

import org.apache.ibatis.type.Alias;

@Alias("ChargeCustomize")
public class ChargeCustomize implements Serializable {
	private Integer id;

	private String name;
	private Time startTime;
	private Time endTime;
	private Integer standardId;
	private float commonCost;
	private float vipCost;

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

	public Time getStartTime() {
		return startTime;
	}

	public void setStartTime(Time startTime) {
		this.startTime = startTime;
	}

	public Time getEndTime() {
		return endTime;
	}

	public void setEndTime(Time endTime) {
		this.endTime = endTime;
	}

	public float getCommonCost() {
		return commonCost;
	}

	public void setCommonCost(float commonCost) {
		this.commonCost = commonCost;
	}

	public float getVipCost() {
		return vipCost;
	}

	public void setVipCost(float vipCost) {
		this.vipCost = vipCost;
	}

	public Integer getStandardId() {
		return standardId;
	}

	public void setStandardId(Integer standardId) {
		this.standardId = standardId;
	}

	@Override
	public String toString() {
		return "ChargeCustomize [id=" + id + ", name=" + name + ", startTime="
				+ startTime + ", endTime=" + endTime + ", standardId="
				+ standardId + ", commonCost=" + commonCost + ", vipCost="
				+ vipCost + "]";
	}

}