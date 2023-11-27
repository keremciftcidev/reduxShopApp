import React from 'react'
import { FaChevronUp,FaChevronDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem,increase,decrease } from '../control/shopSlice';



function ShopItem({id,title,price,img,quantity}) {
  const dispatch = useDispatch()
  return (
  <div className='cartItem'>
    <img className='cartImg' src={img} alt="" />
    <div className='cartInfo'>
        <h4>{title}</h4>
        <h4>{price}$</h4>
        <div>
            <button className='cartQuantityButton'>
            <FaChevronUp onClick={()=>[dispatch(increase(id))]} />
            </button>
            <p className='cartQuantity'>{quantity}</p>
            <button className='cartQuantityButton'>
                <FaChevronDown onClick={()=>[dispatch(decrease(id))]}/>
            </button>
        </div>
        <button className='cartDeleteButton' onClick={()=>{dispatch(removeItem(id))}}> 
        Clear
    </button>
    </div>
   
  </div>
  )
}

export default ShopItem