
import { createContext } from 'react';


interface ContextProps{
   sidemenuOpen : boolean,
   toggleSideMenu: () => void
    }

export const UiContext=createContext({} as ContextProps)