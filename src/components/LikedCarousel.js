import React from 'react'
import './LikedCarousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const LikedCarousel = ({data}) => {
  function updateNumber(val){
    const newVal = val.slice(1)
    return `${+newVal}`
  }
  console.log(data)
    const content =data.map(item=>(
        <div class="item" key={item.item.coin_id}>
           <div className="item__header">
                <div className="left">
                <img src={item.item.small} alt={item.item.name} />
                <h6>{item.item.name}</h6>

                </div>
                <div className="right">

                <p className={`badge ${item.item.data.price_change_percentage_24h.usd.toFixed(2) > 0 ? ' increase' : ' decrease'}`}>
                     {item.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            
                  </p>
                </div>
            </div> 
            <div className="item__rate">
                <h3>{item.item.data.total_volume}</h3>
            </div>
            <div className="item__graph">
            <img src={item.item.data.sparkline} alt={item.item.name}/>
            </div>
        </div>
    ))
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                initialSlide: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
          ]
      }
  return (
    <Slider className="carousel" {...settings}>
        {content}
    </Slider>
  )
}

export default LikedCarousel
