import { FC, useEffect, useReducer, useState } from 'react'
import { CartContext, cartReducer} from './';
import { ICartProduct } from '../../interface/cart';
import Cookie from 'js-cookie'


export interface CartState{
  cart:ICartProduct[]
  }

  export const CART_INITIAL_STATE: CartState = {
    cart: []
  }

interface Props {
  children:JSX.Element
}
export const CartProvider :FC<Props>= ({children}) => {
     const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

     useEffect(() => {

      const cookiesProducts =Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!):[]
      dispatch({type:'Cart - Load cart from cookies | storage', payload: cookiesProducts})
  
    }, [])

    useEffect(() => {
      Cookie.set('cart', JSON.stringify(state.cart))
     }, [state.cart])


    const addProductToCart = (product:ICartProduct) =>{

      const productInCart = state.cart.some(p => p._id ===product._id) //ENTREGA UN VALOR BOOLEANO QUE EXISTE O NO EL PRODUCTO
      if( !productInCart) return dispatch({type:'Cart -update products in cart', payload:[...state.cart, product]})

      const productIncartButDiferentSize = state.cart.some(p => p._id ===product._id && p.size ===product.size)
      if( !productIncartButDiferentSize) return dispatch({type:'Cart -update products in cart', payload:[...state.cart, product]})

      //Acumular
      const updateProduct = state.cart.map(p=>{
        if (p._id !== product._id) return p
        if(p.size !== product.size) return p

        //Actualizar la cantidad 
        p.quantity += product.quantity
        return p

      });
      dispatch({type:'Cart -update products in cart', payload: updateProduct})


}
  
  


   
    


    return (
    <CartContext.Provider value={{
          ...state,
          addProductToCart
        }}>
        {children}
     </CartContext.Provider>
    )
   }