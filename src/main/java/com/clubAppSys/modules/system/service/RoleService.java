package com.clubAppSys.modules.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.clubAppSys.modules.system.mapper.RoleMapper;
import com.clubAppSys.modules.system.model.Function;
import com.clubAppSys.modules.system.model.Role;
import com.clubAppSys.modules.system.model.RoleFunctions;

@Service("RoleService")
@Transactional
public class RoleService {

	@Autowired
	RoleMapper mapper;

	public RoleMapper getMapper() {
		return this.mapper;
	}

	public List<Role> getAllRoles() {
		return getMapper().selectAll();
	}

	public List<Function> getFunctionsByRoleId(int start, int limit, int roleId) {
		return getMapper().getFunctionsByRoleId(start, limit, roleId);
	}

	public boolean addRoleFunction(RoleFunctions function) {
		int id = getMapper().addRoleFunction(function);
		if (id != -1) {
			return true;
		}
		return false;
	}

	public boolean delRoleFunction(RoleFunctions function) {
		int id = getMapper().delRoleFunction(function);
		if (id != -1) {
			return true;
		}
		return false;
	}

	/**
	 * 添加角色
	 * 
	 * @param role
	 * @return
	 */
	public boolean addRole(Role role) {
		int id = getMapper().insert(role);
		if (id != -1) {
			return true;
		}
		return false;
	}

	public boolean deleteRoleById(int roleId) {
		int id = getMapper().deleteByPrimaryKey(roleId);
		if (id != -1) {
			return true;
		}
		return false;
	}

	/**
	 * 边界角色
	 * 
	 * @param role
	 * @return
	 */
	public boolean editRole(Role role) {
		int id = getMapper().updateByPrimaryKey(role);
		if (id != -1) {
			return true;
		}
		return false;
	}

	/**
	 * 更新用户的系统角色
	 * 
	 * @param userId
	 * @param roleId
	 * @return
	 */
	public boolean updateUserSysRole(int userId, int roleId) {
		int id = getMapper().updateUserSysRole(userId, roleId);
		if (id != -1) {
			return true;
		}
		return false;
	}

	/**
	 * 获取社团角色
	 * 
	 * @return
	 */
	public List<Role> getAllClubRoles() {
		// TODO Auto-generated method stub
		return getMapper().getAllClubRoles();
	}

	/**
	 * 获取总的条目
	 * 
	 * @return
	 */
	public int getFunctionCountByRoleId(int roleId) {
		return getMapper().getFunctionCountByRoleId(roleId);
	}
}
