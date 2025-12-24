import React from 'react';
import Item from '../Items/Item';
import './Relatedproducts.css';
import data_product from '../Assets/data'; // ✅ Keep only one import

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Similar Products</h1>

      <div className="items">
        {data_product.map((item) => (
          <Item
            key={item.id} // ✅ Add key prop
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
