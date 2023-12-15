import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Wishlist() {
  const [wishlistData, setWishlistData] = useState([]);
  const user_id = localStorage.getItem("userId");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);

  useEffect(() => {
    const fetchWishlistData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API}/api/favorites-list/${user_id}`
        );
        const data = await response.json();
        setWishlistData(data.ResponseData);
      } catch (error) {
        console.error("Error fetching wishlist data:", error);
      }
    };

    fetchWishlistData();
  }, [user_id]);

  // -------ADD TO CART --------//
const addToCart = async (productId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/api/add-cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        id: userId,
        user_id: userId,
        product_id: productId,
        qty: "1",
        price: "1",
        save_for_later: "0",
      }),
      
    });
console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

 //-----DELETE favorites-----//
 const [response, setResponse] = useState(null);

 const handleDeleteClick = async (id ,productId) => {
   const apiUrl = `${process.env.REACT_APP_API}/api/favorites-remove/${id}`; 

   try {
     const response = await fetch(apiUrl, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ 
        user_id:user_id,
        product_id:productId,
        favorites:"2"

        
      
      }),
     });

     const data = await response.json();

     if (data.ResponseCode === 1) {
       setResponse(data.ResponseText);
       // Update addresses state after successful deletion
       setWishlistData(prevAddresses => prevAddresses.filter(favorites => favorites.id !== id));
     } else {
       setResponse('Error deleting favorites');
     }
   } catch (error) {
     console.error('Error:', error);
     setResponse('Error deleting favorites');
   }
 };


  return (
    <>
      {/*start page wrapper */}
      <div className="page-wrapper">
        <div className="page-content">
          {/*start breadcrumb*/}
          <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
          <Container fluid className="pe-lg-5 ps-lg-5">
              <div className="page-breadcrumb d-flex align-items-center">
                <h3 className="breadcrumb-title pe-3">Wishlist Grid</h3>
                <div className="ms-auto">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 p-0">
                      <li className="breadcrumb-item">
                        <a href="javascript:;">
                          <i className="bx bx-home-alt" /> Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="javascript:;">Wishlist</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Wishlist
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
           </Container>
          </section>
          {/*end breadcrumb*/}
          {/*start Featured product*/}
          <section className="py-4">
           <Container fluid className="pe-lg-5 ps-lg-5">
              <div className="product-grid">
                <div className="row  row-cols-2 row-cols-md-3 row-cols-lg-3  row-cols-xl-4 row-cols-xxl-5 g-4">
                  {wishlistData.map((item) => (
                    <div className="col" key={item.id}>
                      <div className="card rounded-0 border card-img">
                        <div className="">
                          <a>
                            <Link to={`/productdetails/${item.product_id}/${item.slug}`}>
                            <img
                              src={item.image}              
                              className="card-img-top img-fluid" 
                              style={{ height: "393.75px" , width: "393.75px" }} 
                                alt="..."
                            />
                            </Link>
                          </a>
                        </div>
                        <div className="card-body">
                          <div className="product-info">
                            <a href="">
                              <h6 className="product-name mb-2">
                                {item.name.substring(0, 16)}...
                              </h6>
                            </a>
                            <div className="d-flex align-items-center">
                              <div className="mb-1 product-price">
                                {" "}
                                <span className="me-1 text-decoration-line-through ListName">
                                ₹{item.price}
                                </span>
                                <span className="fs-5 ListName">
                                ₹{item.discounted_price}
                                </span>
                              </div>
                              {/* <div className="cursor-pointer ms-auto">
                                {" "}
                                <i className="bx bxs-star text-warning" />
                                <i className="bx bxs-star text-warning" />
                                <i className="bx bxs-star text-warning" />
                                <i className="bx bxs-star text-warning" />
                                <i className="bx bxs-star text-warning" />
                              </div> */}
                            </div>
                            <div className="product-action mt-2">
                              <div className="d-grid gap-2">
                                <a onClick={() => addToCart(item.product_id)} className="btn btn-dark btn-ecomm ListName">
                                  <i className="bx bxs-cart-add" />
                                  Add to Cart
                                </a>
                                <a
                                  onClick={() => handleDeleteClick(item.id, item.product_id)}
                                  className="btn btn-light btn-ecomm sm-fs-3 ListName "
                                >
                                  <i className="bx bx-zoom-in " />
                                  Remove From List
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
           </Container>
          </section>
          {/*end Featured product*/}
        </div>
      </div>
      {/*end page wrapper */}
    </>
  );
}

export default Wishlist;
