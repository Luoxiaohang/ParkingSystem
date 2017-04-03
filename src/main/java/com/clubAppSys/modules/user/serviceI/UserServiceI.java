package com.clubAppSys.modules.user.serviceI;

import java.util.List;

import com.clubAppSys.modules.user.model.Users;

public interface UserServiceI {

	/**
	 * 登录
	 * 
	 * @param user
	 * @return
	 */
	public Users login(Users user);

	/**
	 * 找回密码
	 * 
	 * @param email
	 * @return
	 */
	public boolean resetPassword(String email);

	/**
	 * 用户注册
	 * 
	 * @param user
	 * @return
	 */
	public boolean regist(Users user);

	/**
	 * 根据用户id获取用户信息
	 * 
	 * @param userId
	 * @return
	 */
	public Users getUserInfoById(int userId);

	/**
	 * 更新用户信息
	 * 
	 * @param user
	 * @return
	 */
	public boolean updateUserInfoById(Users user);

	/**
	 * 验证用户密码
	 * 
	 * @param id
	 * @param password
	 * @return
	 */
	public boolean confirmUser(Integer id, String password);

	/**
	 * 更改个人安全信息
	 * 
	 * @param user
	 * @return
	 */
	public boolean updatePhoneById(Users user);

	/**
	 * 检查Email是否已经注册
	 * 
	 * @param email
	 * @return
	 */
	public boolean checkEmail(String email);

	/**
	 * 检查电话是否已经注册
	 * 
	 * @param phone
	 * @return
	 */
	public boolean checkPhone(String phone);

	/**
	 * 更新邮箱
	 * 
	 * @param user
	 * @return
	 */
	public boolean updateEmailById(Users user);

	/**
	 * 更新密码
	 * 
	 * @param user
	 * @return
	 */
	public boolean updatePasswordById(Users user);

	/**
	 * 获取系统用户列表
	 * 
	 * @return
	 */
	public List<Users> getSystemUserList(int start, int limit);

	/**
	 * 获取数据总数
	 * 
	 * @return
	 */
	public int getTotalCount();

	/**
	 * 
	 * @param account
	 * @return
	 */
	public boolean checkAccount(String account);

}
