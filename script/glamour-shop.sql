drop database if exists glamour_shop;
create database glamour_shop;
use glamour_shop;
create table glamour_shop.user (id int UNSIGNED AUTO_INCREMENT PRIMARY KEY, f_name varchar(30) not null, l_name varchar(30) not null, email varchar(30) not null, address varchar(50) not null, ph_no varchar(50) not null, age int not null,password varchar(50));

create table brands (id int  UNSIGNED AUTO_INCREMENT,name varchar(50),PRIMARY KEY (id));
create table products(id int  UNSIGNED AUTO_INCREMENT PRIMARY KEY,name varchar(50),price int(50),description varchar(50),brand_id int UNSIGNED,qty int);
ALTER TABLE products
ADD FOREIGN KEY (brand_id) REFERENCES brands(id);

insert into glamour_shop.user(f_name,l_name,email,address,ph_no,age,password) values('sasi','daivam','1','','9847004551',1,1);
insert into brands(name) values ('Maybiline');
insert into brands(name) values ('Maybiline');
insert into brands(name) values ('Maybiline');
insert into brands(name) values ('Maybiline');
insert into brands(name) values ('Maybiline');
insert into brands(name) values ('Maybiline');
insert into brands(name) values ('Maybiline');
insert into brands(name) values ('Maybiline');
insert into brands(name) values ('Maybiline');


insert into products(name,price,description,brand_id,qty)values ('lip stick',20,'veruy god',2,2);
insert into products(name,price,description,brand_id,qty)values('lip stick',20,'veruy god',2,2);
insert into products(name,price,description,brand_id,qty)values('lip stick',20,'veruy god',2,2);
insert into products(name,price,description,brand_id,qty)values('lip stick',20,'veruy god',2,2);
insert into products(name,price,description,brand_id,qty)values('lip stick',20,'veruy god',2,2);
insert into products(name,price,description,brand_id,qty)values('lip stick',20,'veruy god',2,2);
insert into products(name,price,description,brand_id,qty)values('lip stick',20,'veruy god',2,2);
insert into products(name,price,description,brand_id,qty)values('lip stick',20,'veruy god',2,2);
insert into products(name,price,description,brand_id,qty)values('lip stick',20,'veruy god',2,2);
insert into products(name,price,description,brand_id,qty)values('lip stick',20,'veruy god',2,2);
insert into products(name,price,description,brand_id,qty)values('lip stick',20,'veruy god',2,2);
insert into products(name,price,description,brand_id,qty)values('lip stick',20,'veruy god',2,2);
insert into products(name,price,description,brand_id,qty)values('lip stick',20,'veruy god',2,2);
insert into products(name,price,description,brand_id,qty)values('lip stick',20,'veruy god',2,2);
insert into products(name,price,description,brand_id,qty)values('lip stick',20,'veruy god',2,2);

