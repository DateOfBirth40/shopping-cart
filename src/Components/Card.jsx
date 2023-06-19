import React from 'react';
import shoes from '../shoes';
import '../styles/Card.css';

export default function Card() {
  return (
    <div className='card'>
      <p className='model'>{shoes[0].model}</p>
      <div className='color-price'>
        <p className='color'>{`'${shoes[0].color}'`}</p>
        <p className='price'>{`$${shoes[0].price}`}</p>
      </div>
      <div className='image-div'>
        <img src={shoes[0].image} className='image' />
      </div>
    </div>
  )
}