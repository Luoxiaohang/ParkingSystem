package com.fire.modules.charge.model;

import org.apache.ibatis.type.Alias;

@Alias("ChargeStandard")
public class ChargeStandard {
	private Integer id;

	private String name;

	private String status;

	private String mode;

	private Integer statusId;

	private Integer modeId;

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

	public String getMode() {
		return mode;
	}

	public void setMode(String mode) {
		this.mode = mode;
	}

	public Integer getModeId() {
		return modeId;
	}

	public void setModeId(Integer modeId) {
		this.modeId = modeId;
	}

	@Override
	public String toString() {
		return "ChargeStandard [id=" + id + ", name=" + name + ", status="
				+ status + ", mode=" + mode + ", statusId=" + statusId
				+ ", modeId=" + modeId + "]";
	}

}