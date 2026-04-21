/*
 Navicat Premium Data Transfer

 Source Server         : LOCAL
 Source Server Type    : MariaDB
 Source Server Version : 100432
 Source Host           : localhost:3306
 Source Schema         : tuan09_db

 Target Server Type    : MariaDB
 Target Server Version : 100432
 File Encoding         : 65001

 Date: 24/03/2026 07:46:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sinh_vien
-- ----------------------------
DROP TABLE IF EXISTS `sinh_vien`;
CREATE TABLE `sinh_vien`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mssv` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `ho_ten` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `tong_ket` double NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sinh_vien
-- ----------------------------
INSERT INTO `sinh_vien` VALUES (1, '0306121122', 'John', 9);
INSERT INTO `sinh_vien` VALUES (2, '0306121121', 'Mary', 9);
INSERT INTO `sinh_vien` VALUES (3, '0306121123', 'Peter', 8);
INSERT INTO `sinh_vien` VALUES (4, '0306121124', 'Nam', 4.5);

SET FOREIGN_KEY_CHECKS = 1;
