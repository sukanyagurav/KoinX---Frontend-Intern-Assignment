import React from 'react'
import './TeamCard.css'
const TeamCard = ({name,img,description}) => {
  return (
    <article className='user'>
      <img src={img} alt={name} className="user__image" />
      <h5 className='user__name'>{name}</h5>
      <span className='user__designation'>Designation here</span>
      <p  className='user__description'>{description}</p>
    </article>
  )
}

export default TeamCard
