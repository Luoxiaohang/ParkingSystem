package com.fire.modules.charge.service;

import java.sql.Time;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fire.modules.charge.mapper.ChargeCustomizeMapper;
import com.fire.modules.charge.model.ChargeCustomize;
import com.fire.utils.TimeUtils;

@Service("ChargeCustomizeService")
public class ChargeCustomizeService {

	@Autowired
	ChargeCustomizeMapper mapper;

	public ChargeCustomizeMapper getMapper() {
		return mapper;
	}

	/**
	 * 根据角色Id获取模块名称
	 * 
	 * @param roleId
	 * @return
	 */
	public List<ChargeCustomize> getCustomizesByStandardId(int standardId) {
		return getMapper().getByStandardId(standardId);
	}

	/**
	 * 获取功能列表
	 * 
	 * @return
	 */
	public List<ChargeCustomize> getModulesList() {
		List<ChargeCustomize> functions = getMapper().selectAll();
		return functions;
	}

	/**
	 * 添加收费时间段
	 * 
	 * @param customize
	 * @return
	 */
	public boolean addCustomize(ChargeCustomize customize) {
		// 获取当前收费标准的收费时间段
		ChargeCustomizeMapper mapper = getMapper();
		List<ChargeCustomize> customizes = mapper.getByStandardId(customize
				.getStandardId());
		Time startTime2 = customize.getStartTime();
		Time endTime2 = customize.getEndTime();
		for (ChargeCustomize record : customizes) {
			if (TimeUtils.isOverlapping(record.getStartTime(),
					record.getEndTime(), startTime2, endTime2)) {
				return false;
			}
		}
		int insert = getMapper().insert(customize);
		if (insert == -1) {
			return false;
		}
		return true;
	}

	/**
	 * 删除收费时间段
	 * 
	 * @param customize
	 * @return
	 */
	public boolean deleteCustomize(ChargeCustomize customize) {
		int id = getMapper().deleteByPrimaryKey(customize.getId());
		if (id != -1) {
			return true;
		}
		return false;
	}

	/**
	 * 修改模块
	 * 
	 * @param module
	 * @return
	 */
	public boolean editCustomize(ChargeCustomize module) {
		int id = getMapper().updateByPrimaryKey(module);
		if (id != -1) {
			return true;
		}
		return false;
	}

}
