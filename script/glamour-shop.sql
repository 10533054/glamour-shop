drop database if exists glamour_shop;
create database glamour_shop;
use glamour_shop;
create table glamour_shop.user (id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,u_name varchar(50), f_name varchar(30) not null, l_name varchar(30) not null, email varchar(30) not null, address varchar(50) not null, ph_no varchar(50) not null, age varchar(50) not null,password varchar(50));

create table brands (id int  UNSIGNED AUTO_INCREMENT,name varchar(50),PRIMARY KEY (id));
create table products(id int  UNSIGNED AUTO_INCREMENT PRIMARY KEY,name varchar(50),price int(50),description varchar(50),brand_id int UNSIGNED,qty int,img_name varchar(50));
ALTER TABLE products
ADD FOREIGN KEY (brand_id) REFERENCES brands(id);

insert into glamour_shop.user(u_name, f_name,l_name,email,address,ph_no,age,password) values('testu','sasi','daivam','1','','9847004551',1,1);
insert into brands(name) values ('Estee Lauder');
insert into brands(name) values ('L`Oreal');
insert into brands(name) values ('Maybelline');
insert into brands(name) values ('Guerlin');
insert into brands(name) values ('NARS');
insert into brands(name) values ('Laura Mercier');
insert into brands(name) values ('CHANEL');
insert into brands(name) values ('Clarins');
insert into brands(name) values (' Yves Saint Laurent');

insert into products(name,price,description,brand_id,qty,img_name)values ('Lip stick',20,'veruy god',2,2,'lipstick.jpeg');
insert into products(name,price,description,brand_id,qty,img_name)values('Eye Liner',20,'veruy god',2,2,'flat.jpeg');
insert into products(name,price,description,brand_id,qty,img_name)values('Foundation',20,'veruy god',2,2,'1.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Greener',20,'veruy god',2,2,'2.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Whitener',20,'veruy god',2,2,'3.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Blusher',20,'veruy god',2,2,'4.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Kushin',20,'veruy god',2,2,'5.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Tesline',20,'veruy god',2,2,'6.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Messi',20,'veruy god',2,2,'7.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Masline',20,'veruy god',2,2,'8.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Loco',20,'veruy god',2,2,'9.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Pilsner',20,'veruy god',2,2,'10.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('carL',20,'veruy god',2,2,'1.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Telsner',20,'veruy god',2,2,'1.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Tisn',20,'veruy god',2,2,'2.jpg');



insert into products(name,price,description,brand_id,qty,img_name)values ('Lip stick',20,'veruy god',2,1,'lipstick.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Eye Liner',20,'veruy god',2,1,'flat.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Foundation',20,'veruy god',2,1,'1.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Greener',20,'veruy god',2,1,'2.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Whitener',20,'veruy god',2,3,'3.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Blusher',20,'veruy god',2,3,'4.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Kushin',20,'veruy god',2,3,'5.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Tesline',20,'veruy god',2,3,'6.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Messi',20,'veruy god',2,4,'7.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Masline',20,'veruy god',2,3,'8.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Loco',20,'veruy god',2,2,'9.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Pilsner',20,'veruy god',2,4,'10.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('carL',20,'veruy god',2,4,'1.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Telsner',20,'veruy god',2,4,'1.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Tisn',20,'veruy god',2,2,'5.jpg');





insert into products(name,price,description,brand_id,qty,img_name)values ('Lip stick',20,'veruy god',2,10,'lipstick.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Eye Liner',20,'veruy god',2,0,'flat.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Foundation',20,'veruy god',2,0,'1.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Greener',20,'veruy god',2,0,'2.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Whitener',20,'veruy god',2,0,'3.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Blusher',20,'veruy god',2,0,'4.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Kushin',20,'veruy god',2,0,'5.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Tesline',20,'veruy god',2,0,'6.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Messi',20,'veruy god',2,0,'7.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Masline',20,'veruy god',2,0,'8.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Loco',20,'veruy god',2,0,'9.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Pilsner',20,'veruy god',0,4,'10.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('carL',20,'veruy god',2,0,'1.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Telsner',20,'veruy god',2,4,'1.jpg');
insert into products(name,price,description,brand_id,qty,img_name)values('Tisn',20,'veruy god',2,2,'5.jpg');
