import React from 'react';
import { useLogin } from './LoginContext';
import '../css/order.css'; // Add CSS file if needed for styling

export default function Orders() {
  const { cartArts, removeArtFromCart, emptyCart } = useLogin();
  const [counts, setCounts] = React.useState(new Array(cartArts.length).fill(1));
  
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

  const handleCheckout = () => {
    // Handle the checkout process
    alert("Order placed successfully!");
    emptyCart();
  };

  const calculateTotalPrice = () => {
    return counts.reduce((total, count, index) => total + count * itemPrices[index], 0);
  };

  return (
    <div className="bg-orders orders-out-container">
      <div className="orders-in-container">
        <h1 className="text-center">Your Orders</h1>
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
                    onClick={handleCheckout}
                  >
                    Checkout
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
