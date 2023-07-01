import React from 'react'

export const Product = (props) => {
 
  const {id,productName,price,productImage}= props.data;
    
 return <div className='product'>
    <img src={productImage}/>
    <div className='description'>
        <p>
            <b>{productName}</b>
        <p>₹{price}</p>
        </p>
    </div>
    <button className='addToCartBttn'>Add To cart</button>
 </div>
  
}


