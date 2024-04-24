import { createContext,useReducer,useState} from 'react';

////context where data state are 
const UserProgressContext =  createContext({
  progress: '' ,//cart. checkout
  showCart:()=>{},
  hideCart:()=>{},
  showCheckout:()=>{},
  hideCheckout:()=>{}
});



////provide context to all the components
export function UserProgressContextProvider({children}){
   const [userProgress,setUserProgress]=useState('');
   function showCart(){
    setUserProgress('cart');
   }
   function hideCart(){
    setUserProgress('');
   
   }
 
   function showCheckout(){
    setUserProgress('checkout');
   
   }
    function hideCheckout(){
    setUserProgress('');
   
   }
   const userProgressCtx ={
	  progress: userProgress,//cart. checkout
	  showCart,
	  hideCart,
	  showCheckout,
	  hideCheckout
  }
   
   
   
   return <UserProgressContext.Provider value={userProgressCtx} >{children}</UserProgressContext.Provider>

}

export default UserProgressContext;
