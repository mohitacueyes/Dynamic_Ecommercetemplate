import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './Components/Layout/Footer/Footer';
import { About } from './Components/Pages/About';
import Contact from './Components/Pages/Contact/Contact';
import { Topbar } from './Components/Layout/Topbar/Topbar';
import { Searchbar } from './Components/Layout/Searchbar/Searchbar';
import { Menubar } from './Components/Layout/Menubar/Menubar';
import { Home } from './Components/Pages/Home/Home';

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
