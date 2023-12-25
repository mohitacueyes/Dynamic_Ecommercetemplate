import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
};

const BottommNavigation = () => {
  const [value, setValue] = useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <>
      <div className="homeFooter mt-5">
        <BottomNavigation sx={styles.root} value={value} onChange={handleChange}>
          <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} component={Link} to="*" />
          <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Cart" value="cart" icon={<ShoppingCartIcon />} component={Link} to="/shopcart" />
          <BottomNavigationAction
        label="Account"
        value="account"
        icon={<AccountCircleIcon />}
        component={Link}
        to="/profile"
      />
    </BottomNavigation>
      </div>
    </>
  )
}

export default BottommNavigation
