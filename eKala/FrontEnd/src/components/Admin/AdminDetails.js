import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import user from '../icons/team.png'
 import pizza from '../icons/artlogo.png'
import payment from '../icons/wallet.png'
import delivery from '../icons/deliveryBoy.jpg'
import unknown from '../../image/unknown_user.jpg'
function AdminDetails() {
  return (
    <>    
        <Link to='/admin' className='title'></Link>
        <div className="container">
        {/* 
        <p>Below you can go through </p>
        <p>Role : Artist</p>
        <p>specialization : self-portrait</p> */}
          {/* first row */}
        <table cellPadding={15}>
          <tr>
            <td rowSpan={3}><img src={unknown} height="150" width="150" alt='profile photo'></img></td>
            <td><strong>Name </strong></td>
            <td>Bhaskar Jyoti Gogoi </td>
          </tr>
          <tr>
            <td> <strong>Role</strong></td>
            <td>Artist </td>
          </tr>
          <tr>
            <td><strong>specialization</strong> </td>
            <td>self - portrait</td>
          </tr>
          <tr>
            <td></td>
            <td><strong>About </strong></td>
            <td>This section is artist about section </td>
          </tr>
        </table>
          <div className="row mt-3">

            {/* first col */}
            {/* <div className="col-md-4 mt-2">
              <div className="card">
                <div className="card-body text-center">
                  <div>
                    <img style={{"maxWidth":"150px"}} src={user} className='img-fluid' alt="not found" />
                  </div>
                  <NavLink to='/users' ><h2>List of Users</h2></NavLink>  
                </div>
              </div>
            </div> */}
            {/* second col */}

            <div className="col-md-4 mt-2">
            <div className="card">
                <div className="card-body text-center">
                <div className="container">
                  <img src={pizza} style={{"maxWidth":"150px"}}  className='img-fluid' alt="not found" />
                  </div>
                  <NavLink to='/artList' ><h2>List of Arts</h2></NavLink>  
                </div>
              </div>
            </div>

            {/* third col */}
            <div className="col-md-4 mt-2">
              <div className="card">
                <div className="card-body text-center">
                  <div className="container">
                    <img src={payment} style={{"maxWidth":"150px"}} className='img-fluid' alt="not found" />
                  </div>
                  <NavLink to='/payments' ><h2>List of Payments</h2></NavLink>  
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mt-3">
              <div className="card">
                <div className="card-body text-center">
                  <div className="container">
                    <img src={delivery} style={{"maxWidth":"150px"}} className='img-fluid' alt="not found" />
                  </div>
                  <NavLink to='/delivery' ><h2>List of Deliveries</h2></NavLink>  
                </div>
              </div>
            </div>
          </div> 
        </div>
    </>
  )
}

export default AdminDetails;