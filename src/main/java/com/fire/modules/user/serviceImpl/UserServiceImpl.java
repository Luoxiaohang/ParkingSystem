package com.fire.modules.user.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fire.common.ConstantInfo;
import com.fire.common.bean.Email;
import com.fire.modules.user.mapper.UsersMapper;
import com.fire.modules.user.model.Users;
import com.fire.modules.user.serviceI.UserServiceI;
import com.fire.utils.StringUtils;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserServiceI {

	@Autowired
	UsersMapper mapper;

	public UsersMapper getMapper() {
		return this.mapper;
	}

	@Override
	public Users login(Users user) {
		return getMapper().login(user);
	}

	@Override
	public void resetPassword(String emailAddress) {
		Email email = new Email();
		String password = StringUtils.getPassword();
		email.setSubject("重置密码：");
		email.setContent("恭喜您，您已经重置了烽火社团网申的密码，新的密码为" + password);
		email.setAddress(emailAddress);
		// 修改数据库
		getMapper().resetPassword(emailAddress,
				StringUtils.string2MD5(password));
		ConstantInfo.EMAIL_HOLDER.add(email);
	}

	@Override
	public boolean regist(Users user) {
		int id = getMapper().insert(user);
		if (id == -1) {
			return false;
		}
		return true;
	}

	@Override
	public Users getUserInfoById(int userId) {
		return getMapper().selectByPrimaryKey(userId);
	}

	@Override
	public boolean updateUserInfoById(Users user) {
		int id = getMapper().updateByPrimaryKey(user);
		if (id == -1) {
			return false;
		}
		return true;
	}

	@Override
	public boolean confirmUser(Integer id, String password) {
		Users user = getMapper().confirmUser(id, password);
		if (user != null) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public boolean updatePhoneById(Users user) {
		int id = getMapper().updatePhoneById(user);
		if (id == -1) {
			return false;
		}
		return true;
	}

	@Override
	public boolean checkEmail(String email) {
		Users user = getMapper().checkEmail(email);
		if (user != null) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public boolean checkPhone(String phone) {
		Users user = getMapper().checkPhone(phone);
		if (user != null) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public boolean updateEmailById(Users user) {
		int id = getMapper().updateEmailById(user);
		if (id == -1) {
			return false;
		}
		return true;
	}

	@Override
	public boolean updatePasswordById(Users user) {
		int id = getMapper().updatePasswordById(user);
		if (id == -1) {
			return false;
		}
		return true;
	}

	@Override
	public List<Users> getSystemUserList(int start, int limit) {
		List<Users> users = getMapper().getSystemUserList(start, limit);
		if (users != null) {
			return users;
		}
		return null;
	}

	@Override
	public int getTotalCount() {
		return getMapper().getTotalCount();
	}

	@Override
	public boolean checkAccount(String account) {
		Users user = getMapper().checkAccount(account);
		if (user != null) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public UserDetails loadUserByUsername(String arg0)
			throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}
}
