/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : parkingsystem

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2017-04-03 16:16:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for berth
-- ----------------------------
DROP TABLE IF EXISTS `berth`;
CREATE TABLE `berth` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `zoneId` int(20) NOT NULL,
  `statusId` int(4) NOT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `zoneId` (`zoneId`),
  KEY `statusId` (`statusId`),
  CONSTRAINT `berth_ibfk_1` FOREIGN KEY (`zoneId`) REFERENCES `zone` (`id`),
  CONSTRAINT `berth_ibfk_2` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of berth
-- ----------------------------
INSERT INTO `berth` VALUES ('1', '1', '7', null);
INSERT INTO `berth` VALUES ('2', '2', '7', null);
INSERT INTO `berth` VALUES ('3', '1', '7', null);
INSERT INTO `berth` VALUES ('4', '3', '7', null);
INSERT INTO `berth` VALUES ('5', '3', '7', null);
INSERT INTO `berth` VALUES ('6', '4', '7', null);

-- ----------------------------
-- Table structure for berth_book_records
-- ----------------------------
DROP TABLE IF EXISTS `berth_book_records`;
CREATE TABLE `berth_book_records` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parkingId` int(11) NOT NULL,
  `zoneId` int(11) NOT NULL,
  `berthId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `bookTime` datetime NOT NULL,
  `fromTime` datetime NOT NULL,
  `standardId` int(11) NOT NULL,
  `toTime` datetime NOT NULL,
  `cost` float(11,0) NOT NULL,
  `statusId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `berthId` (`berthId`),
  KEY `userId` (`userId`),
  KEY `statusId` (`statusId`),
  KEY `standardId` (`standardId`),
  CONSTRAINT `berth_book_records_ibfk_1` FOREIGN KEY (`berthId`) REFERENCES `berth` (`id`),
  CONSTRAINT `berth_book_records_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `berth_book_records_ibfk_3` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`),
  CONSTRAINT `berth_book_records_ibfk_4` FOREIGN KEY (`standardId`) REFERENCES `charging_standard` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of berth_book_records
-- ----------------------------
INSERT INTO `berth_book_records` VALUES ('18', '1', '1', '1', '1', '2017-03-31 00:59:30', '2017-03-31 00:59:15', '1', '2017-03-31 01:59:16', '60', '8');
INSERT INTO `berth_book_records` VALUES ('19', '1', '2', '2', '1', '2017-03-31 01:01:50', '2017-03-31 01:01:43', '1', '2017-03-31 01:03:44', '60', '8');

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plateNo` char(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------

-- ----------------------------
-- Table structure for charging_customize
-- ----------------------------
DROP TABLE IF EXISTS `charging_customize`;
CREATE TABLE `charging_customize` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `startTime` time NOT NULL,
  `endTime` time NOT NULL,
  `chargingStandardId` int(11) NOT NULL,
  `commonCost` float(11,0) NOT NULL,
  `vipCost` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `chargingStandardId` (`chargingStandardId`),
  CONSTRAINT `charging_customize_ibfk_1` FOREIGN KEY (`chargingStandardId`) REFERENCES `charging_standard` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of charging_customize
-- ----------------------------
INSERT INTO `charging_customize` VALUES ('5', '00:00:00', '14:00:00', '1', '8', '5');
INSERT INTO `charging_customize` VALUES ('6', '14:00:00', '23:30:00', '1', '5', '3');

-- ----------------------------
-- Table structure for charging_standard
-- ----------------------------
DROP TABLE IF EXISTS `charging_standard`;
CREATE TABLE `charging_standard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(40) NOT NULL,
  `statusId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of charging_standard
-- ----------------------------
INSERT INTO `charging_standard` VALUES ('1', 'ddd', '1');
INSERT INTO `charging_standard` VALUES ('2', 'ttt', '1');

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
  KEY `moduleId` (`moduleId`) USING BTREE,
  KEY `parentId` (`parentId`) USING BTREE,
  CONSTRAINT `function_ibfk_1` FOREIGN KEY (`moduleId`) REFERENCES `modules` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of function
-- ----------------------------
INSERT INTO `function` VALUES ('1', '基本信息', 'MyApp.user.view.Info_show', '1', '1', '-1');
INSERT INTO `function` VALUES ('2', '安全设置', 'MyApp.user.view.Secure_show', '1', '1', '-1');
INSERT INTO `function` VALUES ('3', '角色管理', 'MyApp.system.view.Role_show', '2', '1', '-1');
INSERT INTO `function` VALUES ('4', '功能管理', 'MyApp.system.view.Function_show', '2', '1', '-1');
INSERT INTO `function` VALUES ('5', '系统用户', 'MyApp.user.view.Sys_User_list', '1', '1', '-1');
INSERT INTO `function` VALUES ('43', '查看车位信息', 'MyApp.berth.view.berth_show', '4', '1', '-1');
INSERT INTO `function` VALUES ('44', '收费标准', 'MyApp.charge.view.charge_standard_show', '5', '1', '-1');
INSERT INTO `function` VALUES ('45', '停车位使用记录', 'MyApp.record.view. berth_show', '7', '1', '-1');
INSERT INTO `function` VALUES ('46', '查看停车记录', 'MyApp.record.view.park_show', '7', '1', '-1');
INSERT INTO `function` VALUES ('47', '查看已预约车位', 'MyApp.berth.view.book_show', '4', '1', '-1');
INSERT INTO `function` VALUES ('48', '我的预订', 'MyApp.user.view.Berth_booked_show', '1', '1', '-1');
INSERT INTO `function` VALUES ('49', '实时监控', 'MyApp.monitor.view.monitor_show', '8', '1', '-1');

-- ----------------------------
-- Table structure for modules
-- ----------------------------
DROP TABLE IF EXISTS `modules`;
CREATE TABLE `modules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of modules
-- ----------------------------
INSERT INTO `modules` VALUES ('1', '用户中心');
INSERT INTO `modules` VALUES ('2', '系统管理');
INSERT INTO `modules` VALUES ('4', '车位管理');
INSERT INTO `modules` VALUES ('5', '收费管理');
INSERT INTO `modules` VALUES ('6', '停车记录管理');
INSERT INTO `modules` VALUES ('7', '历史记录');
INSERT INTO `modules` VALUES ('8', '安全中心');

-- ----------------------------
-- Table structure for parking
-- ----------------------------
DROP TABLE IF EXISTS `parking`;
CREATE TABLE `parking` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` char(40) NOT NULL,
  `managerId` int(20) NOT NULL,
  `statusId` int(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `statusId` (`statusId`),
  KEY `managerId` (`managerId`),
  CONSTRAINT `parking_ibfk_1` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`),
  CONSTRAINT `parking_ibfk_2` FOREIGN KEY (`managerId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of parking
-- ----------------------------
INSERT INTO `parking` VALUES ('1', '胜利停车场', '1', '1');
INSERT INTO `parking` VALUES ('2', '才华停车场', '2', '1');

-- ----------------------------
-- Table structure for park_record
-- ----------------------------
DROP TABLE IF EXISTS `park_record`;
CREATE TABLE `park_record` (
  `id` bigint(20) NOT NULL,
  `carId` int(20) NOT NULL,
  `berthId` int(20) NOT NULL,
  `video` longtext NOT NULL,
  `statusId` int(4) NOT NULL,
  `beginTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `endTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `bookId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `carId` (`carId`),
  KEY `berthId` (`berthId`),
  KEY `statusId` (`statusId`),
  KEY `bookId` (`bookId`),
  CONSTRAINT `park_record_ibfk_1` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`) ON DELETE NO ACTION,
  CONSTRAINT `park_record_ibfk_2` FOREIGN KEY (`carId`) REFERENCES `car` (`id`),
  CONSTRAINT `park_record_ibfk_3` FOREIGN KEY (`berthId`) REFERENCES `berth` (`id`),
  CONSTRAINT `park_record_ibfk_4` FOREIGN KEY (`bookId`) REFERENCES `berth_book_records` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of park_record
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '系统管理员', '0');
INSERT INTO `role` VALUES ('2', '会员用户', '1');
INSERT INTO `role` VALUES ('3', '普通用户', '1');

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
  KEY `functionId` (`functionId`) USING BTREE,
  KEY `typeId` (`roleId`) USING BTREE,
  KEY `moduleId` (`moduleId`) USING BTREE,
  CONSTRAINT `role_functions_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`),
  CONSTRAINT `role_functions_ibfk_2` FOREIGN KEY (`functionId`) REFERENCES `function` (`id`),
  CONSTRAINT `role_functions_ibfk_3` FOREIGN KEY (`moduleId`) REFERENCES `modules` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role_functions
