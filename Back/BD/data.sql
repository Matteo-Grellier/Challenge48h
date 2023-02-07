INSERT INTO categories (category_name)
VALUES
  ('Plushies'),
  ('Furnitures'),
  ('Food');

INSERT INTO merchants (merchant_name, admin, blacklist, email, password)
VALUES
  ('Merchant 1', 1, 0, 'merchant1@email.com', 'password1'),
  ('Merchant 2', 0, 0, 'merchant2@email.com', 'password2'),
  ('Merchant 3', 0, 1, 'merchant3@email.com', 'password3'),
  ('Merchant 4', 0, 0, 'merchant4@email.com', 'password4'),
  ('Merchant 5', 1, 0, 'merchant5@email.com', 'password5'),
  ('Merchant 6', 0, 1, 'merchant6@email.com', 'password6');

INSERT INTO clients (full_name, country_code, address, email, password)
VALUES
  ('John Doe', 'USA', '123 Main St', 'johndoe@email.com', 'password1'),
  ('Jane Doe', 'CAN', '456 Main St', 'janedoe@email.com', 'password2'),
  ('Jim Smith', 'GBR', '789 Main St', 'jimsmith@email.com', 'password3'),
  ('John Smith', 'AUS', '246 Main St', 'johnsmith@email.com', 'password4'),
  ('Jane Smith', 'FRA', '369 Main St', 'janesmith@email.com', 'password5'),
  ('Jim Doe', 'DEU', '159 Main St', 'jimdoe@email.com', 'password6');

INSERT INTO products (seller_id, product_name, price, picture, category_id)
VALUES
  (1, 'Fortnite Burger', 10.99, 'product1.jpg', 3, 43),
  (2, 'Blahaj', 12.99, 'product2.jpg', 1, 25),
  (3, 'Hampter', 14.99, 'product3.jpg', 1, 2);

INSERT INTO orders (buyer_id, product_id, order_date, order_status, quantity)
VALUES
  (1, 1, CURRENT_DATE, 'waiting', 2),
  (2, 2, CURRENT_DATE, 'in delivery', 1),
  (3, 3, CURRENT_DATE, 'delivered', 3),
  (1, 4, CURRENT_DATE, 'waiting', 1),
  (2, 5, CURRENT_DATE, 'in delivery', 2),
  (3, 6, CURRENT_DATE, 'delivered', 1);

