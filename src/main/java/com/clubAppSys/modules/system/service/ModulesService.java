package com.clubAppSys.modules.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clubAppSys.modules.system.mapper.ModulesMapper;
import com.clubAppSys.modules.system.model.Modules;

@Service("ModulesService")
public class ModulesService {

	@Autowired
	ModulesMapper mapper;

	public ModulesMapper getMapper() {
		return mapper;
	}

	/**
	 * 根据角色Id获取模块名称
	 * 
	 * @param roleId
	 * @return
	 */
	public List<Modules> getModulesByTypeId(int roleId) {
		return getMapper().getModulesByTypeId(roleId);
	}

	/**
	 * 获取功能列表
	 * 
	 * @return
	 */
	public List<Modules> getModulesList() {
		List<Modules> functions = getMapper().selectAll();
		return functions;
	}

	/**
	 * 添加模块
	 * 
	 * @param module
	 * @return
	 */
	public boolean addModule(Modules module) {
		Modules mo = getMapper().getModuleByName(module.getName());
		if (mo != null) {
			return false;
		} else {
			int id = getMapper().insert(module);
			if (id != -1) {
				return true;
			}
		}
		return false;
	}

	/**
	 * 删除模块
	 * 
	 * @param module
	 * @return
	 */
	public boolean deleteModule(Modules module) {
		int id = getMapper().deleteByPrimaryKey(module.getId());
		if (id != -1) {
			return true;
		}
		return false;
	}

	/**
	 * 修改模块
	 * 
	 * @param module
	 * @return
	 */
	public boolean editModule(Modules module) {
		int id = getMapper().updateByPrimaryKey(module);
		if (id != -1) {
			return true;
		}
		return false;
	}

}
