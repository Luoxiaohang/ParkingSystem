package com.fire.modules.monitor.mapper;

import java.util.List;

import com.fire.modules.monitor.model.Monitor;

public interface MonitorMapper {
	int delete(Monitor monitor);

	int insert(Monitor monitor);

	List<Monitor> select(Monitor monitor);

	// int update(Monitor monitor);

}