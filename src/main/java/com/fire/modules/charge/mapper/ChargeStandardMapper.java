package com.fire.modules.charge.mapper;

import java.util.List;

import com.fire.modules.charge.model.ChargeStandard;

public interface ChargeStandardMapper {
	int deleteByPrimaryKey(Integer id);

	int insert(ChargeStandard record);

	ChargeStandard selectByPrimaryKey(Integer id);

	List<ChargeStandard> selectByModel(ChargeStandard chargeStandard);

	int updateByPrimaryKey(ChargeStandard record);

	ChargeStandard checkStandard(String standardName);
}