package com.fire.modules.berth.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fire.common.ConstantInfo;
import com.fire.modules.berth.mapper.BerthMapper;
import com.fire.modules.berth.model.Berth;
import com.fire.modules.berth.model.BerthBook;
import com.fire.utils.TimeUtils;

@Service("BerthService")
public class BerthService {

	@Autowired
	BerthMapper mapper;

	public BerthMapper getMapper() {
		return mapper;
	}

	/**
	 * 根据区域Id获取车位信息
	 * 
	 * @param roleId
	 * @return
	 */
	public List<Berth> getBerths(int userId, Integer zoneId, Date fromDate,
			Date toDate) {
		List<Berth> berths = null;
		if (zoneId == -1) {
			berths = getMapper().selectAll();
		} else {
			berths = getByZoneId(zoneId);
		}
		for (Berth berth : berths) {
			boolean booked = false;
			List<BerthBook> reocords = getBookRecordsByBerthId(berth.getId());

			for (BerthBook record : reocords) {
				// 判断当前时间是否在预订时间内,如果在,则判断该订单用户是否是当前用户，如果是则置为已预订，否则为不可预订
				if (record.getStatusId() != ConstantInfo.STATUS_CANCLE
						&& TimeUtils.isOverlapping(fromDate, toDate,
								record.getFromTime(), record.getToTime())) {
					booked = true;
					if (record.getUserId() == userId) {
						berth.setStatusId(ConstantInfo.STATUS_BOOKED);
						berth.setStatus(ConstantInfo.STR_STATUS_BOOKED);
					} else {
						berth.setStatusId(ConstantInfo.STATUS_NO_BOOK);
						berth.setStatus(ConstantInfo.STR_STATUS_NO_BOOK);
					}
					break;
				}
			}
			// 如果该车位未被预定，则判断车位的状态是否是正常状态，如果是则置为未预订
			if (!booked) {
				if (berth.getStatusId() == ConstantInfo.STATUS_NORMALL) {
					berth.setStatusId(ConstantInfo.STATUS_NOT_BOOKED);
					berth.setStatus(ConstantInfo.STR_STATUS_NOT_BOOKED);
				}
			}
		}
		return berths;
	}

	/**
	 * 根据区域Id获取车位信息
	 * 
	 * @param roleId
	 * @return
	 */
	public List<Berth> getByZoneId(Integer zoneId) {
		return getMapper().getByZoneId(zoneId);
	}

	/**
	 * 添加车位
	 * 
	 * @param berth
	 * @return
	 */
	public boolean addBerth(Berth berth) {
		int id = getMapper().insert(berth);
		if (id != -1) {
			return true;
		}
		return false;
	}

	/**
	 * 删除车位
	 * 
	 * @param customize
	 * @return
	 */
	public boolean deleteBerth(Berth customize) {
		int id = getMapper().deleteByPrimaryKey(customize.getId());
		if (id != -1) {
			return true;
		}
		return false;
	}

	/**
	 * 修改车位信息
	 * 
	 * @param module
	 * @return
	 */
	public boolean editBerth(Berth module) {
		int id = getMapper().updateByPrimaryKey(module);
		if (id != -1) {
			return true;
		}
		return false;
	}

	/**
	 * 预订车位
	 * 
	 * @param book
	 * @return
	 */
	public boolean bookBerth(BerthBook book) {
		/**
		 * 获取当前车牌在预订时间段内的停车记录
		 */
		BerthBook record = new BerthBook();
		record.setCarId(book.getCarId());
		record.setFromTime(book.getFromTime());
		record.setToTime(book.getToTime());
		List<BerthBook> records = getMapper().getBookedBerths(record);
		if (records.size() != 0) {
			return false;
		}
		/**
		 * 获取当前车位在预订时间内的预订记录
		 */
		BerthBook record2 = new BerthBook();
		record2.setBerthId(book.getBerthId());
		record2.setFromTime(book.getFromTime());
		record2.setToTime(book.getToTime());
		records = getMapper().getBookedBerths(record2);

		if (records.size() != 0) {
			return false;
		}

		getMapper().addBookRecord(book);
		return true;
	}

	public List<BerthBook> getBookedBerths(int userId) {
		BerthBook record = new BerthBook();
		record.setUserId(userId);
		return getMapper().getBookedBerths(record);
	}

	public List<BerthBook> getBookRecordsByBerthId(Integer berthId) {
		BerthBook record = new BerthBook();
		record.setBerthId(berthId);
		return getMapper().getBookedBerths(record);
	}

	/**
	 * 
	 * @param berthBook
	 * @return
	 */
	public boolean unBookBerth(BerthBook berthBook) {
		berthBook.setStatusId(ConstantInfo.STATUS_CANCLE);
		getMapper().updateBookRecordByPrimaryKey(berthBook);
		return true;
	}

	public List<BerthBook> getValidBookedRecords(Integer userId, Date date) {
		BerthBook record = new BerthBook();
		record.setUserId(userId);
		record.setToTime(date);
		return getMapper().getValidBookedRecords(record);
	}
}
