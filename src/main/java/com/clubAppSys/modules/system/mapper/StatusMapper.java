package com.clubAppSys.modules.system.mapper;

import java.util.List;

import com.clubAppSys.modules.system.model.Status;

public interface StatusMapper {
	int deleteByPrimaryKey(Integer id);

	int insert(Status record);

	Status selectByPrimaryKey(Integer id);

	List<Status> selectAll();

	int updateByPrimaryKey(Status record);

}