package com.clubAppSys.modules.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clubAppSys.modules.system.mapper.FunctionMapper;
import com.clubAppSys.modules.system.model.Function;

@Service("functionService")
public class FunctionService {

	@Autowired
	FunctionMapper mapper;

	public FunctionMapper getMapper() {
		return mapper;
	}

	/**
	 * 根据模块Id及角色Id获取子功能列表
	 * 
	 * @param modulId
	 * @return
	 */
	public List<Function> getFunctionsByModuleIdRoleId(int modulId, int roleId) {
		return getMapper().getFunctionsByModuleIdRoleId(modulId, roleId);
	}

	/**
	 * 获取功能列表
	 * 
	 * @return
	 */
	public List<Function> getFunctionList() {
		List<Function> functions = getMapper().getFunctionList();
		return functions;
	}

	/**
	 * 检查模块下是否含有某个功能
	 * 
	 * @param moduleId
	 * @param functionName
	 * @return true:含有 ；false:不含有
	 */
	public boolean checkFunction(int moduleId, String functionName) {
		Function function = getMapper().checkFunction(moduleId, functionName);
		if (function != null) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 添加功能
	 * 
	 * @param function
	 * @return
	 */
	public boolean addSysFunction(Function function) {
		Function fun = getMapper().checkFunction(function.getModuleId(),
				function.getText());
		if (fun == null) {
			int id = getMapper().insert(function);
			if (id != -1) {
				return true;
			}
		}
		return false;
	}

	/**
	 * 修改功能
	 * 
	 * @param function
	 * @return
	 */
	public boolean editSysFunction(Function function) {
		int id = getMapper().updateByPrimaryKey(function);
		if (id != -1) {
			return true;
		}
		return false;
	}

	public boolean deleteSysFunction(Function fun) {
		int id = getMapper().deleteByPrimaryKey(fun.getId());
		if (id != -1) {
			return true;
		}
		return false;
	}

	/**
	 * 获取模块功能列表
	 * 
	 * @param moduleId
	 * @return
	 */
	public List<Function> getFunctionsByModuleId(int moduleId) {
		return getMapper().getFunctionsByModuleId(moduleId);
	}
}
