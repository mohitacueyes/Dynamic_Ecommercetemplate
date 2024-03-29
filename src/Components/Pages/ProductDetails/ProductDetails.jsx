import React, { useState, useEffect, } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import "react-medium-image-zoom/dist/styles.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageMagnify from 'react-image-magnify';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ToastContainer, toast } from 'react-toastify';
import { Container } from "react-bootstrap";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';





const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 1000,
    margin: 0,
  },
};

const ProductDetails = () => {
  const theme = useTheme();
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [productOptionImages, setProductOptionImages] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const xs = useMediaQuery('(max-width:575px)');
  const sm = useMediaQuery('(min-width:576px) and (max-width:767px)');
  const md = useMediaQuery('(min-width:768px) and (max-width:991px)');
  const lg = useMediaQuery('(min-width:992px) and (max-width:1199px)');
  const xl = useMediaQuery('(min-width:1200px) and (max-width:1399px)');
  const xxl = useMediaQuery('(min-width:1400px)');
  const isMobile = xs || sm || md || lg || xl || xxl;

  const [value, setValue] = React.useState('cart');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const formatDate = (dateString) => {
    const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  const [formData, setFormData] = useState({
    product_id: id,
    user_id: userId,
    name: '',
    image: null,
    rating: '',
    review: '',
  });
  //------- ADD-review -------//
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handleSubmit = async () => {
    const apiUrl = `${process.env.REACT_APP_API}/api/addfeedback`;

    const formDataToSend = new FormData();
    formDataToSend.append('product_id', formData.product_id);
    formDataToSend.append('user_id', formData.user_id);
    formDataToSend.append('rating', formData.rating);
    formDataToSend.append('review', formData.review);
    formDataToSend.append('image', formData.image);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        toast.success(responseData.ResponseText);
        console.log(responseData);
      } else {
        // Handle error, maybe show an error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



  //------- (End) ADD-review -------//

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/product-detail/${id}`);
        if (
          response.data.ResponseData &&
          response.data.ResponseData.productList &&
          response.data.ResponseData.productList.length > 0
        ) {
          const product = response.data.ResponseData.productList[0];
          setProductData(product);

          const productLinks = response.data.ResponseData.productlink;
          if (productLinks && productLinks.length > 0) {
            const images = productLinks.flatMap((link) =>
              link.product_options.map((option) => option.image)
            );
            setProductOptionImages(productLinks || []);
            setMainImage(images && images.length > 0 ? images[0] : ''); // Set default main image
          }
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductData();
  }, [id]);



  const handleColorVariantClick = (variantId, slug) => {
    const productDetailsPath = `/productdetails/${variantId}/${slug}`;
    window.location.href = productDetailsPath;
  };






  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/product-detail/${id}`)
      .then((response) => response.json())
      .then((data) => setProductData(data.ResponseData.productList[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  // -------Reviews --------//
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/feedbacklist/${id}`)
      .then(response => response.json())
      .then(data => setReviews(data.ResponseData))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  if (!productData) {
    return <div>Loading...</div>;
  }
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
      const response = await fetch(
        `${process.env.REACT_APP_API}/api/add-favorites`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: userId,
            user_id: userId,
            product_id: productId,
            favorites: "1",
          }),
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      toast.success(data.ResponseText);
    } catch (error) {
      console.error("Error adding to likes:", error);
      navigate("/login");
    }
  };




  let imageWidth, imageHeight;

  if (xs) {
    imageWidth = 350;
    imageHeight = 400;

  } else if (sm) {
    imageWidth = 400;
    imageHeight = 500;

  } else if (md) {
    imageWidth = 450;
    imageHeight = 550;
  } else if (lg) {
    imageWidth = 400;
    imageHeight = 500;
  } else if (xl) {
    imageWidth = 450;
    imageHeight = 550;
  } else if (xxl) {
    imageWidth = 500;
    imageHeight = 600;
  }

  let thumbnailSize;

  if (xs) {
    thumbnailSize = 90;
  } else if (sm) {
    thumbnailSize = 110;
  } else if (md) {
    thumbnailSize = 127;
  } else if (lg) {
    thumbnailSize = 100;
  } else if (xl) {
    thumbnailSize = 127;
  } else if (xxl) {
    thumbnailSize = 145;
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
            <Container fluid className="pe-lg-5 ps-lg-5">
              <div className="page-breadcrumb d-flex align-items-center">
                <h3 className="breadcrumb-title pe-3  Titlesub">{productData.name}</h3>
                <div className="ms-auto">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 p-0">
                      <li className="breadcrumb-item">
                        <a href="/">
                          <i className="bx bx-home-alt" /> Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="/">Shop</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Product Details
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </Container>
          </section>
          <section className="py-4">
            <Container fluid className="pe-lg-5 ps-lg-5 pe-3 ps-4">
              <div className="product-detail-card">
                <div className="product-detail-body">
                  <div className="row g-0">
                    <div className="col-12 col-sm-12 col-lg-5 col-xl-6  col-xxl-5 ">
                      <div className="image-zoom-section">
                        <div className="producttopimage">
                          {productData.product_image && productData.product_image.length > 0 && (
                            <ReactImageMagnify
                              {...{
                                smallImage: {
                                  alt: "Product Image",
                                  isFluidWidth: false,
                                  src:
                                    selectedImage ||
                                    productData.product_image[0].image,
                                  width: imageWidth,
                                  height: imageHeight,
                                },
                                largeImage: {
                                  src:
                                    selectedImage ||
                                    productData.product_image[0].image,
                                  width: imageWidth * 2,
                                  height: imageHeight * 2,
                                },
                                lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                                enlargedImageContainerStyle: { background: "rgba(0,0,0,.6)" },
                              }}
                            />
                          ) || (
                              <div className="producttopimage"  >
                                <img src={productData.image} alt="No Image" className="img-fluid " style={{
                                  width: imageWidth,
                                  height: imageHeight
                                }} />
                              </div>
                            )}
                        </div>
                        <div className=" mt-3 thumbnailimage " >
                          <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={false}
                            containerClass="container"
                            customButtonGroup={<button></button>}
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass="custom-carousel-item"
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                              desktop: {
                                breakpoint: {
                                  max: 3000,
                                  min: 1024,
                                },
                                items: 4,
                              },
                              mobile: {
                                breakpoint: {
                                  max: 464,
                                  min: 0,
                                },
                                items: 4,

                              },
                              tablet: {
                                breakpoint: {
                                  max: 1024,
                                  min: 464,
                                },
                                items: 4,
                              },
                            }}
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                          >
                            {productData.product_image.slice(0, 4).map((image, index) => (
                              <img
                                src={image.image}
                                alt={`Thumbnail ${index}`}
                                onClick={() => setSelectedImage(image.image)}
                                className={"img-fluid cursor-pointer"}
                                style={{ maxWidth: `${thumbnailSize}px`, maxHeight: `${thumbnailSize}px` }}
                              />
                            ))}
                          </Carousel>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7 col-xl-6 col-xxl-5" >
                      <div className="product-info-section ">
                        <h3 className="mt-3 mt-lg-0 mb-0">
                          {productData.name}
                        </h3>

                        <div className="d-flex align-items-center mt-3 gap-2">
                          <h5 className="mb-0 text-decoration-line-through text-light-3 text-secondary">
                            ₹{productData.price}
                          </h5>
                          <h4 className="mb-0">
                            ₹{productData.discounted_price}
                          </h4>
                        </div>
                        <div className="mt-3">
                          <h6>Discription :</h6>
                          <p className="mb-0">{productData.shotdescription}</p>
                        </div>
                        <dl className="row mt-3">
                          {" "}
                          <dt className="col-sm-3">Product id</dt>
                          <dd className="col-sm-9">#{productData.sku}</dd>
                        </dl>
                        <div className="mt-3 align-items-center">

                          {/* Display main product image */}
                          {productOptionImages && productOptionImages.length > 0 && (
                            <div>
                              <h6>Product Option Images:</h6>
                              <div className="d-flex align-items-center gap-2">
                                {/* Display color variant images */}
                                {productOptionImages.map((link) => (
                                  <img
                                    key={link.product_link_id}
                                    src={link.product_options[0].image} // Assuming the first image for simplicity
                                    alt={`Product Option ${link.link_product_id}`}
                                    className="border p-1"
                                    style={{ maxWidth: "100px", maxHeight: "100px", objectFit: "cover" }}
                                    onClick={() => handleColorVariantClick(link.link_product_id)}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                      </div>

                      <div class="row row-cols-auto align-items-center mt-3">
                        {/* <div class="col">
                            <label class="form-label">Quantity</label>
                            <select class="form-select form-select-sm">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div> */}
                        {/* <div class="col">
                            <label class="form-label">Size</label>
                            <select class="form-select form-select-sm">
                              <option>S</option>
                              <option>M</option>
                              <option>L</option>
                              <option>XS</option>
                              <option>XL</option>
                            </select>
                          </div> */}
                      </div>
                      <div className="d-flex gap-2 mt-3">
                        <a

                          onClick={() => addToCart(productData.id)}
                          className="btn btn-dark btn-ecomm"
                        >
                          <i className="bx bxs-cart-add" />
                          Add to Cart
                        </a>
                        <a

                          href="/details"
                          className="btn btn-dark btn-ecomm"
                        >
                          Buy now
                        </a>
                        <a
                          onClick={() => addToLikes(productData.id)}
                          className="btn-facebook btn-ecomm"
                        >
                          <i className="bx bx-heart" />
                        </a>
                      </div>
                      <div className="mt-3 border border-1 rounded p-3">
                        <h4>Specification</h4>
                        <hr />
                        <h5>General</h5>
                        <div className="border border-1 rounded p-3 text-start">
                          <table className="table">
                            <tbody >
                              <tr>
                                <th scope="row">Modal Name</th>
                                <td><strong>Test</strong></td>
                              </tr>
                              <tr>
                                <th scope="row">Series</th>
                                <td><strong>Test</strong></td>
                              </tr>
                              <tr>
                                <th scope="row">Color</th>
                                <td><strong>Test</strong></td>
                              </tr>
                              <tr>
                                <th scope="row">Display</th>
                                <td><strong>Test</strong></td>
                              </tr>
                              <tr>
                                <th scope="row">Panel Type</th>
                                <td><strong>Test</strong></td>
                              </tr>
                              <tr>
                                <th scope="row">Resolution</th>
                                <td><strong>Test</strong></td>
                              </tr>
                              <tr>
                                <th scope="row">Warranty</th>
                                <td><strong>Test</strong></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-12   col-xxl-2">
                  </div>
                </div>
              </div>

            </Container>
          </section>
          <section className="py-4">
            <Container fluid className="pe-5 ps-5">
              <div className="product-more-info">
                <ul className="nav nav-tabs mb-0" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#discription"
                    >
                      <div className="d-flex align-items-center">
                        <div className="tab-title text-uppercase fw-500">
                          Description
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      data-bs-toggle="tab"
                      href="#reviews"
                    >
                      <div className="d-flex align-items-center">
                        <div className="tab-title text-uppercase fw-500">
                          (3) Reviews
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="tab-content pt-3">
                  <div className="tab-pane fade show active" id="discription">
                    <div className="description-content" dangerouslySetInnerHTML={{ __html: productData.description }} />
                  </div>
                  <div className="tab-pane fade " id="reviews">
                    <div className="row">
                      <div className="col   col-12 col-lg-8 ">
                        <div className="product-review">
                          <div className="review-list">
                            <div className="card rounded-0 border bg-transparent shadow-none overflow-auto " style={{ maxHeight: '520px' }}>
                              {reviews.map(review => (
                                <div>
                                  <div key={review.id} className="d-flex align-items-start">
                                    <div className="review-user">
                                      <img
                                        src={review.image}
                                        width={65}
                                        height={65}
                                        className="rounded-circle"
                                        alt=""
                                      />
                                    </div>
                                    <div className="review-content ms-3">
                                      <div className="rates cursor-pointer fs-6">
                                        <div className="review-user">
                                          <img
                                            src={review.image}
                                            width={100}
                                            height={100}
                                          />
                                        </div>
                                        {Array.from({ length: review.rating }, (_, index) => (
                                          <i key={index} className="bx bxs-star text-warning" />
                                        ))}
                                      </div>
                                      <div className=" align-items-center mb-2">
                                        <p className="mb-0 ms-auto">{formatDate(review.created_at)}</p>
                                      </div>
                                      <p>{review.review}</p>
                                    </div>
                                  </div>
                                  <hr />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col   col-12  col-lg-4">
                        <div className="add-review border">
                          <div className="form-body p-3">
                            <h4 className="mb-4">Write a Review</h4>
                            <div className="mb-3">
                              <label className="form-label">Your Name</label>
                              <input
                                type="text"
                                className="form-control rounded-0"
                                name="name"
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Image</label>
                              <input
                                type="file"
                                className="form-control rounded-0"
                                name="image"
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Rating</label>
                              <select
                                className="form-select rounded-0"
                                name="rating" onChange={handleInputChange}
                              >
                                <option selected>Choose Rating</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={3}>4</option>
                                <option value={3}>5</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label className="form-label">
                                Example textarea
                              </label>
                              <textarea
                                className="form-control rounded-0"
                                rows={3}
                                name="review"
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="d-grid">
                              <button
                                type="button"
                                className="btn btn-dark btn-ecomm"
                                onClick={handleSubmit}
                              >
                                Submit a Review
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </div>
      </div>
      <div className="homeFooter mt-5">
        <BottomNavigation sx={styles.root} value={value} onChange={handleChange} showLabels={true}>
          <BottomNavigationAction
            label="Add to Cart"
            value="cart"
            icon={<ShoppingCartIcon />}
            component={Link}
            onClick={() => addToCart(productData.id)}
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
      <ToastContainer />
    </>
  );
};

export default ProductDetails;
