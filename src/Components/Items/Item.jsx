import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {
  // DEBUG LOGGING
  // console.log(`Item id:${props.id} name:${props.name} image:${props.image}`);

  let imageSrc = props.image;

  // If it's a filename from DB, assume it's in public/images/
  if (imageSrc && !imageSrc.startsWith('http') && !imageSrc.startsWith('/') && !imageSrc.startsWith('static')) {
    imageSrc = `/images/${imageSrc}`;
  }

  // Fallback
  if (!imageSrc) {
    imageSrc = '/images/p1_product.png';
  }

  // Handle ES Module default export if necessary (for newer Webpack/React setups)
  if (imageSrc && typeof imageSrc === 'object' && imageSrc.default) {
    imageSrc = imageSrc.default;
  }

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={imageSrc}
          alt={props.name}
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ₹{props.new_price}
        </div>
        <div className="item-price-old">
          ₹{props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item