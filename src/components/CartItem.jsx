
import {useState,useEffect,useContext} from 'react';
import {currencyFormatter} from '../util/formatting.js';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
export default function CartItem({name,quantity,price,item,onIncrease,onDecrease}){
 
 return (
  
  <li className="cart-item">
   
    <p >
     {name}-{quantity}*{currencyFormatter.format(price)}
    </p>
    <p className="cart-item-actions">
     <button onClick={onDecrease}>-</button>
     <span>{quantity}</span>
     <button  onClick={onIncrease}>+</button>
    </p>
   
  
   </li>
  
 );
 
}
