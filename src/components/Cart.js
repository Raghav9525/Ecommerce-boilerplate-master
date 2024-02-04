import React, { useState, useEffect } from 'react';
import { FaIndianRupeeSign } from 'react-icons/fa6';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart data from local storage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.id} className="row mt-4 align-items-center">
            <div className="col-sm-6">
              <img className="img-fluid" src={item.image} alt={item.title} style={{ height: "200px",width: "200px" }} />
            </div>
            <div className="col-sm-6">
              <div className="card mt-4 p-2" style={{ border: "none" }}>
                <h4>{item.title}</h4>
                <h4 className="text-primary ps-2 pt-2 pb-4">
                  <FaIndianRupeeSign />{item.amount}
                </h4>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
