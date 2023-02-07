INSERT INTO categories (category_name)
VALUES
  ('Plushies'),
  ('Furnitures'),
  ('Food');

INSERT INTO merchants (merchant_name, admin, blacklist, email, password)
VALUES
  ('Merchant 1', 1, 0, 'merchant1@email.com', 'password1'),
  ('Merchant 2', 0, 0, 'merchant2@email.com', 'password2'),
  ('Merchant 3', 0, 1, 'merchant3@email.com', 'password3');

INSERT INTO clients (full_name, country_code, address, email, password)
VALUES
  ('John Doe', 'USA', '123 Main St', 'johndoe@email.com', 'password1'),
  ('Jane Doe', 'CAN', '456 Main St', 'janedoe@email.com', 'password2'),
  ('Jim Smith', 'GBR', '789 Main St', 'jimsmith@email.com', 'password3');

INSERT INTO products (seller_id, product_name, price, picture, category_id)
VALUES
  (1, 'Fortnite Burger', 10.99, 'product1.jpg', 1),
  (2, 'Blahaj', 12.99, 'product2.jpg', 2),
  (3, 'Hampter', 14.99, 'product3.jpg', 3);

INSERT INTO orders (buyer_id, product_id)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 1),
  (5, 4),
  (5, 3),
  (6, 5);

  INSERT INTO categories (category_name)
VALUES
  ('Category 4'),
  ('Category 5'),
  ('Category 6');

INSERT INTO merchants (merchant_name, admin, blacklist, email, password)
VALUES
  ('Merchant 4', 0, 0, 'merchant4@email.com', 'password4'),
  ('Merchant 5', 1, 0, 'merchant5@email.com', 'password5'),
  ('Merchant 6', 0, 1, 'merchant6@email.com', 'password6');

INSERT INTO clients (full_name, country_code, address, email, password)
VALUES
  ('John Smith', 'AUS', '246 Main St', 'johnsmith@email.com', 'password4'),
  ('Jane Smith', 'FRA', '369 Main St', 'janesmith@email.com', 'password5'),
  ('Jim Doe', 'DEU', '159 Main St', 'jimdoe@email.com', 'password6');

INSERT INTO products (seller_id, product_name, price, picture, category_id)
VALUES
  (4, 'Product 4', 20.99, 'product4.jpg', 4),
  (5, 'Product 5', 22.99, 'product5.jpg', 5),
  (6, 'Product 6', 24.99, 'product6.jpg', 6);

