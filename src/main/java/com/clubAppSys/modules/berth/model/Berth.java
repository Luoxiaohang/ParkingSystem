package com.clubAppSys.modules.berth.model;

import org.apache.ibatis.type.Alias;

@Alias("Berth")
public class Berth {
	private Integer id;
	private Integer zoneId;
	private Integer statusId;
	private String status;
	private String VARCHAR;

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

	public String getVARCHAR() {
		return VARCHAR;
	}

	public void setVARCHAR(String vARCHAR) {
		VARCHAR = vARCHAR;
	}

	@Override
	public String toString() {
		return "Berth [id=" + id + ", zoneId=" + zoneId + ", statusId="
				+ statusId + ", status=" + status + ", VARCHAR=" + VARCHAR
				+ "]";
	}

}