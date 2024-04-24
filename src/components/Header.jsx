import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import {Link} from 'react-router-dom'
import {useContext} from 'react';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import './Header.css';

export default function Header(){
 const cartCtx=useContext(CartContext);
 const useProgressCtx =useContext(UserProgressContext);
 
 const totalCartItem =cartCtx.items.reduce((totalNumOfItems,item)=>{
     return totalNumOfItems +item.quantity;
 },0);
  console.log(Button);
  
  function handleShowCart(){
   useProgressCtx.showCart();
  }
 return (
 <header id="main-header"  >
    <div id="title">
     <img src={logoImg} alt= "A Bakery shop "/>
     <h1 >Grandpa John</h1>
    </div>
    <nav>
    
      <ul className="nav__links" >
          <li className="nav__item">
            <Link className="nav__link"to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/menu">Menu</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/about">About</Link>
          </li>
           <li className="nav__item">
            <Link className="nav__link" to="/contact">Contact</Link>
          </li>
        </ul>
    </nav>
    <nav>
      <Button textOnly onClick={handleShowCart}> Cart ({totalCartItem})</Button>
     </nav>
 </header>
 
 
 )
 
}




 
