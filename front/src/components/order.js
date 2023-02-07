import React from 'react';

const Order = ({ order }) => {
  const { client, products, totalPrice, deliveryAddress } = order;
  return (
    <div className="order-card">
      <h2>Order Recap</h2>
      <p>Client: {client}</p>
      <h3>Products:</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <p>Total Price: {totalPrice}</p>
      <p>Delivery Address: {deliveryAddress}</p>
    </div>
  );
};

export default Order;