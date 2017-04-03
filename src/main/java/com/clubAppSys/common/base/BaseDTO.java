package com.clubAppSys.common.base;

import java.io.Serializable;
import java.util.List;

public class BaseDTO<T> implements Serializable {

	public List<T> list;

	private boolean success;
	private int totalCount;
	private String msg;

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String message) {
		this.msg = message;
	}

	public List<T> getList() {
		return list;
	}

	public void setList(List<T> list) {
		this.list = list;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	@Override
	public String toString() {
		return "BaseDTO [list=" + list + ", success=" + success
				+ ", totalCount=" + totalCount + ", msg=" + msg + "]";
	}

}
