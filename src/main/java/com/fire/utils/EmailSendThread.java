package com.fire.utils;

import java.util.Properties;
import java.util.concurrent.CountDownLatch;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.Message.RecipientType;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.apache.log4j.Logger;

import com.fire.common.ConstantInfo;
import com.fire.common.bean.Email;

public class EmailSendThread implements Runnable {

	private Logger logger = Logger.getLogger(EmailSendThread.class);

	private Integer page;// 当前索引
	private Integer eveLength;// 处理数据条数
	private CountDownLatch doneSignal;// 处理线程条数

	public EmailSendThread(int page, int eveLength, CountDownLatch doneSignal) {
		this.page = page;
		this.eveLength = eveLength;
		this.doneSignal = doneSignal;
	}

	@Override
	public void run() {
		try {
			for (int i = page * eveLength; i < (page + 1) * eveLength
					&& i < ConstantInfo.EMAIL_HOLDER.size(); i++) {
				Email email = ConstantInfo.EMAIL_HOLDER.get(i);
				sendEmail(email);
				logger.info("Send Email" + email.toString());
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			// 工人完成工作，计数器减一
			doneSignal.countDown();
		}
	}

	public static void sendEmail(Email email) throws MessagingException {
		// 创建Properties 类用于记录邮箱的一些属性
		final Properties props = new Properties();
		// 表示SMTP发送邮件，必须进行身份验证
		props.put("mail.smtp.auth", "true");
		// 此处填写SMTP服务器
		props.put("mail.smtp.host", "smtp.qq.com");
		// 端口号，QQ邮箱给出了两个端口，但是另一个我一直使用不了，所以就给出这一个587
		props.put("mail.smtp.port", "587");
		// 此处填写你的账号
		props.put("mail.user", "847149206@qq.com");
		// 此处的密码就是前面说的16位STMP口令
		props.put("mail.password", "ybfvnqpwrnltbbjb");

		// 构建授权信息，用于进行SMTP进行身份验证
		Authenticator authenticator = new Authenticator() {

			protected PasswordAuthentication getPasswordAuthentication() {
				// 用户名、密码
				String userName = props.getProperty("mail.user");
				String password = props.getProperty("mail.password");
				return new PasswordAuthentication(userName, password);
			}
		};
		// 使用环境属性和授权信息，创建邮件会话
		Session mailSession = Session.getInstance(props, authenticator);
		// 创建邮件消息
		Message message = new MimeMessage(mailSession);
		// 设置发件人
		InternetAddress form = new InternetAddress(
				props.getProperty("mail.user"));
		message.setFrom(form);

		// 设置收件人的邮箱
		InternetAddress to = new InternetAddress(email.getAddress());
		message.setRecipient(RecipientType.TO, to);

		// 设置邮件标题
		message.setSubject(email.getSubject());
		// 设置邮件的内容体
		message.setContent(email.getContent(), "text/html;charset=UTF-8");

		// 最后当然就是发送邮件啦
		Transport.send(message);
	}
}
