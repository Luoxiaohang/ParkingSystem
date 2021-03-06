package com.fire.modules.berth.mapper;

import java.util.List;

import com.fire.modules.berth.model.Zone;

public interface ZoneMapper {
	int deleteByPrimaryKey(Integer id);

	int insert(Zone zone);

	Zone selectByPrimaryKey(Integer id);

	List<Zone> selectAll();

	int updateByPrimaryKey(Zone zone);

	Zone checkZone(String zoneName);
}