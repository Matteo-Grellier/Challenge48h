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
  (3, 3);
