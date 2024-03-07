import React ,{useEffect, useState} from 'react'
import { useResultContext } from './Result'
import LikedCarousel from './LikedCarousel'
import './FeaturedLike.css'
const FeaturedLike = () => {
    const {results} = useResultContext()
  return (
    <div className="container">
        
        <div class="liked">
            <h2>You May Also Like</h2>
            <LikedCarousel data={results}/>
        </div>
        <div class="liked">
            <h2>Tranding Coins</h2>
            <LikedCarousel data={results}/>
        </div>
    </div>
  )
}

export default FeaturedLike
 