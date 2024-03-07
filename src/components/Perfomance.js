import React from 'react'
import './Perfomance.css'
const Perfomance = ({labelLow,labelHigh,pointer,lowValue,highValue}) => {
  return (
    <div className="perfomance">
      <div className="left">
        <span className='title'>{labelLow}</span>
        <span>{lowValue}</span>
      </div>
      <div className="middle">
        <div className="bar__container">
            <div className="bar"></div>
            {pointer && <div className="pointer">
                
                <span className="pointerValue"><div className="arrow"></div> {pointer}</span>
                </div>}
        </div>
      </div>
      <div className="right">
        <span className='title'>{labelHigh}</span>
        <span>{highValue}</span>
      </div>
    </div>
  )
}

export default Perfomance
