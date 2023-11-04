import React ,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
const ProductListsideBar = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make an API call to fetch product data
    fetch( `https://ecom.iconixitsolution.com/api/subcategory-wise-product-byid/${id}`)
      .then(response => response.json())
      .then(data => setProducts(data.ResponseData))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
    	{/*start page wrapper */}
<div className="page-wrapper">
  <div className="page-content">
    {/*start breadcrumb*/}
    <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
      <div className="container">
        <div className="page-breadcrumb d-flex align-items-center">
          <h3 className="breadcrumb-title pe-3">Shop Grid Left Sidebar</h3>
          <div className="ms-auto">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /> Home</a>
                </li>
                <li className="breadcrumb-item"><a href="javascript:;">Shop</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Shop Left Sidebar</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    {/*end breadcrumb*/}
    {/*start shop area*/}
    <section className="py-4">
      <div className="container">
        <div className="btn btn-dark btn-ecomm d-xl-none position-fixed top-50 start-0 translate-middle-y z-index-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarFilter"><span><i className="bx bx-filter-alt me-1" />Filters</span></div>
        <div className="row">
          <div className="col-12 col-xl-3 filter-column">
            <nav className="navbar navbar-expand-xl flex-wrap p-0">
              <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbarFilter" aria-labelledby="offcanvasNavbarFilterLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title mb-0 fw-bold" id="offcanvasNavbarFilterLabel">Filters</h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                  <div className="filter-sidebar">
                    <div className="card rounded-0 shadow-none border">
                      <div className="card-header d-none d-xl-block bg-transparent">
                        <h5 className="mb-0 fw-bold">Filters</h5>
                      </div>
                      <div className="card-body">
                        <h6 className="p-1 fw-bold bg-light">Categories</h6>
                        <div className="categories">
                          <div className="categories-wrapper height-1 p-1">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekCate1" />
                              <label className="form-check-label" htmlFor="chekCate1">
                                <span>Shirts</span><span className="product-number">(1548)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekCate2" />
                              <label className="form-check-label" htmlFor="chekCate2">
                                <span>Jeans</span><span className="product-number">(568)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekCate3" />
                              <label className="form-check-label" htmlFor="chekCate3">
                                <span>Kurtas</span><span className="product-number">(784)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekCate4" />
                              <label className="form-check-label" htmlFor="chekCate4">
                                <span>Makeup</span><span className="product-number">(1789)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekCate5" />
                              <label className="form-check-label" htmlFor="chekCate5">
                                <span>Shoes</span><span className="product-number">(358)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekCate6" />
                              <label className="form-check-label" htmlFor="chekCate6">
                                <span>Heels</span><span className="product-number">(572)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekCate7" />
                              <label className="form-check-label" htmlFor="chekCate7">
                                <span>Lehenga</span><span className="product-number">(754)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekCate8" />
                              <label className="form-check-label" htmlFor="chekCate8">
                                <span>Laptops</span><span className="product-number">(541)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekCate9" />
                              <label className="form-check-label" htmlFor="chekCate9">
                                <span>Jewellary</span><span className="product-number">(365)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekCate10" />
                              <label className="form-check-label" htmlFor="chekCate10">
                                <span>Sports</span><span className="product-number">(4512)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekCate11" />
                              <label className="form-check-label" htmlFor="chekCate11">
                                <span>Music</span><span className="product-number">(647)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekCate12" />
                              <label className="form-check-label" htmlFor="chekCate12">
                                <span>Headphones</span><span className="product-number">(9848)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekCate13" />
                              <label className="form-check-label" htmlFor="chekCate13">
                                <span>Sunglasses</span><span className="product-number">(751)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekCate14" />
                              <label className="form-check-label" htmlFor="chekCate14">
                                <span>Belts</span><span className="product-number">(4923)</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="brands">
                          <h6 className="p-1 fw-bold bg-light">Brands</h6>
                          <div className="brands-wrapper height-1 p-1">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekBrand1" />
                              <label className="form-check-label" htmlFor="chekBrand1">
                                <span>Samsung</span><span className="product-number">(1548)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekBrand2" />
                              <label className="form-check-label" htmlFor="chekBrand2">
                                <span>Sony</span><span className="product-number">(478)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekBrand3" />
                              <label className="form-check-label" htmlFor="chekBrand3">
                                <span>Microsoft</span><span className="product-number">(689)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekBrand4" />
                              <label className="form-check-label" htmlFor="chekBrand4">
                                <span>Reebok</span><span className="product-number">(987)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekBrand5" />
                              <label className="form-check-label" htmlFor="chekBrand5">
                                <span>Adidas</span><span className="product-number">(358)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekBrand6" />
                              <label className="form-check-label" htmlFor="chekBrand6">
                                <span>Puma</span><span className="product-number">(5682)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekBrand7" />
                              <label className="form-check-label" htmlFor="chekBrand7">
                                <span>Ajio</span><span className="product-number">(5712)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekBrand8" />
                              <label className="form-check-label" htmlFor="chekBrand8">
                                <span>Motorola</span><span className="product-number">(657)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekBrand9" />
                              <label className="form-check-label" htmlFor="chekBrand9">
                                <span>amazon</span><span className="product-number">(984)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekBrand10" />
                              <label className="form-check-label" htmlFor="chekBrand10">
                                <span>Canon</span><span className="product-number">(524)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekBrand11" />
                              <label className="form-check-label" htmlFor="chekBrand11">
                                <span>Apple</span><span className="product-number">(168)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekBrand12" />
                              <label className="form-check-label" htmlFor="chekBrand12">
                                <span>Philips</span><span className="product-number">(279)</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="Price">
                          <h6 className="p-1 fw-bold bg-light">Price</h6>
                          <div className="Price-wrapper p-1">
                            <div className="input-group">
                              <input type="text" className="form-control rounded-0" placeholder="$10" />
                              <span className="input-group-text bg-section-1 border-0">-</span>
                              <input type="text" className="form-control rounded-0" placeholder="$10000" />
                              <button type="button" className="btn btn-outline-dark rounded-0 ms-2"><i className="bx bx-chevron-right me-0" /></button>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="colors">
                          <h6 className="p-1 fw-bold bg-light">Colors</h6>
                          <div className="color-wrapper height-1 p-1">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekColor1" />
                              <label className="form-check-label" htmlFor="chekColor1">
                                <i className="bi bi-circle-fill me-1 text-danger" /><span>Red</span><span className="product-number">(845)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekColor2" />
                              <label className="form-check-label" htmlFor="chekColor2">
                                <i className="bi bi-circle-fill me-1 text-primary" /><span>Blue</span><span className="product-number">(257)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekColor3" />
                              <label className="form-check-label" htmlFor="chekColor3">
                                <i className="bi bi-circle-fill me-1 text-warning" /><span>Yellow</span><span className="product-number">(968)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekColor4" />
                              <label className="form-check-label" htmlFor="chekColor4">
                                <i className="bi bi-circle-fill me-1 text-success" /><span>Green</span><span className="product-number">(478)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekColor5" />
                              <label className="form-check-label" htmlFor="chekColor5">
                                <i className="bi bi-circle-fill me-1 text-info" /><span>Skyblue</span><span className="product-number">(256)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekColor6" />
                              <label className="form-check-label" htmlFor="chekColor6">
                                <i className="bi bi-circle-fill me-1 text-dark" /><span>Black</span><span className="product-number">(124)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekColor7" />
                              <label className="form-check-label" htmlFor="chekColor7">
                                <i className="bi bi-circle-fill me-1 text-purple" /><span>Purple</span><span className="product-number">(897)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekColor8" />
                              <label className="form-check-label" htmlFor="chekColor8">
                                <i className="bi bi-circle-fill me-1 text-orange" /><span>Orange</span><span className="product-number">(68)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekColor9" />
                              <label className="form-check-label" htmlFor="chekColor9">
                                <i className="bi bi-circle-fill me-1 text-cyane" /><span>Cyane</span><span className="product-number">(784)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekColor10" />
                              <label className="form-check-label" htmlFor="chekColor10">
                                <i className="bi bi-circle-fill me-1 text-brown" /><span>Brown</span><span className="product-number">(532)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekColor11" />
                              <label className="form-check-label" htmlFor="chekColor11">
                                <i className="bi bi-circle-fill me-1 text-ten" /><span>Ten</span><span className="product-number">(532)</span>
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="chekColor12" />
                              <label className="form-check-label" htmlFor="chekColor12">
                                <i className="bi bi-circle-fill me-1 text-pink" /><span>Pink</span><span className="product-number">(452)</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="discount">
                          <h6 className="p-1 fw-bold bg-light">Discount Range</h6>
                          <div className="discount-wrapper p-1">
                            <div className="form-check">
                              <input className="form-check-input" name="exampleRadios" type="radio" defaultValue="option1" id="chekDisc1" />
                              <label className="form-check-label" htmlFor="chekDisc1">
                                10% and Above
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" name="exampleRadios" type="radio" defaultValue="option2" id="chekDisc2" />
                              <label className="form-check-label" htmlFor="chekDisc2">
                                20% and Above
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" name="exampleRadios" type="radio" defaultValue="option3" id="chekDisc3" />
                              <label className="form-check-label" htmlFor="chekDisc3">
                                30% and Above
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" name="exampleRadios" type="radio" defaultValue="option4" id="chekDisc4" />
                              <label className="form-check-label" htmlFor="chekDisc4">
                                40% and Above
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" name="exampleRadios" type="radio" defaultValue="option5" id="chekDisc5" />
                              <label className="form-check-label" htmlFor="chekDisc5">
                                50% and Above
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" name="exampleRadios" type="radio" defaultValue="option6" id="chekDisc6" />
                              <label className="form-check-label" htmlFor="chekDisc6">
                                60% and Above
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" name="exampleRadios" type="radio" defaultValue="option7" id="chekDisc7" />
                              <label className="form-check-label" htmlFor="chekDisc7">
                                70% and Above
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" name="exampleRadios" type="radio" defaultValue="option8" id="chekDisc8" />
                              <label className="form-check-label" htmlFor="chekDisc8">
                                80% and Above
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-12 col-xl-9">
            <div className="product-wrapper">
              <div className="toolbox d-flex align-items-center mb-3 gap-2 border p-3">
                <div className="d-flex flex-wrap flex-grow-1 gap-1">
                  <div className="d-flex align-items-center flex-nowrap">
                    <p className="mb-0 font-13 text-nowrap">Sort By:</p>
                    <select className="form-select ms-3 rounded-0">
                      <option value="menu_order" selected="selected">Default sorting</option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by newness</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">Sort by price: high to low</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex flex-wrap">
                  <div className="d-flex align-items-center flex-nowrap">
                    <p className="mb-0 font-13 text-nowrap">Show:</p>
                    <select className="form-select ms-3 rounded-0">
                      <option>9</option>
                      <option>12</option>
                      <option>16</option>
                      <option>20</option>
                      <option>50</option>
                      <option>100</option>
                    </select>
                  </div>
                </div>
                <div>	<a href="shop-grid-left-sidebar.html" className="btn btn-white rounded-0"><i className="bx bxs-grid me-0" /></a>
                </div>
                <div>	<a href="shop-list-left-sidebar.html" className="btn btn-light rounded-0"><i className="bx bx-list-ul me-0" /></a>
                </div>
              </div>
              <div className="product-grid">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 g-3 g-sm-4">
                { products && products.map(product => (
                  <div className="col">
                    <div className="card">
                      <div className="position-relative overflow-hidden">
                        <div className="add-cart position-absolute top-0 end-0 mt-3 me-3">
                          <a href="javascript:;"><i className="bx bx-cart-add" /></a>
                        </div>
                        <div className="quick-view position-absolute start-0 bottom-0 end-0">
                          <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewProduct">Quick View</a>
                        </div>
                        <a href="javascript:;">
                          <img src={product.product_image} style={{height:"250px"}} className="img-fluid" alt="..." />
                        </a>
                      </div>
                      <div className="card-body px-0">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className>
                            <p className="mb-1 product-short-name">Topwear</p>
                            <h6 className="mb-0 fw-bold product-short-title">{product.name}</h6>
                          </div>
                          <div className="icon-wishlist">
                            <a href="javascript:;"><i className="bx bx-heart" /></a>
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
                          <div className="h6 fw-light fw-bold text-secondary text-decoration-line-through">${product.price}</div>
                          <div className="h6 fw-bold">${product.discounted_price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                       ))}
                </div>
              </div>
              <hr />
              <nav className="d-flex justify-content-between" aria-label="Page navigation">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="javascript:;"><i className="bx bx-chevron-left" /> Prev</a>
                  </li>
                </ul>
                <ul className="pagination">
                  <li className="page-item active d-none d-sm-block" aria-current="page"><span className="page-link">1<span className="visually-hidden">(current)</span></span>
                  </li>
                  <li className="page-item d-none d-sm-block"><a className="page-link" href="javascript:;">2</a>
                  </li>
                  <li className="page-item d-none d-sm-block"><a className="page-link" href="javascript:;">3</a>
                  </li>
                  <li className="page-item d-none d-sm-block"><a className="page-link" href="javascript:;">4</a>
                  </li>
                  <li className="page-item d-none d-sm-block"><a className="page-link" href="javascript:;">5</a>
                  </li>
                </ul>
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="javascript:;" aria-label="Next">Next <i className="bx bx-chevron-right" /></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/*end row*/}
      </div>
    </section>
    {/*end shop area*/}
  </div>
</div>
{/*end page wrapper */}

    </>
  )
}

export default ProductListsideBar
