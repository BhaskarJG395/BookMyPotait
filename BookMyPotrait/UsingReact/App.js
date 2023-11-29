import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/Navigation';
import HeadingAbout from './components/HeadingAbout';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Login from './components/Login';
import Cart from './components/Cart';
import Contact from './components/Contact';

function App(){
  return (
    <div className='cust-bg-col-1'>
      <NavigationBar></NavigationBar>
      <div className='container min-h'>
        <Routes>
          <Route path="/home" element={<HeadingAbout></HeadingAbout>}></Route>
          <Route path="/feedback" element={<Feedback></Feedback>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
