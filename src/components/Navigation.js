import React from 'react'
import "../css/Navigation.css";
import { NavLink } from 'react-router-dom' // Importing routing components for navigation
import { useLogin } from './utils/GeneralContext'; // Importing the login context to access user state and functions
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesome for icons
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Importing a specific icon for the shopping cart

export default function NavigationBar() {
    // Destructuring context values for login status, user type, and logout functionality
    const { isLoggedIn, logout, userType, emptyCart, emptyIdCart, role, removeRole } = useLogin();

    const handleLogout = () => {
        // Handle logout logic when the user clicks the logout button
        let result = window.confirm("Are you sure you want to log out?"); // Confirm the logout action
        if (result) {
            logout(); // Call the logout function to log the user out
            emptyCart(); // Clear the user's cart after logging out
            emptyIdCart(); // Clear the cart items IDs
            removeRole(); // Remove the user's role
        }
    };

    return (
        <div className='nav-outer'>
            {/* Navigation bar starts here */}
            <nav className="navbar navbar-expand-sm bg-body-tertiary sticky-top">
                <div className="container-fluid">
                    {/* Brand logo as a NavLink to the homepage */}
                    <NavLink className="logo" to="/"><strong>eKala</strong></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link active mx-2 text-dark nav-text" aria-current="page" to="">Home</NavLink>
                            <NavLink className="nav-link text-dark nav-text" to="/arts">Explore</NavLink>
                            <NavLink className="nav-link text-dark nav-text" to="/arts">About</NavLink>
                            {isLoggedIn ? (<NavLink className="nav-link text-dark nav-text" to="/profile">Profile</NavLink>) : (<></>)}
                            {userType == "artist" ? (<NavLink className="nav-link text-dark nav-text" to="/admin">Profile</NavLink>) : (<></>)}
                        </div>
                    </div>
                </div>

                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light mx-2" type="submit">Search</button>
                </form> */}
                <NavLink className="nav-link text-dark nav-text" to="/feedback">Feedback</NavLink>
                {isLoggedIn ? 
                    (<NavLink className="nav-link" to="/"><button onClick={handleLogout} className='btn btn-danger p-2'>Logout</button></NavLink>) : 
                    (<>
                        <NavLink className="nav-link" to="/login"><button className='loginbtn'>Log in</button></NavLink>
                        <NavLink className="nav-link" to="/register"><button className='signupbtn'>Sign up</button></NavLink>
                    </>)
                }
                {role == "admin" ? (<></>) : (<NavLink className="nav-link text-dark" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></NavLink>)}
            </nav>
        </div>
    )
}
