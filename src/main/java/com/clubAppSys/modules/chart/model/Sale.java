package com.clubAppSys.modules.chart.model;

import org.apache.ibatis.type.Alias;

@Alias("Sale")
public class Sale {
	private Integer month;
	private float data;

	public Integer getMonth() {
		return month;
	}

	public void setMonth(Integer month) {
		this.month = month;
	}

	public float getData() {
		return data;
	}

	public void setData(float data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return "Sale [month=" + month + ", data=" + data + "]";
	}

}