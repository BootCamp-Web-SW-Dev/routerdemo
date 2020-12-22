import React from 'react';
import About from './About';
import Home from './Home';
import Product from './Product';
import ProductDetails from "./ProductDetails";
import ProductHome from './ProductHome';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

function NotFound(){
  return <div>Path not Found </div>
}
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <b>Welcome</b>
      <br></br>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/product">Product</Link>
       <Link to="/product/mobile">Mobile</Link>
       <Link to="/product/laptop">Laptop</Link>
       <button onClick={()=>{
             navigate('/about');
       }}>
             Display About Page
       </button>
       
       <div>
     
        <Routes>
           <Route path="/"  exact element={<Home/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/product" element={<Product/>} >
               <Route path="/" element={<ProductHome/>}></Route>
               <Route path=":productId" element={<ProductDetails/>}></Route>
           </Route>
           
           <Route path='*' component={<NotFound/>} />
         </Routes>
      
      </div>     
    </div>
  );
}

export default App;
