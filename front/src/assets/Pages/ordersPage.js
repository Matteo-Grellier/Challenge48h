import React, { useState, useEffect } from 'react';
import "../../assets/order.css"
const OrdersPage = () => {
  // const [orders, setOrders] = useState([]);
  const totalPrice = "4"
  const deliveryAddress = "exempleOfAdress"
  const client = "you"
  const product = "on a un produit ici"
  return (
    <div className="card">
      <img src="" style={{width:"30%"}}></img>
      <div className="container">
        <h1 >Order Recap</h1>
        <p>Client: {client}</p>
        <h5>Products:{product}</h5>
        {/* <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul> */}
        <p>Total Price: {totalPrice}</p>
        <br></br>
        <p>Delivery Address: {deliveryAddress}</p>
      </div>
      {/* {orders.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))} */}
    </div>
  );
};
    
export default OrdersPage;