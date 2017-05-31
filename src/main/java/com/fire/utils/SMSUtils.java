package com.fire.utils;

import java.util.Date;
import java.util.List;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import com.fire.common.ConstantInfo;
import com.fire.common.bean.SMS;
import com.fire.modules.berth.service.BerthService;
import com.fire.modules.user.model.Users;

public class SMSUtils {
	private static List<Users> records;

	public static void sendSMSMsg() {

		BlockingQueue<Runnable> queue = new LinkedBlockingQueue<Runnable>(20000);
		final ThreadPoolExecutor executors = new ThreadPoolExecutor(5, 6,
				60000, TimeUnit.SECONDS, queue);

		Runnable runnable = new Runnable() {
			public void run() {
				try {
					BerthService bs = SpringContextHolder
							.getBean("BerthService");
					// 获取当前时间
					Date date = new Date();
					date.setMinutes(date.getMinutes() + 30);
					// 获取所有用户30m内进入预定时间的预定记录
					records = bs.getBookedRecordFromTimeBetweenDate(new Date(),
							date);
					for (int i = 0; i < records.size(); i++) {
						SMS sms = new SMS();
						sms.setToTel(records.get(i).getPhone());
						sms.setContent("您预定的车位将在30分钟后开始生效");
						ConstantInfo.SMS_HOLDER.add(sms);
					}
					// 要推送的用户总数
					int count = records.size();
					// 初始每个线程处理的用户数量
					final int eveLength = 2000;
					// 计算处理所有用户需要的线程数量
					int eveBlocks = count / eveLength
							+ (count % eveLength != 0 ? 1 : 0);
					// 线程计数器
					CountDownLatch doneSignal = new CountDownLatch(eveBlocks);

					// 开启线程处理
					for (int page = 0; page < eveBlocks; page++) { /* blocks太大可以再细分重新调度 */
						SMSSendThread ms = new SMSSendThread(page, eveLength,
								doneSignal);
						executors.execute(ms);
					}
					doneSignal.await();// 等待所有计数器线程执行完
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		};
		ScheduledExecutorService service = Executors
				.newSingleThreadScheduledExecutor();
		// 第二个参数为首次执行的延时时间，第三个参数为定时执行的间隔时间
		service.scheduleAtFixedRate(runnable, 1, 30, TimeUnit.MINUTES);
	}
}
