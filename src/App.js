// import logo from './logo.svg';
import './App.css';
// import { NavLink } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/css/bundle'
import 'swiper/swiper-bundle.css';
// import 'swiper/swiper-bundle.min.css';
import NavigationBar from './components/Navigation';
import HeadingAbout from './components/home/HeadingAbout';
import Feedback from './components/user/Feedback';
import Footer from './components/Footer';
import Cart from './components/user/Cart';
import Contact from './components/user/Contact';
import ArtGallery from './components/home/ArtGallery';
import Registration from './components/Registration';
import AllArts from './components/AllArts';
import ArtList from './components/Admin/artList';
import UploadArt from './components/Admin/UploadArt'
import Delivery from './components/Admin/Delivery';
import Payment from './components/Admin/Payments';
import Users from './components/Admin/Users';
import Login from './components/Login';
import UploadArtFile from './components/Admin/UploadArtFile'
import { LoginProvider } from './components/utils/GeneralContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import NewUser1 from './components/newUser';



import AdminDetails from './components/Admin/Profile';
import Orders from './components/user/Orders';

function App(){
  return (
    <LoginProvider>
    <div className='main-container'>
      <div>
        <NavigationBar></NavigationBar>
        <div className='min-h'>
          <Routes>
            <Route path="" element={<HeadingAbout></HeadingAbout>}></Route>
            <Route path="/feedback" element={<Feedback></Feedback>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/gallery" element={<ArtGallery></ArtGallery>}></Route>
            <Route path='/register' element={<Registration></Registration>}></Route> 
            <Route path="/arts" element={<AllArts></AllArts>}></Route>
            <Route path="/profile" element={<AdminDetails></AdminDetails>}></Route>
            <Route path="/artList" element={<ArtList></ArtList>}></Route>
            <Route path="/UploadArt" element={<UploadArt></UploadArt>}></Route>
            <Route path="/delivery" element={<Delivery></Delivery>}></Route>
            <Route path="/payments" element={<Payment></Payment>}></Route>
            <Route path="/users" element={<Users></Users>}></Route>
            <Route path="/orders" element={<Orders></Orders>}></Route>
            <Route path="/fileupload" element={<UploadArtFile></UploadArtFile>}></Route>
            {/* <Route path="/users" element={<submitForm></submitForm>}></Route> */}
            {/* <Route path='/user1' element={<NewUser1></NewUser1>} ></Route>             */}
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </div>
    </LoginProvider>
  );
}

export default App;