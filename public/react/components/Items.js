import React from 'react';

export const Item = ({item, fetchSingleItem}) => {
  return(
    <div onClick={()=> fetchSingleItem(item.id)} className='product'>
      <img src={item.image}/>
      <div className='product-content'>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
      </div>
  </div>
  ) 
} 
	