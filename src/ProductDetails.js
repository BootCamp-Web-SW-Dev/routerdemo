import React from 'react';
import { useParams} from 'react-router';

function ProductDetails() {
    const {productId} = useParams();
  return (
    <div>
       Product details of {productId}
    </div>
  );
}

export default ProductDetails;