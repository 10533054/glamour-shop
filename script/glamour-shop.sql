drop database if exists glamour_shop;
create database glamour_shop;
create table glamour_shop.user (id int UNSIGNED AUTO_INCREMENT PRIMARY KEY, f_name varchar(30) not null, l_name varchar(30) not null, email varchar(30) not null, address varchar(50) not null, ph_no varchar(50) not null, age int not null );
