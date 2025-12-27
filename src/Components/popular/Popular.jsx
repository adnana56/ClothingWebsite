import React, { useEffect, useState } from 'react'
import Item from '../Items/Item'
import BACKEND_URL from '../../config'
import data_product from '../Assets/data'

function Popular() {
  const [popularProducts, setPopularProducts] = useState(data_product);

  useEffect(() => {
    fetch(`${BACKEND_URL}/popularinwomen`)
      .then((response) => response.json())
      .then((data) => setPopularProducts(data))
      .catch((error) => console.log("Backend unavailable, using local data for Popular", error));
  }, [])

  return (
    <div className='flex flex-col items-center gap-2.5 h-auto mb-12 md:mb-0'>
      <h1 className='text-[#171717] text-3xl md:text-5xl font-semibold mt-12 text-center'>POPULAR IN WOMEN</h1>
      <hr className='w-32 md:w-52 h-1.5 rounded bg-[#252525]' />
      <div className='mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-items-center w-full px-4 max-w-[1280px]'>
        {popularProducts
          .filter((item, index, self) =>
            index === self.findIndex((t) => t.image === item.image)
          )
          .slice(0, 4)
          .map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}
      </div>
    </div>
  )
}

export default Popular
