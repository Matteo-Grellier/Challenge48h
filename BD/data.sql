INSERT INTO merchants (merchant_name, admin, blacklist)
VALUES
  ('Merchant 1', 1, 0),
  ('Merchant 2', 0, 0),
  ('Merchant 3', 0, 1);

INSERT INTO clients (full_name, country_code, address)
VALUES
  ('John Doe', 1, '123 Main St'),
  ('Jane Doe', 2, '456 Main St'),
  ('Jim Smith', 3, '789 Main St');

INSERT INTO products (seller_id, product_name, price, picture)
VALUES
  (1, 'Product 1', 10.99, 'product1.jpg'),
  (2, 'Product 2', 12.99, 'product2.jpg'),
  (3, 'Product 3', 14.99, 'product3.jpg');

INSERT INTO orders (buyer_id, product_id)
VALUES
  (1, 1),
  (2, 2),
  (3, 3);