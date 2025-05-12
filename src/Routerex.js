import React from 'react';
import Card1 from './card1';
import Card2 from './card2';



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <div style={{display:"flex",justifyContent:"left",flexDirection:"column",alignContent:"space-between"}}>
    <Card1 />
    <Card2 />
   <Card1 />
    
    
   
    </div>
}
function About() {
  return<h1>  ℹ️  Rathan tata become the chairman of tata group</h1>
  
}

function Contact() {
  return <h2>📞<font color="red"> yaseen :8147099034</font> <br></br>
                  nadish:7676839917<br></br>
                  karthik:9632287530</h2>;
                
                  
}

function Routerex() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Routerex;