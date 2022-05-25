import { UiState } from './';     //TIPADO



type UiActionType = 
{type:'Ui - ToggleMenu'}



export const uiReducer = (state:UiState, action:UiActionType) :UiState=> {//ESTADO -ACCION-NUEVO ESTADO//NO PUEDE SER ASYNC

    switch (action.type) {
      case 'Ui - ToggleMenu':
    return{
    ...state,
    sidemenuOpen: !state.sidemenuOpen,
    }


    default:
      return state;
    }
     }