package com.clubAppSys.common.bean;

public class Email {
	private String address;
	private String subject;
	private String content;

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String theme) {
		this.subject = theme;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "Email [address=" + address + ", subject=" + subject
				+ ", content=" + content + "]";
	}

}
