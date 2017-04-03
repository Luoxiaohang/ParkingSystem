package com.clubAppSys.modules.system.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.clubAppSys.modules.system.model.Function;
import com.clubAppSys.modules.system.model.Modules;

public interface FunctionMapper {
	int deleteByPrimaryKey(Integer id);

	int insert(Function record);

	Function selectByPrimaryKey(Integer id);

	List<Function> selectAll();

	int updateByPrimaryKey(Function record);

	/**
	 * 根据用户角色Id获取功能模块列表
	 * 
	 * @return
	 */
	List<Modules> getModulesByRoleId(int roleId);

	/**
	 * 根据模块Id获取子功能列表
	 * 
	 * @param modulId
	 * @return
	 */
	List<Function> getFunctionsByModuleIdRoleId(
			@Param("moduleId") int moduleId, @Param("roleId") int roleId);

	/**
	 * 获取功能列表
	 * 
	 * @return
	 */
	List<Function> getFunctionList();

	/**
	 * 检查是否含有某个功能
	 * 
	 * @return
	 */
	Function checkFunction(@Param("moduleId") int moduleId,
			@Param("functionName") String functionName);

	/**
	 * 获取模块功能列表
	 * 
	 * @param moduleId
	 * @return
	 */
	List<Function> getFunctionsByModuleId(int moduleId);

}