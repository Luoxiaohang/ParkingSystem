package com.fire.modules.monitor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fire.common.ConstantInfo;
import com.fire.modules.monitor.mapper.MonitorMapper;
import com.fire.modules.monitor.model.Monitor;

@Service("MonitorService")
public class MonitorService {

	@Autowired
	MonitorMapper mapper;

	public MonitorMapper getMapper() {
		return mapper;
	}

	public List<Monitor> getAllMonitors() {
		Monitor monitor = new Monitor();
		return getMapper().select(monitor);
	}

	public List<Monitor> getMonitorsByZoneId(int zoneId) {
		// TODO Auto-generated method stub
		Monitor monitor = new Monitor();
		monitor.setZoneId(zoneId);
		return getMapper().select(monitor);
	}

	public boolean addMonitor(Monitor monitor) {
		monitor.setStatusId(ConstantInfo.STATUS_NORMALL);
		int id = getMapper().insert(monitor);
		if (id != -1) {
			return true;
		}
		return false;
	}

	public boolean updateMonitor(Monitor monitor) {
		int id = getMapper().update(monitor);
		if (id != -1) {
			return true;
		}
		return false;
	}

	public boolean delMonitor(Monitor monitor) {
		int id = getMapper().delete(monitor);
		if (id != -1) {
			return true;
		}
		return false;
	}

}
