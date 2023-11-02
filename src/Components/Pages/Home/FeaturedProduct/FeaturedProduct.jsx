import React, { useState, useEffect } from "react";

const FeaturedProduct = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    fetch("https://ecom.iconixitsolution.com/api/home")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data.homefeedList is your list of featured products
        setFeaturedProducts(data.ResponseData.homefeedList);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(featuredProducts);
  return (
    <>
      {/*start Featured product*/}
      <section className="py-4">
        <div className="container">
          <div className="separator pb-4">
            <div className="line" />
            <h5 className="mb-0 fw-bold separator-title">FEATURED PRODUCTS</h5>
            <div className="line" />
          </div>
          <div className="product-grid">
          {featuredProducts && featuredProducts.map((feed) => (
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-3 g-sm-4">
              {feed.homefeed_product.map((product) => (
              <div className="col">
                <div className="card">
                  <div className="position-relative overflow-hidden">
                    <div className="add-cart position-absolute top-0 end-0 mt-3 me-3">
                      <a href="javascript:;">
                        <i className="bx bx-cart-add" />
                      </a>
                    </div>
                    <div className="quick-view position-absolute start-0 bottom-0 end-0">
                      <a
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#QuickViewProduct"
                      >
                        Quick View
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/products/01.png"
                        className="img-fluid"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body px-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className>
                        <p className="mb-1 product-short-name"></p>
                        <h6 className="mb-0 fw-bold product-short-title">
                         {product.name}
                        </h6>
                      </div>
                      <div className="icon-wishlist">
                        <a href="javascript:;">
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
                        ${product.price}
                      </div>
                      <div className="h6 fw-bold">${product.discounted_price}</div>
                    </div>
                  </div>
                </div>
              </div>
                ))}
            </div>
            ))}
            {/*end row*/}
          </div>
        </div>
      </section>
      {/*end Featured product*/}
    </>
  );
};

export default FeaturedProduct;
