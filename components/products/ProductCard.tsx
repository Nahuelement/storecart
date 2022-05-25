import { Box, Card, CardActionArea, CardMedia, Chip, Grid, Link, Typography } from "@mui/material"
import { FC, useEffect, useMemo, useState } from "react";
import NextLink from 'next/link'
import { IProduct } from '../../interface/products';


interface Props{
    product:IProduct
}


export const ProductCard:FC<Props> = ({product}) => {

    const [isHovered, setIsHovered] = useState(false)
    const [isImagesLoaded, setIsImagesLoaded] = useState(false)

    

    const productImage = useMemo(()=>{
        return isHovered?
        `/products/${product.images[1] }`
        :
        `/products/${product.images[0] }`
    }, [isHovered, product.images])

    
  return (
    <Grid 
        item 
        xs={6} 
        sm= {4}
        onMouseEnter= { () =>setIsHovered(true)}
        onMouseLeave= { () =>setIsHovered(false)}
        >
    <Card>
        <NextLink href = {`/products/${product.slug}`}passHref prefetch={false}>
        <Link>
        <CardActionArea>
{

    (product.inStock===0) && <Chip
                                                    color="secondary"
                                                    label='No disponible'
                                                    sx={{
                                                        position:'absolute',
                                                        zIndex: 99,
                                                        top:'10px',
                                                        left:'10px'
                                                    }}
/>


}
        

            <CardMedia
                component='img'
                image = {productImage!}
                className="fadeIn"
                onLoad={ () => setIsImagesLoaded(true)}
            />
        </CardActionArea>
        </Link>
        </NextLink>
    </Card>
    <Box sx = {{mt: 1, display :isImagesLoaded ? 'block':'none'}} className='fadeIn' >
            <Typography fontWeight={400}>{product.title}</Typography>
            <Typography fontWeight={300}>{`$${product.price}`}</Typography>
        
    </Box>
</Grid>
  )
}
