import React, { useEffect, useState } from "react";
import "../css/AllArts.css";
import "../css/card-body.css";
import { Link } from "react-router-dom";
import ArtService from "../Services/ArtService";
import { useLogin } from './utils/GeneralContext';

function ArtArts() {
  const { addArtToCart, removeArtFromCart, isLoggedIn, cartArts } = useLogin();
  const [Art, setArt] = useState([]);
  const [maxItems, setMaxItems] = useState(4);
  const [imageUrls, setImageUrls] = useState({}); // For storing image URLs

  // Fetch art data
  useEffect(() => {
    const fetchData = () => {
      ArtService.getAllArt()
        .then((result) => {
          setArt([...result.data]);
          result.data.forEach((art) => fetchImage(art.id)); // Fetch images for all art items
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  // Fetch image data
  const fetchImage = (id) => {
    ArtService.getArtById(id).then((response) => {
      const url = URL.createObjectURL(response.data);
      setImageUrls(prev => ({ ...prev, [id]: url }));
    }).catch((err) => {
      console.log(err);
    });
  };

  // Handle load more items
  const handleLoadMore = () => {
    setMaxItems(maxItems + 4);
  };

  // Add or remove art from cart
  const handleAddToCart = (art) => {
    if (cartArts.some(a => a.id === art.id)) {
      removeArtFromCart(art.id);
    } else {
      addArtToCart(art);
    }
  };

  // Check if art is in the cart
  const isInCart = (artId) => {
    return cartArts.some(a => a.id === artId);
  };

  // Open image in a new tab
  const openImageInNewTab = (id) => {
    const url = imageUrls[id] || "./placeholder-image-url";
    window.open(url, '_blank');
  };

  // Render art rows with images
  const renderArtRows = () => {
    const rows = [];
    for (let i = 0; i < maxItems; i += 4) {
      rows.push(
        <div className="row row-cols-1 row-cols-md-3" key={i}>
          {Art.slice(i, i + 4).map((p) => (
            <div className="card col" key={p.id}>
              <div className="card-body">
                <img
                  className="img"
                  src={imageUrls[p.id] || "./placeholder-image-url"} // Display placeholder if image not loaded
                  alt={p.artName}
                />
                <h4 className="card-title">Art name: {p.artName}</h4>
                <p className="card-text">Price: ₹{p.price}</p>
                <p className="card-text">{p.description}</p>
                {isLoggedIn ? (
                  isInCart(p.id) ? (
                    <Link to="/cart" className="btn btn-primary">
                      Go to Cart
                    </Link>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(p)}
                    >
                      Add to Cart
                    </button>
                  )
                ) : (
                  <p className="text-danger">To buy this art, login first</p>
                )}
                <button
                  className="btn btn-info mt-2"
                  onClick={() => openImageInNewTab(p.id)}
                >
                  View Full Image
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <>
      <div className="container">
        <br />
        <div className="col-lg-12 md-12">
          <h2>Find your best Art here</h2>
        </div>
        <br />
        {renderArtRows()}
        {Art.length > maxItems && (
          <div className="row">
            <div className="col">
              <button className="btn btn-primary" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ArtArts;
