package com.fire.modules.monitor.model;

import java.io.Serializable;

import org.apache.ibatis.type.Alias;

@Alias("Monitor")
public class Monitor implements Serializable {
	private Integer id;

	private Integer parkingId;
	private String parkingName;
	private Integer ZoneId;
	private String zoneName;
	private String url;
	private Integer statusId;
	private String status;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public Integer getZoneId() {
		return ZoneId;
	}

	public void setZoneId(Integer zoneId) {
		ZoneId = zoneId;
	}

	public String getZoneName() {
		return zoneName;
	}

	public void setZoneName(String zoneName) {
		this.zoneName = zoneName;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Integer getStatusId() {
		return statusId;
	}

	public void setStatusId(Integer statusId) {
		this.statusId = statusId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Monitor [id=" + id + ", parkingId=" + parkingId
				+ ", parkingName=" + parkingName + ", ZoneId=" + ZoneId
				+ ", zoneName=" + zoneName + ", url=" + url + ", statusId="
				+ statusId + ", status=" + status + "]";
	}

}