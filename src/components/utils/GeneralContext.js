import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a Context for managing login and cart-related state
const LoginContext = createContext();

// Custom hook to easily access the LoginContext
export const useLogin = () => useContext(LoginContext);

// Provider component that wraps around parts of your app that need access to the context
export const LoginProvider = ({ children }) => {

  // State to manage items in the user's cart
  // Initializes from localStorage if available, otherwise starts with an empty array
  const [cartItems, setCartItems] = useState(() => {    
    const storeCartItems = localStorage.getItem('cartItems');
    return storeCartItems ? JSON.parse(storeCartItems) : [];
  });

  // State to manage the user's role (e.g., admin, user)
  // Initializes from localStorage if available, otherwise starts with an empty string
  const [role, setRole] = useState(() => {
    return localStorage.getItem('role') || '';
  });

  // State to manage the user's ID
  // Initializes from localStorage if available, otherwise starts with an empty string
  const [id, setId] = useState(() => {
    return localStorage.getItem('id') || '';
  });

  // State to track if the user is logged in
  // Initializes from localStorage, defaulting to false if not found
  const [isLoggedIn, setIsLoggedIn] = useState(() => {  
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  // State to manage art items in the user's cart
  // Initializes from localStorage if available, otherwise starts with an empty array
  const [cartArts, setCartArts] = useState(() => {      
    const storedCartArts = localStorage.getItem('cartArts');
    return storedCartArts ? JSON.parse(storedCartArts) : [];
  });

  // Effect to synchronize state changes with localStorage
  // Runs whenever isLoggedIn, userType, role, or id changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('role', role);
    localStorage.setItem('id', id);
  }, [isLoggedIn, role, id]);

  // Function to add an item ID to the cartItems array
  const addCartItems = (id) => {
    const updatedCartItems = [...cartItems, id];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Function to handle user login
  const login = () => {
    setIsLoggedIn(true);
  };
  
  // Function to handle user logout
  const logout = () => {
    setIsLoggedIn(false);
  };

  // Function to add an art object to the cartArts array
  const addArtToCart = (art) => {
    const newCartArts = [...cartArts, art];
    setCartArts(newCartArts);
    localStorage.setItem('cartArts', JSON.stringify(newCartArts));
  };

  // Function to clear all art items from the cartArts array
  const emptyCart = () => {
    setCartArts([]);
    localStorage.removeItem('cartArts');
  };

  // Function to clear all item IDs from the cartItems array
  const emptyIdCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  // Function to remove a specific art item from cartArts by its ID
  const removeArtFromCart = (artId) => {
    const updatedCartArts = cartArts.filter((art) => art.id !== artId);
    setCartArts(updatedCartArts);
    localStorage.setItem('cartArts', JSON.stringify(updatedCartArts));
  };

  // Function to set the user's role to 'admin'
  const roleAdmin = () => {
    setRole('admin');
  };
  
  // Function to set the user's role to 'user'
  const roleUser = () => {
    setRole('user');
  };
  
  // Function to remove the user's role (set to empty string)
  const removeRole = () => {
    setRole('');
  };

  // Function to set the user's ID
  const addId = (id) => {
    setId(id);
  };

  // Function to remove the user's ID (set to empty string)
  const removeId = () => {
    setId('');
  };

  return (
    // Provide the context values to all child components
    <LoginContext.Provider value={{ 
      isLoggedIn,      // Boolean indicating if the user is logged in
      login,           // Function to log in the user
      logout,          // Function to log out the user

      // userType,        // String indicating the type of user
      // typeUser,        // Function to set userType to "user"
      // typeArtist,      // Function to set userType to "artist"
      // typeEmpty,       // Function to reset userType to empty

      cartArts,        // Array of art objects in the cart
      removeArtFromCart, // Function to remove a specific art from cartArts
      addArtToCart,    // Function to add an art object to cartArts
      emptyCart,       // Function to clear all arts from cartArts

      cartItems,       // Array of item IDs in the cart
      addCartItems,    // Function to add an item ID to cartItems
      emptyIdCart,     // Function to clear all item IDs from cartItems

      role,            // String indicating the user's role
      roleAdmin,       // Function to set role to 'admin'
      roleUser,        // Function to set role to 'user'
      removeRole,      // Function to remove the user's role

      id,              // String indicating the user's ID
      addId,           // Function to set the user's ID
      removeId         // Function to remove the user's ID
    }}>
      {children} {/* Render child components that have access to the context */}
    </LoginContext.Provider>
  );
};
