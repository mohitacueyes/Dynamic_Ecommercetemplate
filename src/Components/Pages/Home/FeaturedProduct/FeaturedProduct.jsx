import { Login } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link , useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const FeaturedProduct = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null)
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from your API
    fetch(`${process.env.REACT_APP_API}/api/home`
    )
      .then((response) => response.json())
      .then((data) => {
        // Assuming data.homefeedList is your list of featured products
        setFeaturedProducts(data.ResponseData.homefeedList);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  // console.log(featuredProducts);

  const checkLoggedIn = (userId) => {
    if (!userId) {
      throw new Error('User is not logged in');
    }
  };





  // -------ADD TO CART --------//
  const addToCart = async (productId) => {
    try {
      checkLoggedIn(userId);
      const response = await fetch(
        `${process.env.REACT_APP_API}/api/add-cart`,
        {
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
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Added to cart successfully");
      } else {
        toast.success("Added to cart successfully");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      if (error.message === 'User is not logged in') {
        window.location.href = '/login';
      } else {
        toast.error("An error occurred while adding to cart");
      }
    }
  };

// -------ADD TO LIKES --------//
const addToLikes = async (productId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/api/add-favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        id: userId,
        user_id: userId,
        product_id: productId,
        favorites : "1",
      }),

    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    toast.success(data.ResponseText);
  } catch (error) {
    console.error("Error adding to likes:", error);
    navigate("/login");
  }
};
  
  return (
    <>
      {/*start Featured product*/}
      <section>
        {featuredProducts &&
          featuredProducts.map((feed) => (
            feed.homefeed_product && feed.homefeed_product.length > 0 && (
              <Container fluid className="ps-lg-5 pe-lg-5 ">
              <div className="separator pb-4">
                <h5 className="mb-0 fw-bold separator-title border-bottom border-3 ms-2 mt-5">
                  {feed.feedname}
                </h5>
             
              </div>
              <div className="product-grid">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3 g-sm-2">
                  {feed.homefeed_product.slice(0, 10).map((product) => (
                    <div className="col">
                      <div className="card ">
                        <div className="position-relative overflow-hidden ">
                          <div className="add-cart position-absolute top-0 end-0 mt-3 me-4">
                            <a onClick={() => addToCart(product.id)}>
                              <i className="bx bx-cart-add" />
                            </a>
                          </div>
                          {/* <div className="quick-view position-absolute start-0 bottom-0 end-0">
                            <a><Link to={`/productdetails/${product.id}`}>
                              Quick View
                            </Link></a>
                          </div> */}
                          
                            <Link to={`/productdetails/${product.id}/${product.slug}`}>
                            <img
                              src={product.product_imageLink}
                              className="img-fluid  rounded-2  cart-imgg"
                               style={{height:"450.75px" , width:"345.75px"}}
                              alt="..."
                            />
                            </Link>
                          
                        </div>
                        <div className="card-body px-0">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className>
                              <p className="mb-1 product-short-name"></p>
                              <h6 className="mb-0 fw-bold product-short-title">
                                {product.name.slice(0, 18) || product.name}..
                              </h6>
                            </div>
                            <div className="icon-wishlist">
                              <a onClick={() => addToLikes(product.id)}>
                                <i className="bx bx-heart" />
                              </a>
                            </div>
                          </div>
                          <div className="cursor-pointer rating mt-2">
                            <i className="bx bxs-star text-warning" />
                            <i className="bx bxs-star text-warning" />
                            <i className="bx bxs-star text-warning" />
                            <i className="bx bxs-star text-warning" />
                            <i className="bx bxs-star text-warning" />
                          </div>
                          <div className="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                            <div className="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                            ₹{product.price}
                            </div>
                            <div className="h6 fw-bold">
                            ₹{product.discounted_price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
            )
          ))}
          
      </section>
      <ToastContainer />
    </>
  );
};

export default FeaturedProduct;
