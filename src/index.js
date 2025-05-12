import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from './product';
import ProductCard from './productCard';
import Card1 from './card1';
import Card2 from './card2';
import Routerex from './Routerex';
import Counter from './counter';
import OnOff from './onOff';
import NameChanger from './NameChange';
import DelayedAlert from './DelayedAlert';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{display:"flex",justifyContent:"center",flexDirection:"row"}}>
          <OnOff/>
          <NameChanger/>
         <DelayedAlert/>
         </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
