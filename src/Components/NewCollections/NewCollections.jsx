import React, { useEffect, useState } from 'react'
import './NewCollections.css'
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
    <div className='new-collections'>
      <h1> LATEST PICKS</h1>
      <div className="collections">
        {new_collection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
