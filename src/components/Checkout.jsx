import logoImg from '../assets/logo.jpg';
import {useState,useContext} from 'react';
import Modal from './UI/Modal.jsx';
import CartContext from '../store/CartContext.jsx'; 
import {currencyFormatter} from '../util/formatting.js';
import UserProgressContext from '../store/UserProgressContext.jsx'; 
import Input from './UI/Input.jsx';
import Button from './UI/Button.jsx';
import useHttp from '../hooks/useHttp.js';
import Error from './Error.jsx';
 const requestConfig={
  method:'POST',
  headers:{'Content-Type':'application/json'},
 };

export default function Checkout(){
 const cartCtx= useContext(CartContext);
 const userProgressCtx=useContext(UserProgressContext);

 const {data,isLoading:isSending,error,sendRequest,clearData} =useHttp('http://localhost:3000/orders',requestConfig);
 
 const cartTotal=cartCtx.items.reduce((totalPrice, item)=>totalPrice + item.quantity* item.price, 0);
 
 
 
 function handleClose(){
  userProgressCtx.hideCheckout();
 }
 
 function handleFinish(){
 userProgressCtx.hideCheckout();
 cartCtx.clearCart();
 clearData();
 
 }
 
 
 function handleSubmit(event){
   event.preventDefault();
   const fd = new FormData(event.target);
   const customeData= Object.fromEntries(fd.entries());//{email:test@gmail.com}
   sendRequest(JSON.stringify({
   order:{
   items:cartCtx.items,
   customer:customeData
   }
    }));
 
 }
 let actions =(
    <>   
      <Button type="button" textOnly onClick={handleClose}>Close</Button>
      <Button > submit order</Button>
    </>);
 if(isSending){
  actions=<span>Sending order data...</span>
 }
 if(data && !error){
  return <Modal open={userProgressCtx.progress ==='checkout'} onClose={handleClose} >
           <h2>Success!</h2>
           <p>Your order was submitted successfully</p>
           <p>we will get back to you with more details via email within the next few minutes</p>
           <p className="modal-actions"><Button onClick={ handleFinish}>Okey</Button></p>
         </Modal>
 
 }    
      
 return (
  <Modal open={userProgressCtx.progress==='checkout'}>
  <form onSubmit={handleSubmit}>
    <h2>Checkout</h2>
    <p>Total Amount:{currencyFormatter.format(cartTotal)}</p>
     <Input label="Full Name"  type="text" id="name"/>
     <Input label="E-mail Address"  type="email" id="email"/>
     <Input label="street"  type="text" id="street"/>
     <div className="control-row">
        <Input label="Postal Code"  type="text" id="postal-code"/>
        <Input label="City"  type="text" id="city"/>
     </div>
     {error && <Error className="center" title="failed to submit order" message={error}/>}
     <p className="modal-actions">
     {actions}
     </p>
  </form>
  
  </Modal>
 )
 
}
