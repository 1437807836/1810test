/*
Navicat MySQL Data Transfer

Source Server         : w1810
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-03-01 11:16:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` tinyint(1) NOT NULL AUTO_INCREMENT,
  `user` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '15256273352', '123456');
INSERT INTO `user` VALUES ('2', '15264254411', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('3', '15264254411', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('4', '15256273342', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('5', '15256273322', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('6', '15256273346', 'f8f2fe2812cdf2202a9537a8fdab3d03');
INSERT INTO `user` VALUES ('7', '15256271122', 'ac8828d97f2bb44c7ae51d9a0b8dcd9c');
INSERT INTO `user` VALUES ('8', '15256273348', '25f9e794323b453885f5181f1b624d0b');
INSERT INTO `user` VALUES ('9', '123@12.com', '6ebe76c9fb411be97b3b0d48b791a7c9');
