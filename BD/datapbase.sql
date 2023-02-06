CREATE DATABASE marketplace;

USE marketplace;

CREATE TABLE merchants (
  id INT PRIMARY KEY AUTO_INCREMENT,
  merchant_name VARCHAR(255),
  admin BOOLEAN,
  blacklist BOOLEAN
);

CREATE TABLE clients (
  id INT PRIMARY KEY AUTO_INCREMENT,
  full_name VARCHAR(255),
  country_code INT,
  address VARCHAR(255)
);

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  seller_id INT,
  product_name VARCHAR(255),
  price FLOAT,
  picture VARCHAR(255),
  FOREIGN KEY (seller_id) REFERENCES merchants(id)
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  buyer_id INT,
  product_id INT,
  FOREIGN KEY (buyer_id) REFERENCES clients(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  category_name VARCHAR(255)
);

ALTER TABLE products
ADD COLUMN category_id INT,
ADD FOREIGN KEY (category_id) REFERENCES categories(id);

ALTER TABLE clients
CHANGE country_code country_code VARCHAR(3);

ALTER TABLE clients
ADD COLUMN email VARCHAR(255),
ADD COLUMN password VARCHAR(255);

ALTER TABLE merchants
ADD COLUMN email VARCHAR(255),
ADD COLUMN password VARCHAR(255);