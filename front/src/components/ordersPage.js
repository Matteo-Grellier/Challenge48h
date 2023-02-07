import React, { useState, useEffect } from 'react';
import Order from './order';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders data from the database
    fetch('https://my-api.com/orders')
      .then(response => response.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="orders-page">
      <h1>Orders</h1>
      {orders.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </div>
  );
};
    
export default OrdersPage;