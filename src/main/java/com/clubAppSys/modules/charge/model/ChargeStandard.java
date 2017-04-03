package com.clubAppSys.modules.charge.model;

import org.apache.ibatis.type.Alias;

@Alias("ChargeStandard")
public class ChargeStandard {
	private Integer id;

	private String name;

	private String status;

	private Integer statusId;

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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getStatusId() {
		return statusId;
	}

	public void setStatusId(Integer statusId) {
		this.statusId = statusId;
	}

	@Override
	public String toString() {
		return "ChargeStandard [id=" + id + ", name=" + name + ", status="
				+ status + ", statusId=" + statusId + "]";
	}

}