-- ----------------------------
INSERT INTO `role_functions` VALUES ('1', '5', '1', '1');
INSERT INTO `role_functions` VALUES ('2', '5', '2', '1');
INSERT INTO `role_functions` VALUES ('3', '5', '3', '1');
INSERT INTO `role_functions` VALUES ('4', '4', '1', '2');
INSERT INTO `role_functions` VALUES ('5', '3', '1', '2');
INSERT INTO `role_functions` VALUES ('7', '2', '3', '1');
INSERT INTO `role_functions` VALUES ('8', '2', '1', '1');
INSERT INTO `role_functions` VALUES ('9', '2', '2', '1');
INSERT INTO `role_functions` VALUES ('10', '1', '1', '1');
INSERT INTO `role_functions` VALUES ('49', '43', '1', '4');
INSERT INTO `role_functions` VALUES ('50', '44', '1', '5');
INSERT INTO `role_functions` VALUES ('51', '45', '1', '7');
INSERT INTO `role_functions` VALUES ('52', '46', '1', '7');
INSERT INTO `role_functions` VALUES ('53', '48', '1', '1');
INSERT INTO `role_functions` VALUES ('54', '48', '3', '1');
INSERT INTO `role_functions` VALUES ('55', '48', '2', '1');
INSERT INTO `role_functions` VALUES ('56', '49', '1', '8');
INSERT INTO `role_functions` VALUES ('57', '43', '2', '4');

