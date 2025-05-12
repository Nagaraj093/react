import React,{useState} from 'react';
import Style from './color.css'

const Counter = () => {
    const [count, steCount] =useState(0);

    const increment = () => steCount(count+1);
    const decrement = () => steCount(count-1);

    return(
        <div>
            <h2>count:{count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            
        </div>
    );
};

export default Counter;