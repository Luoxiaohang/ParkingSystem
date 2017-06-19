package com.fire.modules.berth.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fire.common.ConstantInfo;
import com.fire.modules.berth.mapper.ZoneMapper;
import com.fire.modules.berth.model.Berth;
import com.fire.modules.berth.model.Zone;
import com.fire.utils.SpringContextHolder;

@Service("ZoneService")
public class ZoneService {

	@Autowired
	ZoneMapper mapper;

	public ZoneMapper getMapper() {
		return mapper;
	}

	/**
	 * 根据模块Id及角色Id获取子功能列表
	 * 
	 * @param modulId
	 * @return
	 */
	public List<Zone> getAllZones() {
		return getMapper().selectAll();
	}

	/**
	 * 检查模块下是否含有某个功能
	 * 
	 * @param moduleId
	 * @param functionName
	 * @return true:含有 ；false:不含有
	 */
	public boolean checkZone(String functionName) {
		Zone standard = getMapper().checkZone(functionName);
		if (standard != null) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 添加车位区域
	 * 
	 * @param function
	 * @return
	 */
	public boolean addZone(Zone zone) {
		Zone has = getMapper().checkZone(zone.getName());
		if (has == null) {
			int id = getMapper().insert(zone);
			if (id != -1) {
				return true;
			}
		}
		return false;
	}

	/**
	 * 修改功能
	 * 
	 * @param zone
	 * @return
	 */
	public boolean editZone(Zone zone) {
		int id = getMapper().updateByPrimaryKey(zone);
		if (id != -1) {
			return true;
		}
		return false;
	}

	public boolean deleteZone(Zone zone) {
		int id = getMapper().deleteByPrimaryKey(zone.getId());
		if (id != -1) {
			return true;
		}
		return false;
	}

	/**
	 * 根据时间获取区域信息
	 * 
	 * @param date
	 * @return
	 */
	public List<Zone> getZonesByDate(Date fromDate, Date toDate) {
		// 查询所有的区域信息
		List<Zone> zones = getMapper().selectAll();
		// 获取每个区域的车位
		BerthService bs = SpringContextHolder.getBean("BerthService");
		for (Zone zone : zones) {
			// 设置状态
			boolean full = true;
			List<Berth> berths = bs
					.getBerths(0, zone.getId(), fromDate, toDate);
			int used = 0;
			for (Berth berth : berths) {
				int statusId = berth.getStatusId();
				if (statusId != ConstantInfo.STATUS_BOOKED
						&& statusId != ConstantInfo.STATUS_NO_BOOK) {
					full = false;
					break;
				}
				used++;
			}
			if (full) {
				zone.setUseRate(100);
				zone.setStatus("已满");
			} else {
				zone.setUseRate((float) used / berths.size() * 100);
				zone.setStatus("未满");
			}
			// 设置价格
			// List<ChargeCustomize> customizes = ccs
			// .getCustomizesByStandardId(zone.getChargingStandardId());
			// for (ChargeCustomize customize : customizes) {
			// if (TimeUtils.isOverlapping(fromDate, toDate,
			// customize.getStartTime(), customize.getEndTime())) {
			// zone.setCost(customize.getCommonCost());
			// zone.setVipCost(customize.getVipCost());
			// break;
			// }
			// }
		}
		return zones;
	}
}