-- ----------------------------
-- Table structure for status
-- ----------------------------
DROP TABLE IF EXISTS `status`;
CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `schoolid` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of status
-- ----------------------------
INSERT INTO `status` VALUES ('1', '未满');
INSERT INTO `status` VALUES ('2', '已满');
INSERT INTO `status` VALUES ('3', '维修中');
INSERT INTO `status` VALUES ('4', '已预订');
INSERT INTO `status` VALUES ('5', '未预定');
INSERT INTO `status` VALUES ('6', '不可预订');
INSERT INTO `status` VALUES ('7', '正常');
INSERT INTO `status` VALUES ('8', '已支付');

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
  `roleId` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `QQ` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `typeId` (`roleId`) USING BTREE,
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'admin', '罗航', '1', '754865287@qq.com', '12345678902', 'e10adc3949ba59abbe56e057f20f883e', '1', '海安A105', '847149206', '2016-12-31');
INSERT INTO `users` VALUES ('2', 'admin2', '罗航', '1', '847149206@qq.com', '18318100723', 'e10adc3949ba59abbe56e057f20f883e', '2', '海安A106', '55555555', '2016-12-15');
INSERT INTO `users` VALUES ('3', 'admin3', '罗航', '1', '847149206@qq.com', '18318100723', 'e10adc3949ba59abbe56e057f20f883e', '1', '海安A107', '33333333', '2016-12-15');

-- ----------------------------
-- Table structure for zone
-- ----------------------------
DROP TABLE IF EXISTS `zone`;
CREATE TABLE `zone` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` char(40) NOT NULL,
  `statusId` int(4) NOT NULL,
  `parkingId` int(20) NOT NULL,
  `chargingStandardId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `statusId` (`statusId`),
  KEY `chargingStandardId` (`chargingStandardId`),
  KEY `parkingId` (`parkingId`),
  CONSTRAINT `zone_ibfk_1` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`),
  CONSTRAINT `zone_ibfk_3` FOREIGN KEY (`chargingStandardId`) REFERENCES `charging_standard` (`id`),
  CONSTRAINT `zone_ibfk_4` FOREIGN KEY (`parkingId`) REFERENCES `parking` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zone
-- ----------------------------
INSERT INTO `zone` VALUES ('1', 'ss', '1', '1', '1');
INSERT INTO `zone` VALUES ('2', 'sss', '1', '1', '1');
INSERT INTO `zone` VALUES ('3', 'ttt', '1', '1', '2');
INSERT INTO `zone` VALUES ('4', 'dddd', '1', '1', '2');
INSERT INTO `zone` VALUES ('5', 'gggg', '1', '1', '1');
INSERT INTO `zone` VALUES ('6', 'jjj', '1', '1', '2');
INSERT INTO `zone` VALUES ('9', 'pp', '1', '1', '2');
