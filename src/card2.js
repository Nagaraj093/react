import React from 'react';
import ProductCard from './productCard';

const Card2 = () => {
  return (
    <div style={{ padding: 40}}>
      <ProductCard
        image="https://media.istockphoto.com/id/1403433494/photo/phone-in-hand-with-a-photo-of-the-forest.jpg?s=612x612&w=0&k=20&c=rPUBlYhWfqeRDAhpsTB9d-K3FF29xcXzs9HTYamqVlM="
        title="apple phone"
        color="red"
        price="$59.99"
      />
    </div>
  );
};

export default Card2;