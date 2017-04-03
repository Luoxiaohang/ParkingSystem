package com.clubAppSys.modules.charge.mapper;

import java.util.List;

import com.clubAppSys.modules.charge.model.ChargeStandard;

public interface ChargeStandardMapper {
	int deleteByPrimaryKey(Integer id);

	int insert(ChargeStandard record);

	ChargeStandard selectByPrimaryKey(Integer id);

	List<ChargeStandard> selectAll();

	int updateByPrimaryKey(ChargeStandard record);

	ChargeStandard checkStandard(String standardName);
}