import React, { useEffect, useState } from 'react'
import Item from '../Items/Item'
import new_collections from '../Assets/new_collections'
import BACKEND_URL from '../../config'

const NewCollections = () => {
  const [new_collection, setNew_collection] = useState(new_collections);

  useEffect(() => {
    fetch(`${BACKEND_URL}/newcollections`)
      .then((response) => response.json())
      .then((data) => setNew_collection(data))
      .catch((error) => console.log("Backend unavailable, using local data for New Collections", error));
  }, [])

  return (
    <div className='flex flex-col items-center gap-2.5 mb-24 px-4'>
      <h1 className='text-[#171717] text-3xl md:text-5xl font-semibold uppercase text-center mt-10'>Latest Picks</h1>
      <hr className='w-32 md:w-52 h-1.5 rounded bg-[#252525] mb-10' />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center w-full max-w-[1280px]">
        {new_collection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
