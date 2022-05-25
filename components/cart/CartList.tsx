import { Box, CardMedia, Grid, Link, Typography ,Button} from "@mui/material";
import { FC, useContext ,useState} from "react"
import { initialData } from '../../database/products';
import { IProduct } from '../../interface/products';
import NextLink from 'next/link'
import { ItemCounter } from "../ui";
import { ICartProduct } from '../../interface/cart';
import { CartContext } from '../../context/cart/CartContext';




interface Props {
    editable?:boolean
     products?:ICartProduct[]
    
}
export const CartList:FC<Props> = ({editable}) => {




const { cart } = useContext(CartContext)
    
  return (
      <>
    {
        cart.map((product,i) => (
            <Grid container key={i} spacing={2} sx={{mb:1}}>
                <Grid item xs={3} >
                    {/* LLEVAR A LA PAGINA DEL PRODUCTO */}
                    <NextLink href={`/products/${product.slug}`}passHref>
                        <Link>
                            <CardMedia
                                image={`/products/${product.image}`}
                                component='img'
                                sx={{borderRadius:'5px'}}/>
                        </Link>
                    </NextLink>
                </Grid>
                <Grid item xs={7} >
                    <Box display='flex'  flexDirection='column'  sx={{my: { xs: 2, sm: 3}}}>
                        <Typography variant="body1" >
                                {product.title}
                        </Typography>
                        <Typography variant="body1">
                                Talla: <strong>{product.size}</strong>
                        </Typography>
                        
                        {
                            editable
                                 ?
                            (<><hr/>
                             <ItemCounter 
                                currentValue={product.quantity} 
                                updateQuantity={()=>{}}
                                maxValue={product.inStock} /></>)
                                    :       
                                <Typography  sx={{mt:1}} variant="h5">{product.quantity}{product.quantity>1?'Productos':'Producto'}</Typography>
                        } 
                        
                    </Box>
                </Grid>
                <Grid item xs={2}  display='flex' alignItems='center'  flexDirection='column' sx={{my: { xs: 1, sm: 2},p:2}}>
                        <Typography variant="subtitle1">
                                {`$${product.price}`}
                        </Typography>

                        {editable && (
                            <Button variant="text" color="error">
                                Remover
                        </Button>

                        )}
                        
                </Grid>

            </Grid>
        )

        )
    }
    </>
  )
}
