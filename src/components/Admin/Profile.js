import React, { useState ,useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import user from '../icons/team.png';
import art from '../icons/artlogo.png';
import payment from '../icons/wallet.png';
import delivery from '../icons/deliveryBoy.jpg';
import unknown from '../../image/unknown_user.jpg';
import { useLogin } from '../utils/GeneralContext';
import {decodeId} from '../utils/IdEncoderDecoder';
import UserService from '../../Services/UserService';

function AdminDetails() {
  const {role,id}=useLogin();
  const [user,setUser]=useState({});
  useEffect( ()=>{
    const idDecoded=decodeId(id);
    console.log(idDecoded);
    // const response = await  UserService.getUserById(id);
    // console.log(response.data);
  },[])

  return (
    <>
      <Link to='/admin' className='title'></Link>
      
      <div className="container">
        {/* Artist Information */}
        <table cellPadding={15}>
          <tbody>
            <tr>
              <td rowSpan={3}>
                <img src={unknown} height="150" width="150" alt='Profile' />
              </td>
              <td><strong>Name</strong></td>
              <td>Bhaskar Jyoti Gogoi</td>
            </tr>
            <tr>
              <td><strong>Role</strong></td>
              <td>Artist</td>
            </tr>
            <tr>
              <td><strong>Specialization</strong></td>
              <td>Self-portrait</td>
            </tr>
            <tr>
              <td></td>
              <td><strong>About</strong></td>
              <td>This section is about the artist.</td>
            </tr>
          </tbody>
        </table>

        {/* Card Sections */}
        {
          role=='user'?(<></>):(
            <div className="row mt-3">
            <Card
              imgSrc={art}
              link='/artList'
              title='List of Arts'
              alt='Arts'
            />
            <Card
              imgSrc={payment}
              link='/payments'
              title='List of Payments'
              alt='Payments'
            />
            <Card
              imgSrc={delivery}
              link='/delivery'
              title='List of Deliveries'
              alt='Deliveries'
            />
          </div>
          )
        }
       
      </div>
    </>
  );
}

function Card({ imgSrc, link, title, alt }) {
  return (
    <div className="col-md-4 mt-2">
      <div className="card">
        <div className="card-body text-center">
          <div className="container">
            <img src={imgSrc} style={{ maxWidth: '150px' }} className='img-fluid' alt={alt} />
          </div>
          <NavLink to={link}>
            <h2>{title}</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AdminDetails;
