import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './Components/Layout/Footer/Footer';
import { About } from './Components/Pages/About';
import Contact from './Components/Pages/Contact/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<h1>Home</h1>}></Route>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
