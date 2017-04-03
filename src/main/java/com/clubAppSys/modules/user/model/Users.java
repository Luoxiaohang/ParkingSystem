package com.clubAppSys.modules.user.model;

import java.util.Date;

import org.apache.ibatis.type.Alias;

@Alias("Users")
public class Users {
	private Integer id;

	private String account;

	private String nickName;

	private Integer gender;

	private String Email;

	private String phone;

	private String password;

	private Integer schoolId;

	private String schoolName;

	private Integer roleId;

	private String roleName;
	private String address;
	private String QQ;
	private Date birthday;
	private String birthdayTemp;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account == null ? null : account.trim();
	}

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName == null ? null : nickName.trim();
	}

	public Integer getGender() {
		return gender;
	}

	public void setGender(Integer gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String Email) {
		this.Email = Email == null ? null : Email.trim();
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password == null ? null : password.trim();
	}

	public Integer getSchoolId() {
		return schoolId;
	}

	public void setSchoolId(Integer schoolId) {
		this.schoolId = schoolId;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setTypeid(Integer roleId) {
		this.roleId = roleId;
	}

	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getQQ() {
		return QQ;
	}

	public void setQQ(String QQ) {
		this.QQ = QQ;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getBirthdayTemp() {
		return birthdayTemp;
	}

	public void setBirthdayTemp(String birthday_temp) {
		this.birthdayTemp = birthday_temp;
	}

	@Override
	public String toString() {
		return "Users [id=" + id + ", account=" + account + ", nickName="
				+ nickName + ", gender=" + gender + ", Email=" + Email
				+ ", phone=" + phone + ", password=" + password + ", schoolId="
				+ schoolId + ", schoolName=" + schoolName + ", roleId="
				+ roleId + ", roleName=" + roleName + ", address=" + address
				+ ", QQ=" + QQ + ", birthday=" + birthday + ", birthdayTemp="
				+ birthdayTemp + "]";
	}

}