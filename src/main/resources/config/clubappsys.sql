/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : clubappsys

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2016-12-15 22:28:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for activities
-- ----------------------------
DROP TABLE IF EXISTS `activities`;
CREATE TABLE `activities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clubId` int(11) DEFAULT NULL,
  `foundUserId` int(11) DEFAULT NULL,
  `theme` varchar(255) NOT NULL,
  `foundTime` varchar(255) NOT NULL,
  `startTime` varchar(255) DEFAULT NULL,
  `endTime` varchar(255) DEFAULT NULL,
  `isPublic` int(11) DEFAULT NULL COMMENT '是否对社团外部人员公开(0:是；1:否)',
  `description` varchar(255) DEFAULT NULL,
  `peopleNum` int(11) DEFAULT NULL,
  `place` varchar(255) DEFAULT NULL COMMENT '地点',
  `state` int(1) DEFAULT '0' COMMENT '活动状态',
  PRIMARY KEY (`id`),
  KEY `foundUserId` (`foundUserId`),
  KEY `clubId` (`clubId`),
  CONSTRAINT `activities_ibfk_1` FOREIGN KEY (`foundUserId`) REFERENCES `users` (`id`),
  CONSTRAINT `activities_ibfk_2` FOREIGN KEY (`clubId`) REFERENCES `club` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of activities
-- ----------------------------
INSERT INTO `activities` VALUES ('4', '1', '1', 'xiaoy', '2016-12-14 09:15:29', '2016-12-14 09:15:29', '2016-12-14 09:15:29', '1', 'sdasa', '1', 'asd', '7');
INSERT INTO `activities` VALUES ('7', '3', '2', '跳舞', '2016年12月14日', '16年12月22日', '16年12月23日', '1', '舒服舒服', null, '中心广场', '0');

-- ----------------------------
-- Table structure for activity_users
-- ----------------------------
DROP TABLE IF EXISTS `activity_users`;
CREATE TABLE `activity_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activityId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL COMMENT '用户参加活动状态',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `activityId` (`activityId`),
  CONSTRAINT `activity_users_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `activity_users_ibfk_2` FOREIGN KEY (`activityId`) REFERENCES `activities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of activity_users
-- ----------------------------
INSERT INTO `activity_users` VALUES ('37', '4', '1', '1');

-- ----------------------------
-- Table structure for club
-- ----------------------------
DROP TABLE IF EXISTS `club`;
CREATE TABLE `club` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `schoolId` int(11) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `foundTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `state` int(11) DEFAULT NULL,
  `founderId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `schoolid` (`schoolId`),
  CONSTRAINT `club_ibfk_1` FOREIGN KEY (`schoolId`) REFERENCES `school` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of club
-- ----------------------------
INSERT INTO `club` VALUES ('1', '计算机协会', '1', 'sdfdsf', '2016-12-14 10:04:46', '0', '1');
INSERT INTO `club` VALUES ('3', '舞蹈协会', '1', 'sdfdsf和哈哈哈哈哈哈', '2016-12-14 10:04:47', '0', '1');
INSERT INTO `club` VALUES ('4', '足球协会', '1', 'sdfdsf', '2016-12-14 10:04:48', '0', '1');
INSERT INTO `club` VALUES ('5', '羽毛球协会', '1', 'sdfdsfd方法反反复复', '2016-12-14 10:04:49', '0', '1');
INSERT INTO `club` VALUES ('6', '棒球协会', '1', 'sdfdsf', '2016-12-14 10:04:50', '0', '1');
INSERT INTO `club` VALUES ('7', '堡垒球协会', '1', 'dfgfd', '2016-12-14 10:04:50', '0', '1');
INSERT INTO `club` VALUES ('8', '足球协会', '1', '足球协会', '2016-12-14 10:04:52', '0', '1');
INSERT INTO `club` VALUES ('9', '刚刚刚刚', '1', '反反复复', null, '0', null);

-- ----------------------------
-- Table structure for club_users
-- ----------------------------
DROP TABLE IF EXISTS `club_users`;
CREATE TABLE `club_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `clubId` int(11) NOT NULL,
  `roleId` int(11) NOT NULL,
  `joinTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `state` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `position` (`roleId`),
  KEY `userId` (`userId`),
  KEY `clubId` (`clubId`),
  CONSTRAINT `club_users_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `club_users_ibfk_4` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`),
  CONSTRAINT `club_users_ibfk_5` FOREIGN KEY (`clubId`) REFERENCES `club` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of club_users
-- ----------------------------
INSERT INTO `club_users` VALUES ('1', '1', '7', '3', '2016-12-13 22:42:24', '0');
INSERT INTO `club_users` VALUES ('2', '1', '1', '3', '2016-12-13 22:42:26', '0');
INSERT INTO `club_users` VALUES ('3', '1', '3', '3', '2016-12-13 22:42:27', '0');
INSERT INTO `club_users` VALUES ('4', '1', '4', '3', '2016-12-13 22:42:29', '0');

-- ----------------------------
-- Table structure for function
-- ----------------------------
DROP TABLE IF EXISTS `function`;
CREATE TABLE `function` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) DEFAULT NULL,
  `viewName` varchar(255) DEFAULT NULL,
  `moduleId` int(11) DEFAULT NULL,
  `leaf` tinyint(4) DEFAULT '1',
  `parentId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `moduleId` (`moduleId`),
  KEY `parentId` (`parentId`),
  CONSTRAINT `function_ibfk_1` FOREIGN KEY (`moduleId`) REFERENCES `modules` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of function
