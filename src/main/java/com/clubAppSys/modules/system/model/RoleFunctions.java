package com.clubAppSys.modules.system.model;

import org.apache.ibatis.type.Alias;

@Alias("RoleFunctions")
public class RoleFunctions {
	private Integer id;

	private Integer functionId;

	private Integer roleId;

	private Integer moduleId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getFunctionId() {
		return functionId;
	}

	public void setFunctionId(Integer functionId) {
		this.functionId = functionId;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public Integer getModuleId() {
		return moduleId;
	}

	public void setModuleId(Integer moduleId) {
		this.moduleId = moduleId;
	}

	@Override
	public String toString() {
		return "RoleFunctions [id=" + id + ", functionId=" + functionId
				+ ", roleId=" + roleId + ", moduleId=" + moduleId + "]";
	}

}