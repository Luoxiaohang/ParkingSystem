package com.fire.modules.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fire.modules.system.mapper.StatusMapper;
import com.fire.modules.system.model.Status;

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
