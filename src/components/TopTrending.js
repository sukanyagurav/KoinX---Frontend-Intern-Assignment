import React from 'react'
import { useResultContext } from "./Result"
import './TrendingCoins.css'
import Card from './Card'
const TopTrending = () => {
    const {results} = useResultContext()
    const top_three = results.slice(0,3)
    const content = top_three.map(item=>(
        <li key={item.item.coin_id
        }>
        <img src={item.item.small} alt={item.item.name}/>
        <h4>{item.item.name}</h4>
        <p className={`badge ${item.item.data.price_change_percentage_24h.usd.toFixed(2) > 0 ? ' increase' : ' decrease'}`}>
            {item.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            
            </p>
        </li>
    ))
    
  return (
    <Card className='trending__coins'>
      <h2>Trending Coins(24h)</h2>
        <ul className="trending__container">
            {content}
        </ul>
    </Card>
  )
}

export default TopTrending
  