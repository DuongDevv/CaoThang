/*
 Navicat Premium Data Transfer

 Source Server         : cua_hang_db
 Source Server Type    : MySQL
 Source Server Version : 100432
 Source Host           : localhost:3306
 Source Schema         : cua_hang_db

 Target Server Type    : MySQL
 Target Server Version : 100432
 File Encoding         : 65001

 Date: 31/03/2026 08:55:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for loai_san_pham
-- ----------------------------
DROP TABLE IF EXISTS `loai_san_pham`;
CREATE TABLE `loai_san_pham`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ten` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of loai_san_pham
-- ----------------------------
INSERT INTO `loai_san_pham` VALUES (1, 'Kho ga');
INSERT INTO `loai_san_pham` VALUES (2, 'ba mia');

-- ----------------------------
-- Table structure for san_pham
-- ----------------------------
DROP TABLE IF EXISTS `san_pham`;
CREATE TABLE `san_pham`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ten` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `loai_san_pham_id` int(11) NULL DEFAULT NULL,
  `mo_ta` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `don_gia` int(11) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_SP_LSP`(`loai_san_pham_id`) USING BTREE,
  CONSTRAINT `FK_SP_LSP` FOREIGN KEY (`loai_san_pham_id`) REFERENCES `loai_san_pham` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of san_pham
-- ----------------------------
INSERT INTO `san_pham` VALUES (2, 'doMixi', 1, 'asdasdasdsa', 8);
INSERT INTO `san_pham` VALUES (3, 'thit cho', 2, 'asdasdas', 7);
INSERT INTO `san_pham` VALUES (4, 'qưeqwe', 1, '', 3333333);

SET FOREIGN_KEY_CHECKS = 1;
