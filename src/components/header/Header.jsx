import {useState} from 'react';
import logoImg from '../../assets/logo.png';
import login from '../../assets/user-account.png';
import Button from '../UI/Button.jsx';
import {Link} from 'react-router-dom'
import {useContext} from 'react';
import CartContext from '../../store/CartContext.jsx';
import UserProgressContext from '../../store/UserProgressContext.jsx';
import './Header.css';
import LoginPage from  '../auth/Login.jsx';
import Modal from '../UI/Modal.jsx';

export default function Header(){
 const cartCtx=useContext(CartContext);
 const useProgressCtx =useContext(UserProgressContext);
 const [isloginOpen, setIsloginOpen]=useState(false);
 const totalCartItem =cartCtx.items.reduce((totalNumOfItems,item)=>{
     return totalNumOfItems +item.quantity;
 },0);
  console.log(Button);
  
  function handleShowCart(){
   useProgressCtx.showCart();
  }
  
  function openLogin() {
   setIsloginOpen(true);
  }

  function closeLogin() {
    setIsloginOpen(false);
  }
  
  
 return (
 <header className="header"  >
    <div className="webtitle">
     <img src={logoImg} className="logo headerImg" alt= "A Bakery shop " />
     <h1 >Grandpa John</h1>
    </div>
    <div className="navbar">
         <Link to="/" >Home</Link>         
         <Link  to="/menu">Menu</Link>        
         <Link  to="/about" >About</Link>        
         <Link to="/contact">Contact</Link>     
    </div>
    <div className="loginIconandCart">
      <img src={login} onClick={openLogin}/>
       {isloginOpen && <LoginPage 
			       isloginOpen={isloginOpen} 
			       openLogin={openLogin} 
			       onClose={closeLogin} />}
      <Button className="buttonCart" textOnly onClick={handleShowCart}> Cart ({totalCartItem})</Button>
     </div>
 </header>
 
 
 )
 
}


  


 
