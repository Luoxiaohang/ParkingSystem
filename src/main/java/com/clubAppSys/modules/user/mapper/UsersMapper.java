package com.clubAppSys.modules.user.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.clubAppSys.modules.user.model.Users;

public interface UsersMapper {
	int deleteByPrimaryKey(Integer id);

	int insert(Users record);

	Users selectByPrimaryKey(Integer id);

	List<Users> selectAll();

	int updateByPrimaryKey(Users record);

	Users login(Users user);

	/**
	 * 修改密码
	 */
	void resetPassword(@Param("Email") String Email,
			@Param("password") String password);

	void regist(Users user);

	/**
	 * 验证密码
	 * 
	 * @param id
	 * @param password
	 * @return
	 */
	Users confirmUser(@Param("id") Integer id,
			@Param("password") String password);

	/**
	 * 更新用户安全信息
	 * 
	 * @param user
	 * @return
	 */
	int updatePhoneById(Users user);

	/**
	 * 检查Email是否已经注册
	 * 
	 * @param email
	 * @return
	 */
	Users checkEmail(String email);

	/**
	 * 检查电话是否已经注册
	 * 
	 * @param phone
	 * @return
	 */
	Users checkPhone(String phone);

	/**
	 * 更新邮箱
	 * 
	 * @param user
	 * @return
	 */
	int updateEmailById(Users user);

	/**
	 * 更新密码
	 * 
	 * @param user
	 * @return
	 */
	int updatePasswordById(Users user);

	/**
	 * 获取系统用户
	 * 
	 * @param start
	 * @param limit
	 * @return
	 */
	List<Users> getSystemUserList(@Param("start") int start,
			@Param("limit") int limit);

	/**
	 * 获取数据总数
	 * 
	 * @return
	 */
	int getTotalCount();

	Users checkAccount(String account);
}