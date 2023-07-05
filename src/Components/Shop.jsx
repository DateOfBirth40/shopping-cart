import React from 'react';
import Card from './Card';
import shoes from '../shoes';
import '../styles/Shop.css';

const Shop = ({ cart, total, addToCart }) => {
  console.log('Cart: ', cart);
  console.log(total);

  return (
    <div>
      <div className='card-grid'>
        {shoes.map((shoe, index) =>
          <Card
            key={index}
            model={shoe.model}
            color={shoe.color}
            price={shoe.price}
            image={shoe.image}
            addToCart={addToCart} />
          )}
      </div>
    </div>
  );
};

export default Shop;
