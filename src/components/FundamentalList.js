import React from 'react'

const FundamentalList = ({title,value,high,description,highClass}) => {
  return (
    <li>
        <span className='fundamental__title'>{title}</span> 
        <div className='fundamental__value'><span>{value} {high && <span  className={highClass}>{high}</span>}</span>
        {description && <span className='fundamental__value-description'>{description}</span>}
        </div>
    </li>
  )
}

export default FundamentalList
