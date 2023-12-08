import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';



const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 1000,
    margin: 0, // Ensure the navigation stays above other elements if needed
  },
};


const BottommNavigation = () => {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <>
      <div className='buttonnavigation'>
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Add to Cart"
            value="cart"

            icon={<ShoppingCartIcon />}
            sx={{
              '&.Mui-selected': {
                color: 'white',
              },
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'red',
              }
            }}
          />
          <BottomNavigationAction
            label="Buy Now"
            value="buy"
            icon={<PaymentIcon />}
            sx={{
              '&.Mui-selected': {
                color: 'white',
              },
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'skyblue',
              }
            }}
          />
        </BottomNavigation>
      </div>
      <div className="homeFooter mt-5">
        <BottomNavigation sx={styles.root} value={value} onChange={handleChange}>
          <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Cart" value="cart" icon={<ShoppingCartIcon />} />
          <BottomNavigationAction label="Account" value="account" icon={<AccountCircleIcon />} />
        </BottomNavigation>
      </div>

    </>
  )
}

export default BottommNavigation
