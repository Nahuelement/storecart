import { ICartProduct } from '../../interface';
import { CartState } from './';     //TIPADO




type CartActionType = 
{type:'Cart - Load cart from cookies | storage', payload: ICartProduct[]}
|  {type:'Cart -update products in cart' , payload: ICartProduct[]}


export const cartReducer = (state:CartState, action:CartActionType) :CartState=> {//ESTADO -ACCION-NUEVO ESTADO//NO PUEDE SER ASYNC

    switch (action.type) {
      case 'Cart - Load cart from cookies | storage':
        return{
        ...state,
        cart :action.payload
        }

   case 'Cart -update products in cart':

    // const existing = state.cart.findIndex( (item) => item._id === action.payload._id && item.size === action.payload.size)
    // if (existing !== -1) {
    //         state.cart[existing].quantity = action.payload.quantity 
    //         return{
    //             ...state
    //         } 
        
    //     }   
    //     return{
    //         ...state,
    //         cart:[...state.cart,action.payload]
    //    }
    return {
        ...state,
        cart : [...action.payload]
    }
      

    default:
      return state;
    }
     }