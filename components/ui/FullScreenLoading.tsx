import { Box, CircularProgress, Slide, Typography } from '@mui/material'
import React from 'react'

export const FullScreenLoading = () => {
  return (
    < Box   sx={{display:'flex',flexDirection:{xs:'column'},justifyContent:'center', alignItems:'center',height:'calc(100vh - 200px)'}}>
        <Typography variant='h2' fontWeight={200}>
            Cargando...
        </Typography>
        <hr />
        <CircularProgress thickness={4} color='secondary' />
        </Box>
  )
}
