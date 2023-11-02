import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './Components/Layout/Footer/Footer';
import { About } from './Components/Pages/About';
import Contact from './Components/Pages/Contact/Contact';
import { Topbar } from './Components/Layout/Topbar/Topbar';
import { Searchbar } from './Components/Layout/Searchbar/Searchbar';
import { Menubar } from './Components/Layout/Menubar/Menubar';
import { Home } from './Components/Pages/Home/Home';
import { ProductDeatails, ProductDetails } from './Components/Pages/ProductDetails';
import ProductListsideBar from './Components/Pages/ProductListsideBar/ProductListsideBar';
import Login from './Components/Pages/Login/Login';
import ForgotPassword from './Components/Pages/ForgotPassword/ForgotPassword';
import Register from './Components/Pages/Register/Register';
import ResetPassword from './Components/Pages/Password/ResetPassword';
import Wishlist from './Components/Pages/Wishlist/Wishlist';

function App() {
  return (
    <>
    <Topbar/>
    <Searchbar/>
    <Menubar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/productdetails' element={<ProductDetails />}/>  
        <Route path='/productlistsideBar' element={<ProductListsideBar/>}/>  
        <Route path='/login' element={<Login/>}/>  
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>  
        <Route path='/register' element={<Register/>}/>  
        <Route path='/resetpassword' element={<ResetPassword/>}/>  
        <Route path='/wishlist' element={<Wishlist/>}/>  
        </Routes>
      <Footer />
    </>
  );
}

export default App;
