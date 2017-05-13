package com.fire.modules.berth.mapper;

import java.util.List;

import com.fire.modules.berth.model.Berth;
import com.fire.modules.berth.model.BerthBook;

public interface BerthMapper {
	int deleteByPrimaryKey(Integer id);

	int insert(Berth record);

	Berth selectByPrimaryKey(Integer id);

	List<Berth> selectAll();

	int updateByPrimaryKey(Berth record);

	/**
	 * 根据区域Id获取车位
	 * 
	 * @param roleId
	 * @return
	 */
	public List<Berth> getByZoneId(int zoneId);

	/**
	 * 预订车位
	 * 
	 * @param book
	 * @return
	 */
	int addBookRecord(BerthBook book);

	List<BerthBook> getBookedBerths(BerthBook book);

	List<BerthBook> getSaleDates();

	void updateBookRecordByPrimaryKey(BerthBook berthBook);

	List<BerthBook> getValidBookedRecords(BerthBook record);

}