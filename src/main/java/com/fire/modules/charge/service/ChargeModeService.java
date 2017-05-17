package com.fire.modules.charge.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fire.modules.charge.mapper.ChargeModeMapper;
import com.fire.modules.charge.model.ChargeStandard;

@Service("ChargeModeService")
public class ChargeModeService {

	@Autowired
	ChargeModeMapper mapper;

	public ChargeModeMapper getMapper() {
		return mapper;
	}

	public List<ChargeStandard> getChargeModes() {
		return getMapper().selectAll();
	}

}
