import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import NextLink from 'next/link'

const empty = () => {
  return (
    <ShopLayout title={'carrito vacio'} pageDescription={'no hay articulos en el carrito'} >
<>
< Box   sx={{display:'flex',flexDirection:{xs:'column', sm:'row'},justifyContent:'center', alignItems:'center',height:'calc(100vh - 200px)'}}>
               <RemoveShoppingCartOutlined sx = {{fontSize:100}}/>
                <Box display='flex' flexDirection='column' alignItems='center'>
                        <Typography marginLeft={2}>Su carrito está vació</Typography>
                        <NextLink href='/' passHref>
                            <Link typography='h4' color='secondary'>
                                Regresar
                            </Link>
                            
                        </NextLink>
                </Box>
</Box>
</>
    </ShopLayout>
  )
}

export default empty