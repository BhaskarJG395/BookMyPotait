import React, { createContext, useState, useEffect, useContext } from 'react';

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {    //----------------------------cartItems
    const storeCartItems = localStorage.getItem('cartItems');
    return storeCartItems ? JSON.parse(storeCartItems) : [];
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {  //----------------------------isLoggedIn
    // Read isLoggedIn state from local storage, default to false if not found
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  
  const [userType, setUserType] = useState(() => {      //----------------------------userType
    // Read userType state from local storage, default to empty string if not found
    return localStorage.getItem('userType') || '';
  });
  const [cartArts, setCartArts] = useState(() => {      //----------------------------cartArts
    const storedCartArts = localStorage.getItem('cartArts');
    return storedCartArts ? JSON.parse(storedCartArts) : [];
  });

  useEffect(() => {
    // Update local storage whenever isLoggedIn or userType changes
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('userType', userType);
  }, [isLoggedIn, userType]);



  const addCartItems = (id) => {
    const updatedCartItems = [...cartItems, id];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  



  const login = () => {
    // Logic to handle login
    setIsLoggedIn(true);
  };
  
  const logout = () => {
    // Logic to handle logout
    setIsLoggedIn(false);
  };

  const typeUser = () => {
    setUserType("user");
  };

  const typeArtist = () => {
    setUserType("artist");
  };

  const typeEmpty = () => {
    setUserType("");
  };

  const addArtToCart = (art) => {
    const newCartArts = [...cartArts, art];
    setCartArts(newCartArts);
    localStorage.setItem('cartArts', JSON.stringify(newCartArts));
  };

  const emptyCart = () => {
    setCartArts([]);
    localStorage.removeItem('cartArts');
  };
  const emptyIdCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const removeArtFromCart = (artId) => {
    const updatedCartArts = cartArts.filter((art) => art.id !== artId);
    setCartArts(updatedCartArts);
    localStorage.setItem('cartArts', JSON.stringify(updatedCartArts));
  };

  return (
    <LoginContext.Provider value={{ 
      isLoggedIn, 
      login,
      logout, 
      userType, 
      typeUser, 
      typeArtist, 
      typeEmpty,
      cartArts,
      removeArtFromCart,
      addArtToCart,
      emptyCart,
      cartItems,
      addCartItems ,
      emptyIdCart
    }}>
      {children}
    </LoginContext.Provider>
  );
};
