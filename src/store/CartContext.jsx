import { createContext,useReducer} from 'react';

////context where data state are 
const CartContext =  createContext({
   items:[],
   addItem:(item)=>{},
   removeItem:(id)=>{},
   clearCart:()=>{}
});

//////logic of 
function cartReducer(state,action){
 if(action.type ==='ADD_ITEM'){
   const existingCartItemIndex = state.items.findIndex((item)=>item.id===action.item.id);
   const updateItems =[...state.items];//copy the old items, previous array
 
   if (existingCartItemIndex >-1){
       const  existingItem = state.items[existingCartItemIndex]
       const updateItem ={
	       ...state.items[existingCartItemIndex],
	       quantity:state.items[existingCartItemIndex].quantity +1
	     };
       updateItems[existingCartItemIndex] = updateItem	   
   }else{
     updateItems.push({...action.item, quantity:1});
   }
   
   return {...state, items:updateItems};
 }
 
 
 if(action.type ==='REMOVE_ITEM'){
    const existingCartItemIndex = state.items.findIndex((item)=>item.id===action.id);
    const exsistingCartItem =state.items[existingCartItemIndex];
    const updatedItems =[...state.items]
   
    if(exsistingCartItem.quantity ===1){
    
      updatedItems.splice(existingCartItemIndex,1);
    }else{
      const updatedItem ={
      ...exsistingCartItem, 
      quantity:exsistingCartItem.quantity -1,
      };
      updatedItems[existingCartItemIndex]=updatedItem;
    }
    
    return {...state, items:updatedItems}; 
 }
 
 if(action.type ==='CLEAR_CART'){
   return {...state, items:[]}
 
 }

 return state;

}


////provide context to all the components
export function CartContextProvider({children}){
   const [cart, dispatchCartAction]= useReducer(cartReducer,{items:[]});

   
   
   function addItem(item){
    dispatchCartAction({type:'ADD_ITEM',item});
   }
   function removeItem(id){
   dispatchCartAction({type:'REMOVE_ITEM',id});
   }
   
   function clearCart(){
   dispatchCartAction({type:'CLEAR_CART'});
   }
   
   const cartContext ={
   items:cart.items,
   addItem,
   removeItem,
   clearCart
   }
   console.log(cartContext);
   return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>

}

export default CartContext;
