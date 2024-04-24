import {CartContextProvider} from './store/CartContext.jsx';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import {UserProgressContextProvider} from './store/UserProgressContext.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';



function App() {
  return (
     <Router>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Meals />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> 
          <Cart />
          <Checkout />
        </CartContextProvider>
      </UserProgressContextProvider>
    </Router> 
  );
}

export default App;




/*<UserProgressContextProvider>
     <CartContextProvider>
       <Header />  
         
       <Meals />
       <Cart />
       <Checkout />
     </CartContextProvider>
    </UserProgressContextProvider>
*/

