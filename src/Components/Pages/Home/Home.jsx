import React from 'react'
import Banner from './Banner/Banner'
import { SecondSection } from './SecondSection'
import { AdvertiseBanner } from './AdvertiseBanner'
import { Brands } from './Brands'
import Categories from './Categories/Categories'
import FeaturedProduct from './FeaturedProduct/FeaturedProduct'
import LatestNews from './LatestNews/LatestNews'
import NewArrival from './NewArrival/NewArrival'
import ProductSection from './ProductSection/ProductSection'
import { Support } from './Support'

export const Home = () => {
  return (
   <>
   <Banner/>
   <SecondSection/>
   <FeaturedProduct/>
   <NewArrival/>
   <AdvertiseBanner/>
   <Categories/> 
   <Support/>
   <LatestNews/>
   <Brands/>





<ProductSection/>
   </>
  )
}
