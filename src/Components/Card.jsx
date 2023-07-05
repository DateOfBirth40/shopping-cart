import React from 'react';
import shoes from '../shoes';
import '../styles/Card.css';

export default function Card({ model, color, price, image, addToCart }) {
  // Create a state that controls the size of the shoe and adding it to cart
  // Maybe create an object that contains size, price, and boolean if it is in cart or not
  const [size, setSize] = React.useState('');

  const handleSize = (e) => {
    setSize(e.target.value);
  }
  // console.log(size);

  const handleClick = () => {
    addToCart({
      model: model,
      size: size,
      price: price
    })
  }

  return (
    <div className='card'>
      <p className='model'>{model}</p>
      <div className='color-price'>
        <p className='color'>{`'${color}'`}</p>
        <p className='price'>{`$${price}`}</p>
      </div>
      <div className='image-div'>
        <img src={image} className='image' />
      </div>
      <div className='card--buttons'>
        <select onChange={handleSize} className='card--select'>
          <option value='' selected disabled>Size</option>
          <option value='3.5' key='3.5'>3.5</option>
          <option value='4' key='4'>4</option>
          <option value='4.5' key='4.5'>4.5</option>
          <option value='5' key='5'>5</option>
          <option value='5.5' key='5.5'>5.5</option>
          <option value='6' key='6'>6</option>
          <option value='6.5' key='6.5'>6.5</option>
          <option value='7' key='7'>7</option>
          <option value='7.5' key='7.5'>7.5</option>
          <option value='8' key='8'>8</option>
          <option value='8.5' key='8.5'>8.5</option>
          <option value='9' key='9'>9</option>
          <option value='9.5' key='9.5'>9.5</option>
          <option value='10' key='10'>10</option>
          <option value='10.5' key='10.5'>10.5</option>
          <option value='11' key='11'>11</option>
          <option value='11.5' key='11.5'>11.5</option>
          <option value='12' key='12'>12</option>
          <option value='12.5' key='12.5'>12.5</option>
          <option value='13' key='13'>13</option>
          <option value='14' key='14'>14</option>
          <option value='15' key='15'>15</option>
        </select>
        <button className='add-to-cart' onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  )
}
