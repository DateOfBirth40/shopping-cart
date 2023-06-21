import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import shoes from '../shoes';
import '../styles/Shop.css';

const shoeItems = shoes.map((shoe, index) =>
  <Card
   key={index}
   model={shoe.model}
   color={shoe.color}
   price={shoe.price}
   image={shoe.image} />
  );

const Shop = () => {
  const [cart, setCart] = React.useState('');
  return (
    <div>
      <Navbar />
      <div className='card-grid'>
        {shoeItems}
      </div>
    </div>
  );
};

export default Shop;
