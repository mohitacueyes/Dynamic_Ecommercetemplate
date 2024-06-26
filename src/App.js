import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './Components/Layout/Footer/Footer';
import { About } from './Components/Pages/About';
import Contact from './Components/Pages/Contact/Contact';
import { Topbar } from './Components/Layout/Topbar/Topbar';
import { Searchbar } from './Components/Layout/Searchbar/Searchbar';
import { Menubar } from './Components/Layout/Menubar/Menubar';
import { Home } from './Components/Pages/Home/Home';
import { ProductDetails } from './Components/Pages/ProductDetails';
import ProductListsideBar from './Components/Pages/ProductListsideBar/ProductListsideBar';
import Login from './Components/Pages/Login/Login';
import ForgotPassword from './Components/Pages/ForgotPassword/ForgotPassword';
import Register from './Components/Pages/Register/Register';
import ResetPassword from './Components/Pages/Password/ResetPassword';
import Wishlist from './Components/Pages/Wishlist/Wishlist';
import { Profile } from './Components/Pages/Profile';
import { Order } from './Components/Pages/Profile/Order';
import { AddAddres } from './Components/Pages/Profile/Address';
import { PaymentDetail } from './Components/Pages/Profile/PaymentDetail';
import { AccountDetails } from './Components/Pages/Profile/AccountDetails';
import Logout from './Components/Pages/Logout/Logout';
import Shopcart from './Components/Pages/Shopcart/Shopcart';
import Address from './Components/Pages/Profile/Address/Address';
import Editaddres from './Components/Pages/Profile/Address/Editaddres';
import Checkoutdetails from './Components/Pages/Checkout/Details/Checkoutdetails';
import Checkoutshipping from './Components/Pages/Checkout/Shipping/Checkoutshipping';
import Checkoutpayment from './Components/Pages/Checkout/Payment/Checkoutpayment';
import Checkoutcomplete from './Components/Pages/Checkout/Complete/Checkoutcomplete';
import TermsConditions from './Components/Pages/TermsConditions/TermsConditions';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy/PrivacyPolicy';
import 'react-toastify/dist/ReactToastify.css';
import PopUp from './Components/Pages/Home/Pop-Up/PopUp';
import { useState, useEffect } from 'react';
import { BottombarSearch } from './Components/Pages/BottombarSearch';

function App() {
  const location = useLocation();
  const [isPopupOpen, setPopupOpen] = useState(true);


  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <>
      <Topbar />
      <Searchbar />
      <Menubar />
      {isPopupOpen && <PopUp onClose={closePopup} />}
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/productdetails/:id/:sulg' element={<ProductDetails />} />
        <Route path='/productlistsideBar/:id' element={<ProductListsideBar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/order' element={<Order />} />
        <Route path='/address' element={<Address />} />
        <Route path='/paymentdetail' element={<PaymentDetail />} />
        <Route path='/accountdetails' element={<AccountDetails />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/shopcart' element={<Shopcart />} />
        <Route path='/addaddress' element={<AddAddres />} />
        <Route path='/editaddress/:addresid' element={<Editaddres />} />
        <Route path='/details' element={<Checkoutdetails />} />
        <Route path='/shoppingcart' element={<Checkoutshipping />} />
        <Route path='/payment' element={<Checkoutpayment />} />
        <Route path='/complete' element={<Checkoutcomplete />} />
        <Route path='/terms-conditions' element={<TermsConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/search' element={<BottombarSearch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
