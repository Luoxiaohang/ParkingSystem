package com.fire.common.listener;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import com.fire.utils.EmailUtils;
import com.fire.utils.SMSUtils;

public class SystemListener implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {

	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		EmailUtils.sendEmailMsg();
		SMSUtils.sendSMSMsg();
	}
}
