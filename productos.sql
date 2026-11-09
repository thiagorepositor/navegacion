create database if not exists thiago_pass;
use thiago_pass;

create table productos(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nombre varchar(50),
    categoria varchar(50),
    precio varchar(100),
    cantidad int (0)
);

select * from productos
