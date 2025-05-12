import React from 'react';
import './product.css';

function Product() {
    return (
        <div className="container">
            <h1> css positing task</h1>
            
            <div className ="card" >
                <img src="data:image/png;base64,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" alt="product"/>
                <h3>Redmi 13 pro max</h3>
                <p className="price">$99.99</p>
            </div>
        </div>
    );
}

export default Product;