-- ----------------------------
INSERT INTO `function` VALUES ('3', '基本信息', 'MyApp.user.view.Info_show', '1', '1', '-1');
INSERT INTO `function` VALUES ('4', '安全设置', 'MyApp.user.view.Secure_show', '1', '1', '-1');
INSERT INTO `function` VALUES ('6', '角色管理', 'MyApp.system.view.Role_show', '2', '1', '-1');
INSERT INTO `function` VALUES ('7', '功能管理', 'MyApp.system.view.Function_show', '2', '1', '-1');
INSERT INTO `function` VALUES ('9', '社团列表', 'MyApp.club.view.Club_show', '4', '1', '-1');
INSERT INTO `function` VALUES ('19', '活动列表', 'MyApp.activity.view.Activity_show', '5', '1', '-1');
INSERT INTO `function` VALUES ('20', '我的活动', 'MyApp.activity.view.MyActivity_show', '5', '1', '-1');
INSERT INTO `function` VALUES ('21', '社团搜索', 'MyApp.club.view.Club_search', '4', '1', '-1');
INSERT INTO `function` VALUES ('22', '社团审核', 'MyApp.club.view.Club_check', '4', '1', '-1');
INSERT INTO `function` VALUES ('39', '系统用户', 'MyApp.user.view.Sys_User_list', '1', '1', '-1');
INSERT INTO `function` VALUES ('41', '我的社团', 'MyApp.club.view.Club_showMyClub', '4', '1', '-1');
INSERT INTO `function` VALUES ('42', '成员审核', 'MyApp.club.view.ClubUsers_check', '4', '1', '-1');

-- ----------------------------
-- Table structure for modules
-- ----------------------------
DROP TABLE IF EXISTS `modules`;
CREATE TABLE `modules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of modules
-- ----------------------------
INSERT INTO `modules` VALUES ('1', '用户中心');
INSERT INTO `modules` VALUES ('2', '系统管理');
INSERT INTO `modules` VALUES ('4', '社团中心');
INSERT INTO `modules` VALUES ('5', '活动中心');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `tag` int(11) DEFAULT '0' COMMENT '0：系统角色；1：社团角色',
  PRIMARY KEY (`id`),
  KEY `typeid` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '系统管理员', '0');
INSERT INTO `role` VALUES ('2', '社团管理员', '1');
INSERT INTO `role` VALUES ('3', '社团成员', '1');
INSERT INTO `role` VALUES ('4', '普通用户', '0');

-- ----------------------------
-- Table structure for role_functions
-- ----------------------------
DROP TABLE IF EXISTS `role_functions`;
CREATE TABLE `role_functions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `functionId` int(11) NOT NULL,
  `roleId` int(11) NOT NULL,
  `moduleId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `functionId` (`functionId`),
  KEY `typeId` (`roleId`),
  KEY `moduleId` (`moduleId`),
  CONSTRAINT `role_functions_ibfk_2` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`),
  CONSTRAINT `role_functions_ibfk_3` FOREIGN KEY (`functionId`) REFERENCES `function` (`id`),
  CONSTRAINT `role_functions_ibfk_4` FOREIGN KEY (`moduleId`) REFERENCES `modules` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role_functions
