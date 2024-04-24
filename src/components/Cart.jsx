
import React, { useContext } from 'react';
import Modal from './UI/Modal.jsx';
import {currencyFormatter} from '../util/formatting.js';
import CartContext from '../store/CartContext.jsx';
import Button from './UI/Button.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import CartItem from './CartItem.jsx';
export default function Cart(){
  
  const cartCtx= useContext(CartContext);
  const userprogressCtx= useContext(UserProgressContext);
  const cartTotal=cartCtx.items.reduce((totalPrice, item)=>totalPrice + item.quantity* item.price, 0);
  
  function handleCloseCart(){
   userprogressCtx.hideCart();
  }
   function handleGotoCheckOut(){
   userprogressCtx.showCheckout();
  }
  

  return (
  <Modal className="cart" open={userprogressCtx.progress==='cart'} 
         onClose={userprogressCtx.progress === 'cart' ? handleCloseCart :null}>
   <h2>Your Cart</h2>
   <ul>
     {cartCtx.items.map(item =>
      <CartItem  key={item.id} 
	         name={item.name} 
	         quantity={item.quantity} 
	         price={item.price} 
	         onIncrease={()=>cartCtx.addItem(item)}
	         onDecrease={()=>cartCtx.removeItem(item.id)}/>
     )}
   </ul>
   <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
   <p className="modal-actions">
    <Button textOnly onClick={handleCloseCart}> Close</Button>
    {cartCtx.items.length>0 && <Button onClick={handleGotoCheckOut}> Go to checkout</Button>}
   </p>
  </Modal>)

}
