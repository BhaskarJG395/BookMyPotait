import React, { useState } from 'react';
import { useLogin } from '../utils/GeneralContext';
import { NavLink } from 'react-router-dom';
import AddressService from '../../Services/AddressService';
import '../../css/order.css'; // Add CSS for styling

export default function Orders() {
  const { cartArts, removeArtFromCart, emptyCart } = useLogin();
  const [counts, setCounts] = useState(new Array(cartArts.length).fill(1));

  // Address form states
  const [fullAddress, setFullAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');

  const itemPrices = cartArts.map((item) => item.price);

  // Update cart item quantity
  const increase = (index) => setCounts((prev) => {
    const newCounts = [...prev];
    newCounts[index]++;
    return newCounts;
  });

  const decrease = (index) => setCounts((prev) => {
    const newCounts = [...prev];
    if (newCounts[index] > 1) newCounts[index]--;
    return newCounts;
  });

  // Remove item from cart
  const handleDelete = (index) => {
    const artId = cartArts[index].id;
    removeArtFromCart(artId);
    setCounts((prev) => prev.filter((_, i) => i !== index));
  };

  // Calculate price
  const getPrice = (index) => counts[index] * itemPrices[index];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city || !country || !fullAddress || !pincode) {
      alert("Please fill out the address form.");
      return;
    }

    const address = { fullAddress, landmark, city, country, pincode };
    try {
      await AddressService.addAddress(6, address); // Assuming userId is 6
      alert("Address added successfully!");
    } catch (error) {
      console.error("Error adding address:", error);
      alert("Failed to add address.");
    }
  };

  const handleCheckout = () => {
    if (!city || !country || !fullAddress || !pincode) {
      alert("Please complete the delivery form before checkout.");
      return;
    }
    alert("Order placed successfully!");
    emptyCart();
  };

  const calculateTotalPrice = () => {
    return counts.reduce((total, count, index) => total + count * itemPrices[index], 0);
  };

  return (
    <div className="bg-orders orders-out-container">
        <h5>//______Here there will be a component to show all addresses______//</h5>
      <div className="orders-in-container">
        {/* <h1 className="text-center">Your Orders</h1> */}

        {/* Address form */}
        <div className="container col-12">
          <h1><strong>Add Delivery Address Below or select from above</strong></h1>
          <form className="address-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="city" className="form-label text-dark">City</label>
              <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label text-dark">Country</label>
              <input type="text" className="form-control" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="fullAddress" className="form-label text-dark">Full Address</label>
              <input type="text" className="form-control" id="fullAddress" value={fullAddress} onChange={(e) => setFullAddress(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="landmark" className="form-label text-dark">Landmark</label>
              <input type="text" className="form-control" id="landmark" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="pincode" className="form-label text-dark">Pincode</label>
              <input type="text" className="form-control" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
          <NavLink to="/cart" className="btn btn-dark mt-3">Back to cart</NavLink>
        </div>

        {/* Cart Items */}
        {cartArts.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <h2>Cart Items</h2>
            {cartArts.map((p, index) => (
              <div className="row p-3" key={p.id}>
                <div className="col-lg-3">
                  <strong>{p.artName}</strong>
                </div>
                <div className="col-lg-3">
                  <div className="row">
                    <button type="button" className="btn btn-secondary col" onClick={() => decrease(index)}>-</button>
                    <div className="col">quantity: {counts[index]}</div>
                    <button type="button" className="btn btn-secondary col" onClick={() => increase(index)}>+</button>
                  </div>
                </div>
                <div className="col-lg-3">
                  <button type="button" className="btn btn-danger" onClick={() => handleDelete(index)}>Remove</button>
                </div>
                <div className="col-lg-3">{getPrice(index)}</div>
              </div>
            ))}
            <div className="row">
              <div className="col-lg-3"><strong>Total price</strong></div>
              <div className="col-lg-6"></div>
              <div className="col-lg-3">{calculateTotalPrice()}</div>
            </div>
            <button type="button" className="btn btn-success p-3" onClick={handleCheckout}>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}
