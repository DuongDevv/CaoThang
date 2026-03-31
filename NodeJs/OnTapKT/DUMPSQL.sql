CREATE DATABASE cua_hang_db;
USE cua_hang_db;

CREATE TABLE loai_san_pham (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ten VARCHAR(50)
);

CREATE TABLE san_pham (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ten VARCHAR(100),
    loai_san_pham_id INT,
    mo_ta TEXT,
    don_gia INT DEFAULT 0,
    FOREIGN KEY (loai_san_pham_id) REFERENCES loai_san_pham(id)
);
