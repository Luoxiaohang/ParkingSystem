package com.fire.modules.charge.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fire.modules.charge.mapper.ChargeStandardMapper;
import com.fire.modules.charge.model.ChargeStandard;

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
	 * @param modeId
	 * 
	 * @param modulId
	 * @return
	 */
	public List<ChargeStandard> getChargeStandards(ChargeStandard chargeStandard) {
		return getMapper().selectByModel(chargeStandard);
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
		getMapper().updateByPrimaryKey(standard);
		return true;
	}

	public boolean deleteChargeStandard(ChargeStandard fun) {
		int id = getMapper().deleteByPrimaryKey(fun.getId());
		if (id != -1) {
			return true;
		}
		return false;
	}
}
