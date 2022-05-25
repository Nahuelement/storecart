import { createContext } from 'react';
import { ICartProduct } from '../../interface';



interface ContextProps{
   cart : ICartProduct[],
   addProductToCart:(cart:ICartProduct)=>void
    }

export const CartContext=createContext({} as ContextProps)