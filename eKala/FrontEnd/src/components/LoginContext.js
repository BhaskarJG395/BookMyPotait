import React, { createContext, useState, useEffect, useContext } from 'react';

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Read isLoggedIn state from local storage, default to false if not found
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  
  const [userType, setUserType] = useState(() => {
    // Read userType state from local storage, default to empty string if not found
    return localStorage.getItem('userType') || '';
  });

  useEffect(() => {
    // Update local storage whenever isLoggedIn or userType changes
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('userType', userType);
  }, [isLoggedIn, userType]);

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

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout, userType, typeUser, typeArtist, typeEmpty }}>
      {children}
    </LoginContext.Provider>
  );
};
