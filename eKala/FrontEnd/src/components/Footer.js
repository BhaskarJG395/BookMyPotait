import React from 'react';
import "../css/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function Footer() {
    return (
        <div className="px-4 py-4 cust-bg-col-6">
            <div className='container'>
                <div className='row'>
                    <div className='container col-lg-6 '>
                        <div>
                            <h4 className='text-white'>About</h4>
                        </div>
                        <div >
                            <p className=' text-xs textCol-1'>Our online platform serves as a vibrant hub for both seasoned creators and emerging talents, showcasing a diverse array of artworks spanning various styles, mediums, and inspirations.
</p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div>
                            <h4 className='text-white'>Categories</h4>
                        </div>
                        <div className='textCol-1'>
                            <p>Traditional Portraits<br/>Contemporary Portraitss<br/>Self-Portraits</p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                    <div>
                            <h4 className='text-white'>Quick Links</h4>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <div className='col-lg-9'>
                        <p className='textCol-1'>Copyright &copy; 2024 All Rights Reserved by eKala</p>
                    </div>
                    <div className='col-lg-3 '>
                        {/* lower right    faLinkedin, faYoutube, faInstagra , faEnvelope, faPhone*/}
                        <NavLink><FontAwesomeIcon className='text-white px-2' icon={faFacebook} /></NavLink>
                        <NavLink><FontAwesomeIcon className='text-white px-2' icon={faLinkedin} /></NavLink>
                        <NavLink><FontAwesomeIcon className='text-white px-2' icon={faYoutube} /></NavLink>
                        <NavLink><FontAwesomeIcon className='text-white px-2' icon={ faInstagram} /></NavLink>
                        <NavLink><FontAwesomeIcon className='text-white px-2' icon={faEnvelope} /></NavLink>
                        <NavLink><FontAwesomeIcon className='text-white px-2' icon={faPhone} /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
