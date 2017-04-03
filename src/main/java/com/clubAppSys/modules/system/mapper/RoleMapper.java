package com.clubAppSys.modules.system.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.clubAppSys.modules.system.model.Function;
import com.clubAppSys.modules.system.model.Role;
import com.clubAppSys.modules.system.model.RoleFunctions;

public interface RoleMapper {
	int deleteByPrimaryKey(Integer id);

	int insert(Role record);

	Role selectByPrimaryKey(Integer id);

	List<Role> selectAll();

	int updateByPrimaryKey(Role record);

	/**
	 * 根据角色Id获取对应功能
	 * 
	 * @param roleId
	 * @return
	 */
	List<Function> getFunctionsByRoleId(@Param("start") int start,
			@Param("limit") int limit, @Param("roleId") int roleId);

	/**
	 * 为角色添加功能
	 * 
	 * @param function
	 * @return
	 */
	int addRoleFunction(RoleFunctions function);

	/**
	 * 删除角色对应的功能
	 * 
	 * @param function
	 * @return
	 */
	int delRoleFunction(RoleFunctions function);

	/**
	 * 更新用户的系统角色
	 * 
	 * @param userId
	 * @param roleId
	 * @return
	 */
	int updateUserSysRole(@Param("userId") int userId,
			@Param("roleId") int roleId);

	/**
	 * 获取社团角色
	 * 
	 * @return
	 */
	List<Role> getAllClubRoles();

	int getFunctionCountByRoleId(int roleId);
}