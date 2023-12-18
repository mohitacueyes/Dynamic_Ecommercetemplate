import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import PaymentIcon from '@mui/icons-material/Payment';



const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,

   },

};

const ProductBottomNavigation = () => {
  const [value, setValue] = React.useState('cart');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <>
     <div className="homeFooter mt-5">
        <BottomNavigation sx={styles.root} value={value} onChange={handleChange} showLabels={true}>
          <BottomNavigationAction
            label="Add to Cart"
            value="cart"
            icon={<ShoppingCartIcon />}
            component={Link}
            to="/shopcart"
            sx={{
              "&.Mui-selected": {
                color: "white",
              },
              backgroundColor: "red",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
          />
          <BottomNavigationAction
            label="Buy Now"
            value="buy"
            icon={<PaymentIcon />}
            component={Link}
            to="/checkout"
            sx={{
              '&.Mui-selected': {
                color: "white",
              },
              backgroundColor: "skyblue",
              '&:hover': {
                backgroundColor: "skyblue",
              },
            }}
          />
        </BottomNavigation>
      </div>
    </>
  )
}

export default ProductBottomNavigation
