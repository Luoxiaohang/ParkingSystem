package com.clubAppSys.modules.charge.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clubAppSys.modules.charge.mapper.ChargeStandardMapper;
import com.clubAppSys.modules.charge.model.ChargeStandard;

@Service("ChargeStandardService")
public class ChargeStandardService {

	@Autowired
	ChargeStandardMapper mapper;

	public ChargeStandardMapper getMapper() {
		return mapper;
	}

	/**
	 * 根据模块Id及角色Id获取子功能列表
	 * 
	 * @param modulId
	 * @return
	 */
	public List<ChargeStandard> getChargeStandards() {
		return getMapper().selectAll();
	}

	/**
	 * 检查模块下是否含有某个功能
	 * 
	 * @param moduleId
	 * @param functionName
	 * @return true:含有 ；false:不含有
	 */
	public boolean checkStandard(String functionName) {
		ChargeStandard standard = getMapper().checkStandard(functionName);
		if (standard != null) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 添加功能
	 * 
	 * @param function
	 * @return
	 */
	public boolean addChargeStandard(ChargeStandard standard) {
		ChargeStandard stand = getMapper().checkStandard(standard.getName());
		if (stand == null) {
			int id = getMapper().insert(standard);
			if (id != -1) {
				return true;
			}
		}
		return false;
	}

	/**
	 * 修改功能
	 * 
	 * @param standard
	 * @return
	 */
	public boolean editChargeStandard(ChargeStandard standard) {
		int id = getMapper().updateByPrimaryKey(standard);
		if (id != -1) {
			return true;
		}
		return false;
	}

	public boolean deleteChargeStandard(ChargeStandard fun) {
		int id = getMapper().deleteByPrimaryKey(fun.getId());
		if (id != -1) {
			return true;
		}
		return false;
	}
}
