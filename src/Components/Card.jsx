import React from 'react';
import shoes from '../shoes';
import '../styles/Card.css';

export default function Card(props) {
  return (
    <div className='card'>
      <p className='model'>{props.model}</p>
      <div className='color-price'>
        <p className='color'>{`'${props.color}'`}</p>
        <p className='price'>{`$${props.price}`}</p>
      </div>
      <div className='image-div'>
        <img src={props.image} className='image' />
      </div>
    </div>
  )
}