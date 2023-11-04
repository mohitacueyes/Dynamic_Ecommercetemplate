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