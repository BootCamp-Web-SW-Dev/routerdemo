import React from 'react';
import { Link , Outlet} from 'react-router-dom';


function Product() {
  
  return (
    <div>
       <h1>Hello Product </h1>
       <hr/>
        <div>
            <Outlet/>
        </div>
    </div>
  );
}

export default Product;