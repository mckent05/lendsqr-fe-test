import React from 'react'
import { CardList } from './CardContainer'

const CardDetails = ({logo, cardDesc, cardAmount}: CardList) => {
  return (
    <div className='card__details__cont'>
        <div className='card__details__img'>
            <img src={logo} />
        </div>
        <h4 className='card__details__desc'>{cardDesc}</h4>
        <h1 className='card__details__amount'>{cardAmount}</h1>
      
    </div>
  )
}

export default CardDetails
