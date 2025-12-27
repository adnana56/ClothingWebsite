import React from 'react';
import Item from '../Items/Item';
import data_product from '../Assets/data';

const RelatedProducts = () => {
  return (
    <div className='flex flex-col items-center gap-2.5 h-auto mb-24 px-4'>
      <h1 className='text-[#171717] text-3xl md:text-5xl font-semibold uppercase text-center mt-12'>Similar Products</h1>
      <hr className='w-32 md:w-52 h-1.5 rounded bg-[#252525] mb-8' />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {data_product.map((item) => (
          <Item
            key={item.id}
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
