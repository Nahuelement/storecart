
import { Box ,Button} from '@mui/material';
import React, { Dispatch, FC, SetStateAction } from 'react'
import { ICartProduct } from '../../interface';
import { ISizes } from '../../interface/products';

interface Props {
    selectedSize?:ISizes,
    sizes:ISizes[],
    onSelectedSide:(size:ISizes)=>void
    
}
export const SizeSelector :FC<Props>= ({selectedSize,sizes,onSelectedSide}) => {
  return (
    <Box>
            {
                sizes.map(size=>(
                    <Button
                        key={size}
                        onClick={(e)=>onSelectedSide(size)}
                        size='small'
                        color={selectedSize===size?'secondary':'primary'}
                        >
                            {size}
                        </Button>
                ))
            }
    </Box>
  )
}
