/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50516
Source Host           : localhost:3306
Source Database       : taller_sencha

Target Server Type    : MYSQL
Target Server Version : 50516
File Encoding         : 65001

Date: 2012-04-12 21:06:40
*/
create database taller_sencha;
use taller_sencha;

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `contactos`
-- ----------------------------
DROP TABLE IF EXISTS `contactos`;
CREATE TABLE `contactos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) DEFAULT NULL,
  `telefono` varchar(12) DEFAULT NULL,
  `email` varchar(35) DEFAULT NULL,
  `direccion` varchar(150) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of contactos
-- ----------------------------
INSERT INTO `contactos` VALUES ('1', 'Jose hh', '989710521', 'jose@hotmail.com', 'av Circunvalacion 2649 salamanca', '0');
INSERT INTO `contactos` VALUES ('2', 'Brayan', '43781406', '', '', '0');
INSERT INTO `contactos` VALUES ('3', 'Julia', '989710522', 'julia@hotmail.com', 'av circunvalacion 3456', '1');
INSERT INTO `contactos` VALUES ('4', 'Maria', '989710532', 'maria@hotmail.com', 'jr chillon 254', '1');
INSERT INTO `contactos` VALUES ('5', 'roberto', '989710537', 'roberto@hotmail.com', 'jr chillon 258', '1');
INSERT INTO `contactos` VALUES ('6', 'Miguel', '895623155', 'miguel@hotmail.com', 'jr puno 358', '1');
