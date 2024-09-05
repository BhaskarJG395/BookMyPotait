import React, { useState } from 'react';
import '../css/cart.css';
import { useLogin } from './LoginContext';
import { useNavigate } from 'react-router-dom';

export default function Cart(props) {
  const navigate=useNavigate();
  const { cartArts, removeArtFromCart, emptyCart } = useLogin();
  const [counts, setCounts] = useState(new Array(cartArts.length).fill(1));
  
  const itemPrices = cartArts.map((item) => item.price);

  const increase = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  const decrease = (index) => {
    if (counts[index] > 1) {
      const newCounts = [...counts];
      newCounts[index]--;
      setCounts(newCounts);
    }
  };

  const getPrice = (index) => counts[index] * itemPrices[index];

  const handleDelete = (index) => {
    const artId = cartArts[index].id;
    removeArtFromCart(artId);
    const newCounts = counts.filter((_, i) => i !== index);
    setCounts(newCounts);
  };

  const handleBuyNow = () => {
    // Navigate to Orders page or handle checkout
    navigate("/orders");
  };

  const calculateTotalPrice = () => {
    return counts.reduce((total, count, index) => total + count * itemPrices[index], 0);
  };

  return (
    <div className="bg-cart cart-out-container">
      <div className="cart-in-container">
        <h1 className="text-center">Your Cart</h1>
        <div className="container text-center align-items-center">
         {cartArts.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartArts.map((p, index) => (
                <div className="row p-3" key={p.id}>
                  <div className="col-lg-3">
                    <div>
                      <strong>{p.artName}</strong>  
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="row">
                      <button
                        type="button"
                        className="btn btn-secondary col"
                        onClick={() => decrease(index)}
                      >
                        <strong>-</strong>
                      </button>
                      <div className="col">quantity: {counts[index]}</div>
                      <button
                        type="button"
                        className="col btn btn-secondary"
                        onClick={() => increase(index)}
                      >
                        <strong>+</strong>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Remove item
                    </button>
                  </div>
                  <div className="col-lg-3">{getPrice(index)}</div>
                </div>
              ))}
              <div className="row">
                <div className="col-lg-3"><strong>Total price</strong></div>
                <div className="col-lg-6"></div>
                <div className="col-lg-3">{calculateTotalPrice()}</div>
              </div>
              <div className="row">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
