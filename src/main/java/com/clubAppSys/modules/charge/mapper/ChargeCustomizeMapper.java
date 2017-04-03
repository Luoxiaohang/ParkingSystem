package com.clubAppSys.modules.charge.mapper;

import java.util.List;

import com.clubAppSys.modules.charge.model.ChargeCustomize;
import com.clubAppSys.modules.system.model.Modules;

public interface ChargeCustomizeMapper {
	int deleteByPrimaryKey(Integer id);

	int insert(ChargeCustomize record);

	Modules selectByPrimaryKey(Integer id);

	List<ChargeCustomize> selectAll();

	int updateByPrimaryKey(ChargeCustomize record);

	/**
	 * 根据角色Id获取模块名称
	 * 
	 * @param roleId
	 * @return
	 */
	public List<ChargeCustomize> getByStandardId(int standardId);

}