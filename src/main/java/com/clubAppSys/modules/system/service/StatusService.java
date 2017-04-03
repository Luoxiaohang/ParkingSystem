package com.clubAppSys.modules.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clubAppSys.modules.system.mapper.StatusMapper;
import com.clubAppSys.modules.system.model.Status;

@Service("StatusService")
public class StatusService {

	@Autowired
	StatusMapper mapper;

	public StatusMapper getMapper() {
		return mapper;
	}

	public List<Status> getStatus() {
		return getMapper().selectAll();
	}

}
