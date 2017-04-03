package com.clubAppSys.modules.system.model;

public class Role {
	private Integer id;

	private String name;

	private Integer tag;

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
		this.name = name == null ? null : name.trim();
	}

	public Integer getTag() {
		return tag;
	}

	public void setTag(Integer tag) {
		this.tag = tag;
	}

	@Override
	public String toString() {
		return "Role [id=" + id + ", name=" + name + ", tag=" + tag + "]";
	}

}