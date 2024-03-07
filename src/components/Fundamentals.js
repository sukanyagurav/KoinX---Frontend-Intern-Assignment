import React from 'react'
import FundamentalList from './FundamentalList'
import './Fundamentals.css'
const Fundamentals = () => {
  return (
    <div className='fundamentals'>
        <h3>Fundamentals</h3>
      <ul>

        <FundamentalList title='BitCoin Price' value='$19,815.46' />
        <FundamentalList title='24h Low / 24h High' value='$16,382.07 / $16,874.12' />
        <FundamentalList title='7d Low / 7d High' value='$16,382.07 / $16,874.12' />
        <FundamentalList title='Trading Volume' value='$23,249,202,782' />
        <FundamentalList title='Market Cap Rank' value='#1' />

        <FundamentalList title='Market Cap' value='#323,507,290,047' />
        <FundamentalList title='Market Cap Dominance' value='38.343%' />
        <FundamentalList title='Volume / Market Cap' value='0.0718' />
        <FundamentalList title='All-Time High' value='0.0718' high='-75.6%' highClass="high" description='Nov 10,2021 (about 1 year)' />

        <FundamentalList title='All-Time Low' value='0.0718' high='24729.1%' highClass="green" description='Jul 06,2013 (over 9 years)' />
      </ul>
    </div>
  )
}

export default Fundamentals
