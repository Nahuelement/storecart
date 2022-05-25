import { Box, Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts/ShopLayout';





const Custom404 = () => {
  return (
    <ShopLayout title={'Page not found'} pageDescription={'no hay nada que mostrar aqui'} >
    
            < Box   sx={{display:'flex',flexDirection:{xs:'column', sm:'row'},justifyContent:'center', alignItems:'center',height:'calc(100vh - 200px)'}}>
                <Typography variant='h1' component ='h1' fontSize={100} fontWeight={300}>404 |</Typography>
                <Typography marginLeft={2}>no hay nada en esta pagina</Typography>
            </Box>
        
     
    </ShopLayout>
    
  )
}

export default Custom404
