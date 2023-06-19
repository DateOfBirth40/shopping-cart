import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import shoes from '../shoes';

const shoeItems = shoes.map((shoe, index) =>
  <Card
   key={index}
   model={shoe.model}
   color={shoe.color}
   price={shoe.price}
   image={shoe.image} />
  );

const Shop = () => {
  return (
    <div>
      <Navbar />
      {shoeItems}
    </div>
  );
};

export default Shop;