-- ----------------------------
INSERT INTO `role_functions` VALUES ('1', '9', '1', '4');
INSERT INTO `role_functions` VALUES ('2', '9', '2', '4');
INSERT INTO `role_functions` VALUES ('3', '9', '3', '4');
INSERT INTO `role_functions` VALUES ('4', '7', '1', '2');
INSERT INTO `role_functions` VALUES ('5', '6', '1', '2');
INSERT INTO `role_functions` VALUES ('7', '4', '3', '1');
INSERT INTO `role_functions` VALUES ('8', '4', '1', '1');
INSERT INTO `role_functions` VALUES ('9', '4', '2', '1');
INSERT INTO `role_functions` VALUES ('10', '3', '0', '1');
INSERT INTO `role_functions` VALUES ('11', '3', '1', '1');
INSERT INTO `role_functions` VALUES ('12', '3', '2', '1');
INSERT INTO `role_functions` VALUES ('13', '3', '3', '1');
INSERT INTO `role_functions` VALUES ('17', '9', '1', '4');
INSERT INTO `role_functions` VALUES ('19', '4', '4', '1');
INSERT INTO `role_functions` VALUES ('26', '9', '4', '4');
INSERT INTO `role_functions` VALUES ('29', '19', '1', '5');
INSERT INTO `role_functions` VALUES ('31', '21', '1', '4');
INSERT INTO `role_functions` VALUES ('32', '22', '1', '4');
INSERT INTO `role_functions` VALUES ('35', '39', '1', '1');
INSERT INTO `role_functions` VALUES ('39', '20', '1', '5');
INSERT INTO `role_functions` VALUES ('40', '21', '4', '4');
INSERT INTO `role_functions` VALUES ('41', '41', '4', '4');
INSERT INTO `role_functions` VALUES ('42', '19', '4', '5');
INSERT INTO `role_functions` VALUES ('43', '20', '4', '5');
INSERT INTO `role_functions` VALUES ('44', '3', '4', '1');
INSERT INTO `role_functions` VALUES ('47', '42', '1', '4');

-- ----------------------------
-- Table structure for school
-- ----------------------------
DROP TABLE IF EXISTS `school`;
CREATE TABLE `school` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `schoolid` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of school
-- ----------------------------
INSERT INTO `school` VALUES ('1', '广东海洋大学');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(15) NOT NULL COMMENT '学号',
  `nickName` varchar(20) NOT NULL COMMENT '昵称',
  `gender` int(1) DEFAULT NULL COMMENT '性别',
  `Email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `phone` bigint(20) DEFAULT NULL COMMENT '电话',
  `password` varchar(32) NOT NULL COMMENT '密码',
  `schoolId` int(11) NOT NULL,
  `roleId` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `QQ` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `schoolId` (`schoolId`),
  KEY `typeId` (`roleId`),
  CONSTRAINT `users_ibfk_3` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`),
  CONSTRAINT `users_ibfk_4` FOREIGN KEY (`schoolId`) REFERENCES `school` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'admin', '罗航', '1', '754865287@qq.com', '12345678902', 'e10adc3949ba59abbe56e057f20f883e', '1', '1', '海安A105', '847149206', '2016-12-31');
INSERT INTO `users` VALUES ('2', 'admin2', '罗航', '1', '847149206@qq.com', '18318100723', 'e10adc3949ba59abbe56e057f20f883e', '1', '1', '海安A106', '55555555', '2016-12-15');
INSERT INTO `users` VALUES ('3', 'admin3', '罗航', '1', '847149206@qq.com', '18318100723', 'e10adc3949ba59abbe56e057f20f883e', '1', '4', '海安A107', '33333333', '2016-12-15');
SET FOREIGN_KEY_CHECKS=1;
