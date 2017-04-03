package com.clubAppSys.modules.chart.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clubAppSys.modules.berth.mapper.BerthMapper;
import com.clubAppSys.modules.berth.model.BerthBook;
import com.clubAppSys.modules.chart.model.Sale;

@Service("SaleService")
public class SaleService {

	@Autowired
	BerthMapper berthMapper;

	public BerthMapper getMapper() {
		return berthMapper;
	}

	/**
	 * 获取当前年份每个月的销售额
	 * 
	 * @return
	 */
	public List<Sale> getSalePersentByMonth() {
		List<Sale> result = new ArrayList<Sale>();
		Date date = new Date();
		int currentYear = date.getYear();
		float[] data = new float[12];
		List<BerthBook> records = berthMapper.getSaleDates();
		for (BerthBook book : records) {
			Date bookDate = book.getBookTime();
			if (bookDate.getYear() == currentYear) {
				int bookMonth = bookDate.getMonth();
				data[bookMonth] = data[bookMonth] + book.getCost();
			}
		}
		for (int i = 0; i < 12; i++) {
			Sale sale = new Sale();
			sale.setMonth(i + 1);
			sale.setData(data[i]);
			result.add(sale);
		}
		return result;
	}
}
