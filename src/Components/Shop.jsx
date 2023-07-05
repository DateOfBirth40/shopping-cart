import React from 'react';
import Card from './Card';
import shoes from '../shoes';
import '../styles/Shop.css';

const Shop = () => {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  function addToCart(item) {
    setCart(prevCart => [...prevCart, {model: item.model, size: item.size}]);
    setTotal(current => current + item.price);
    // console.log(item.name);
  }

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
            cart={cart}
            total={total}
            addToCart={addToCart} />
          )}
      </div>
    </div>
  );
};

export default Shop;
