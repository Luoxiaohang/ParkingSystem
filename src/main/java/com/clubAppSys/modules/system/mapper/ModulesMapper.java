package com.clubAppSys.modules.system.mapper;

import java.util.List;

import com.clubAppSys.modules.charge.model.ChargeCustomize;
import com.clubAppSys.modules.system.model.Modules;

public interface ModulesMapper {
	int deleteByPrimaryKey(Integer id);

	int insert(Modules record);

	Modules selectByPrimaryKey(Integer id);

	List<Modules> selectAll();

	int updateByPrimaryKey(Modules record);

	/**
	 * 根据角色Id获取模块名称
	 * 
	 * @param roleId
	 * @return
	 */
	public List<Modules> getModulesByTypeId(int roleId);

	/**
	 * 根据名称获取模块
	 * 
	 * @param name
	 * @return
	 */
	Modules getModuleByName(String name);
}