import React from 'react';
import ProductCard from './productCard';

const Card1 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?cs=srgb&dl=pexels-fotios-photos-1092644.jpg&fm=jpg"
        title="i phone"
        price="$59.99"
      />
    </div>
  );
};

export default Card1;