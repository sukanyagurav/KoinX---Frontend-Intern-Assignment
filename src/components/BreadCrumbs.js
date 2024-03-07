import React from 'react'
import './BreadCrumbs.css'
import {Link} from 'react-router-dom'
const BreadCrumbs = () => {
  return (
    <>
      <ul className="breadCrumbs">
        <li>
            <Link>Cryptocurrencies</Link>
        </li>
        <li className='active'>
            <Link>BitCoin</Link>
        </li>
      </ul>
    </>
  )
}

export default BreadCrumbs
