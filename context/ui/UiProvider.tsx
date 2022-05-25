import { FC, useReducer } from 'react'
import { UiContext ,uiReducer} from './'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface Props{
    children:JSX.Element
}
export interface UiState{
  sidemenuOpen:boolean
  }
const Ui_INITIAL_STATE:UiState ={
    sidemenuOpen:false
   }

 
export const UiProvider :FC<Props>= ({children}) => {


     const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE)

    const toggleSideMenu = () =>{
        dispatch({type:'Ui - ToggleMenu'})
    }


    return (
    <UiContext.Provider value={{
          ...state,
          //METHOD
          toggleSideMenu
        }}>
        {children}  
     </UiContext.Provider>
    )
   }