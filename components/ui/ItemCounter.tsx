import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { FC } from "react"


interface Props{
  currentValue:number,
  updateQuantity:(value:number)=>void,
  maxValue:number

}

export const ItemCounter:FC<Props> = ({currentValue,updateQuantity,maxValue}) => {

  const addOrRemove= (value:number) =>{
    if (value===-1){
      if(currentValue ===1) return
      return updateQuantity(currentValue-1)

    }
    if(currentValue===maxValue) return
    return updateQuantity(currentValue+1)


  }

  return (
    <Box display='flex' alignItems='center'>
        <IconButton
        onClick={()=>addOrRemove(-1)}
        disabled={(currentValue===0)}
        >
                <RemoveCircleOutline />
        </IconButton>
        <Typography sx={{ width: 40, textAlign:'center'}}>
            {currentValue}
        </Typography>
        <IconButton
        onClick={()=>addOrRemove(1)}
        disabled={(maxValue===currentValue)}
        >
                <AddCircleOutline />
        </IconButton >
    </Box>
  )
}
