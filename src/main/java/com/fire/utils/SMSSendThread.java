package com.fire.utils;

import java.util.concurrent.CountDownLatch;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.log4j.Logger;

import com.fire.common.ConstantInfo;
import com.fire.common.bean.SMS;

public class SMSSendThread implements Runnable {

	private Logger logger = Logger.getLogger(SMSSendThread.class);

	private Integer page;// 当前索引
	private Integer eveLength;// 处理数据条数
	private CountDownLatch doneSignal;// 处理线程条数

	public SMSSendThread(int page, int eveLength, CountDownLatch doneSignal) {
		this.page = page;
		this.eveLength = eveLength;
		this.doneSignal = doneSignal;
	}

	@Override
	public void run() {
		try {
			for (int i = page * eveLength; i < (page + 1) * eveLength
					&& (page + 1) * eveLength < ConstantInfo.SMS_HOLDER.size(); i++) {
				SMS sms = ConstantInfo.SMS_HOLDER.get(i);
				logger.info("Send SMS:" + sms.toString());
				
				HttpClient client = new HttpClient();
				PostMethod post = new PostMethod(
						"http://utf8.sms.webchinese.cn/");
				post.addRequestHeader("Content-Type",
						"application/x-www-form-urlencoded;charset=utf8");// 在头文件中设置转码
				NameValuePair[] data = { new NameValuePair("Uid", "罗圈爱1314"), // 注册的用户名
						new NameValuePair("Key", "webchinesesmskey"), // 注册成功后,登录网站使用的密钥
						new NameValuePair("smsMob", sms.getToTel()), // 手机号码
						new NameValuePair("smsText", sms.getContent()) };// 设置短信内容
				post.setRequestBody(data);
				client.executeMethod(post);
				post.releaseConnection();
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			// 工人完成工作，计数器减一
			doneSignal.countDown();
		}
	}

}
