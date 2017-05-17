package com.fire.common.bean;

public class SMS {
	private String toTel;
	private String content;

	public String getToTel() {
		return toTel;
	}

	public void setToTel(String toTel) {
		this.toTel = toTel;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "SMS [toTel=" + toTel + ", content=" + content + "]";
	}

}
