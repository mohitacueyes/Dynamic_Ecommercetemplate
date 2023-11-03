import React,{ useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import style from './Banner.module.css'



const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ecom.iconixitsolution.com/api/home');
        const data = await response.json();
        setBannerData(data.ResponseData.bannerList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <section className="slider-section mb-4">
        <div className="first-slider p-0">
          <div className="banner-slider owl-carousel owl-theme ">
          {bannerData.map((banner) => (
            <div className="item" key={banner.id}>
              <div className="position-relative">
                <div className="position-absolute top-50 slider-content translate-middle">
                  <h3 className="h3 fw-bold d-none d-md-block">{banner.title}</h3>
                  <h1 className="h1 fw-bold">{banner.title}</h1>
                  <p className="fw-bold text-dark d-none d-md-block"><i>Last call for upto 15%</i></p>
                  <div className>
                    <a className="btn btn-dark btn-ecomm px-4"  href={banner.slider_url}>Shop Now</a>
                  </div>
                </div>
                <a href="javascript:;">
                <img
                      src={banner.banner_imageLink}
                      className="img-fluid"
                      alt="..."
                    />
                </a>
              </div>
            </div>
            // <div className="item">
            //   <div className="position-relative">
            //     <div className="position-absolute top-50 slider-content translate-middle">
            //       <h3 className="h3 fw-bold d-none d-md-block">New Trending</h3>
            //       <h1 className="h1 fw-bold">Men Fashion</h1>
            //       <p className="fw-bold text-dark d-none d-md-block"><i>Last call for upto 15%</i></p>
            //       <div className><a className="btn btn-dark btn-ecomm px-4" href="shop-grid.html">Shop Now</a>
            //       </div>
            //     </div>
            //     <a href="javascript:;">
            //       <img src="assets/images/banners/02.png" className="img-fluid" alt="..." />
            //     </a>
            //   </div>
            // </div>
            // <div className="item">
            //   <div className="position-relative">
            //     <div className="position-absolute top-50 slider-content translate-middle">
            //       <h3 className="h3 fw-bold d-none d-md-block">New Trending</h3>
            //       <h1 className="h1 fw-bold">Kids Fashion</h1>
            //       <p className="fw-bold text-dark d-none d-md-block"><i>Last call for upto 15%</i></p>
            //       <div className><a className="btn btn-dark btn-ecomm px-4" href="shop-grid.html">Shop Now</a>
            //       </div>
            //     </div>
            //     <a href="javascript:;">
            //       <img src="assets/images/banners/04.png" className="img-fluid" alt="..." />
            //     </a>
            //   </div>
            // </div>
            ))}
          </div>
        </div>
      </section> */}
     <Carousel interval={1000}>
      {bannerData.map((banner) => (
        <Carousel.Item key={banner.id}>
       <div className={style.bannerr}>
       <img
            src={banner.banner_imageLink}
          
            alt={`Banner ${banner.id}`}
          />
       </div>
        
          <Carousel.Caption>
            <h3>{banner.title}</h3>
            <p>{banner.short_description}</p>
            <a className="btn btn-dark btn-ecomm px-4" href={banner.slider_url}>
              Shop Now
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </>
  )
}

export default Banner
