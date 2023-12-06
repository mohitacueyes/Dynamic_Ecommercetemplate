import React ,{useState, useEffect} from "react";

function Shopcart() { 
    const [cartItems, setCartItems] = useState([]);
    const user_id = localStorage.getItem("userId");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchCartData = async () => {
        const user_id = localStorage.getItem('userId');
        try {
          if (user_id) {
            const response = await fetch(`${process.env.REACT_APP_API}/api/cart-listuseridwise`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ user_id }),
            });
  
            if (response.ok) {
              const data = await response.json();
              if (Array.isArray(data.ResponseData)) {
                setCartItems(data.ResponseData);
              } else {
                setCartItems([]);
              }
            } else {
              setError('Error fetching cart data: ' + response.statusText);
            }
          }
        } catch (error) {
          setError('Error fetching cart data: ' + error.message);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchCartData();
    }, []);
    console.log(cartItems);

    //-----DELETE CART ITEMS-----//
 const [response, setResponse] = useState(null);

 const handleDeleteClick = async (id ,productId) => {
   const apiUrl = `${process.env.REACT_APP_API}/api/delete`; 

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
       setCartItems(prevAddresses => prevAddresses.filter(cart => cart.id !== id));
     } else {
       setResponse('Error deleting cart items');
     }
   } catch (error) {
     console.error('Error:', error);
     setResponse('Error deleting cart items');
   }
 };


  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          {/*start breadcrumb*/}
          <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
            <div className="container">
              <div className="page-breadcrumb d-flex align-items-center">
                <h3 className="breadcrumb-title pe-3">Shop Cart</h3>
                <div className="ms-auto">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 p-0">
                      <li className="breadcrumb-item">
                        <a href="javascript:;">
                          <i className="bx bx-home-alt" /> Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="javascript:;">Shop</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Shop Cart
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          {/*end breadcrumb*/}
          {/*start shop cart*/}
          <section className="py-4">
            <div className="container">
              <div className="shop-cart">
                <div className="row">
                  <div className="col-12 col-xl-8">
                    <div className="shop-cart-list mb-3 p-3">
                    {cartItems.map((item , index) => (
                      <div className="row align-items-center g-3">
                        <div className="col-12 col-lg-6">
                          <div className="d-lg-flex align-items-center gap-3">
                            <div className="cart-img text-center text-lg-start">
                              <img
                                src={item.imageLink}
                                className="rounded-3"
                                width={100}
                                height={150}
                                style={{ objectFit: "cover" }}
                                alt
                              />
                            </div>
                            <div className="cart-detail text-center text-lg-start">
                              <h6 className="mb-2">
                                {item.name.slice(0,18) || item.name}..
                              </h6>
                              <p className="mb-0">
                                Size: <span>Regular</span>
                              </p>
                              <p className="mb-2">
                                Color: <span>White &amp; Blue</span>
                              </p>
                              {/* <h5 className="mb-0">${item.discounted_price}</h5> */}
                              <div className="d-flex align-items-center mt-3 gap-2">
                          <h6 className="mb-0 text-decoration-line-through text-light-3 text-secondary">
                            ${item.price}
                          </h6>
                          <h5 className="mb-0">
                            ${item.discounted_price}
                          </h5>
                        </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-3">
                          <div className="cart-action text-center">
                            <input
                              type="number"
                              className="form-control rounded-0"
                              defaultValue={1}
                              min={1}
                              style={{ maxWidth: "80px" }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-3">
                          <div className="text-center">
                            <div className="d-flex gap-3 justify-content-center justify-content-lg-end">
                              <a
                                onClick={() => handleDeleteClick(item.id)}
                                className="btn btn-outline-dark rounded-0 btn-ecomm"
                              >
                                <i className="bx bx-x" />
                                Remove
                              </a>
                              <a
                                onClick={() => handleDeleteClick(item.id)}
                                className="btn btn-light rounded-0 btn-ecomm"
                              >
                                <i className="bx bx-heart me-0" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <hr/>
                      </div>
                      ))}
                      <div className="d-lg-flex align-items-center gap-2">
                        <a
                          href="javascript:;"
                          className="btn btn-dark btn-ecomm"
                        >
                          <i className="bx bx-shopping-bag" /> Continue Shoping
                        </a>
                       
                        <a
                          href="javascript:;"
                          className="btn btn-white btn-light btn-ecomm  ms-auto"
                        >
                          <i className="bx bx-refresh" /> Update Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4">
                    <div className="checkout-form p-3 bg-light">
                      <div className="card rounded-0 border bg-transparent shadow-none">
                        <div className="card-body">
                          <p className="fs-5">Apply Discount Code</p>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control rounded-0"
                              placeholder="Enter discount code"
                            />
                            <button
                              className="btn btn-dark btn-ecomm"
                              type="button"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="card rounded-0 border bg-transparent shadow-none">
                        <div className="card-body">
                          <p className="fs-5">Estimate Shipping and Tax</p>
                          <div className="my-3 border-top" />
                          <div className="mb-3">
                            <label className="form-label">Country Name</label>
                            <select className="form-select rounded-0">
                              <option selected>United States</option>
                              <option value={1}>Australia</option>
                              <option value={2}>India</option>
                              <option value={3}>Canada</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">State/Province</label>
                            <select className="form-select rounded-0">
                              <option selected>California</option>
                              <option value={1}>Texas</option>
                              <option value={2}>Canada</option>
                            </select>
                          </div>
                          <div className="mb-0">
                            <label className="form-label">
                              Zip/Postal Code
                            </label>
                            <input
                              type="email"
                              className="form-control rounded-0"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="card rounded-0 border bg-transparent mb-0 shadow-none">
                        <div className="card-body">
                          <p className="mb-2">
                            Subtotal: <span className="float-end">${cartItems.reduce((acc, item) => acc + item.discounted_price, 0)}</span>
                          </p>
                          <p className="mb-2">
                            Shipping: <span className="float-end">--</span>
                          </p>
                          <p className="mb-2">
                            Taxes: <span className="float-end">--</span>
                          </p>
                          <p className="mb-0">
                            Discount: <span className="float-end">--</span>
                          </p>
                          <div className="my-3 border-top" />
                          <h5 className="mb-0">
                            Order Total:{" "}
                            <span className="float-end">${cartItems.reduce((acc, item) => acc + item.discounted_price, 0)}</span>
                          </h5>
                          <div className="my-4" />
                          <div className="d-grid">
                            {" "}
                            <a
                              href="/checkout"
                              className="btn btn-dark btn-ecomm"
                            >
                              Proceed to Checkout
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end row*/}
              </div>
            </div>
          </section>
          {/*end shop cart*/}
        </div>
      </div>
    </>
  );
}

export default Shopcart;
