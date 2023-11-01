import './App.css';
import { Route, Routes } from 'react-router-dom';
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
        <Route path='/home' element={<Home />} />

       
      </Routes>
    </>
  );
}

export default App;
