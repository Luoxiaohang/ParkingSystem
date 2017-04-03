package com.clubAppSys.modules.system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.clubAppSys.common.base.BaseDTO;
import com.clubAppSys.modules.system.model.Function;
import com.clubAppSys.modules.system.model.Role;
import com.clubAppSys.modules.system.model.RoleFunctions;
import com.clubAppSys.modules.system.service.RoleService;

@Controller
@RequestMapping("/Role")
public class RoleController {
	@Autowired(required = false)
	private RoleService roleService;

	@ResponseBody
	@RequestMapping(value = "/getRoleList", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Role> addSysFunction(Function fun) {
		BaseDTO<Role> result = new BaseDTO<>();
		List<Role> roles = roleService.getAllRoles();
		if (roles != null) {
			result.setSuccess(true);
			result.setList(roles);
		} else {
			result.setSuccess(false);
			result.setMsg("获取角色列表失败");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/getClubRoleList", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Role> getClubRoleList() {
		BaseDTO<Role> result = new BaseDTO<>();
		List<Role> roles = roleService.getAllClubRoles();
		if (roles != null) {
			result.setSuccess(true);
			result.setList(roles);
		} else {
			result.setSuccess(false);
			result.setMsg("获取社團角色列表失败");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/getRoleFunction", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Function> getFunctionsByRoleId(int start, int limit,
			int roleId) {
		BaseDTO<Function> result = new BaseDTO<>();
		int totalCount = roleService.getFunctionCountByRoleId(roleId);
		result.setTotalCount(totalCount);
		List<Function> roles = roleService.getFunctionsByRoleId(start, limit,
				roleId);
		result.setTotalCount(totalCount);
		if (roles != null) {
			result.setSuccess(true);
			result.setList(roles);
		} else {
			result.setSuccess(false);
			result.setMsg("获取角色对应功能失败");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/updateUserSysRole", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Function> updateUserSysRole(int userId, int roleId) {
		BaseDTO<Function> result = new BaseDTO<>();
		boolean success = roleService.updateUserSysRole(userId, roleId);
		result.setSuccess(success);
		if (!success) {
			result.setMsg("更新用户系统角色失败");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/addRoleFunction", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Function> addRoleFunction(RoleFunctions function) {
		BaseDTO<Function> result = new BaseDTO<>();
		boolean success = roleService.addRoleFunction(function);
		result.setSuccess(success);
		if (!success) {
			result.setMsg("获取角色对应功能失败");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/addRole", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Function> addRole(Role role) {
		BaseDTO<Function> result = new BaseDTO<>();
		boolean success = roleService.addRole(role);
		result.setSuccess(success);
		if (!success) {
			result.setMsg("获取角色对应功能失败");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/editRole", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Function> editRole(Role role) {
		BaseDTO<Function> result = new BaseDTO<>();
		boolean success = roleService.editRole(role);
		result.setSuccess(success);
		if (!success) {
			result.setMsg("获取角色对应功能失败");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/deleteRole", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Function> deleteRole(int roleId) {
		BaseDTO<Function> result = new BaseDTO<>();
		boolean success = roleService.deleteRoleById(roleId);
		result.setSuccess(success);
		if (!success) {
			result.setMsg("获取角色对应功能失败");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/deleteRoleFunction", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private BaseDTO<Function> deleteRoleFunction(RoleFunctions function) {
		BaseDTO<Function> result = new BaseDTO<>();
		boolean success = roleService.delRoleFunction(function);
		result.setSuccess(success);
		if (!success) {
			result.setMsg("删除失败");
		}
		return result;
	}
}
