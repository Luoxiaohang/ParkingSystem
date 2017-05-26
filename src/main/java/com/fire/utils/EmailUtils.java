package com.fire.utils;

import java.io.IOException;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import org.apache.commons.httpclient.HttpException;

import com.fire.common.ConstantInfo;

public class EmailUtils {

	public static void sendSMSMsg() throws HttpException, IOException,
			InterruptedException {
		
		BlockingQueue<Runnable> queue = new LinkedBlockingQueue<Runnable>(20000);
		ThreadPoolExecutor executors = new ThreadPoolExecutor(5, 6, 60000,
				TimeUnit.SECONDS, queue);
		while (true) {
			// 要推送的用户总数
			int count = ConstantInfo.EMAIL_HOLDER.size();
			// 初始每个线程处理的用户数量
			final int eveLength = 2000;
			// 计算处理所有用户需要的线程数量
			int eveBlocks = count / eveLength
					+ (count % eveLength != 0 ? 1 : 0);
			// 线程计数器
			CountDownLatch doneSignal = new CountDownLatch(eveBlocks);

			// 开启线程处理
			for (int page = 0; page < eveBlocks; page++) { /* blocks太大可以再细分重新调度 */
				EmailSendThread ms = new EmailSendThread(page, eveLength,
						doneSignal);
				executors.execute(ms);
			}
			doneSignal.await();// 等待所有计数器线程执行完

			ConstantInfo.SMS_HOLDER.clear();
			Thread.sleep(60 * 1000);
		}
	}
}
