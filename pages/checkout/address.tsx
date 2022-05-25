import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography ,Box, Button} from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layouts'

const AddressPage = () => {
  return (
    <ShopLayout title={'direccion'} pageDescription={'confirmar direccion de destino'}>
        <>
        <Typography variant='h1' component='h1'>
                Direccion
        </Typography>
        <Grid container  spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField label='Nombre' variant='filled'    fullWidth  sx={{my:1}} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField label='Apellido' variant='filled'    fullWidth  sx={{my:1}} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField label='Direccion' variant='filled'    fullWidth  sx={{my:1}} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField label='Direccion2' variant='filled'    fullWidth  sx={{my:1}} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField label='Codigo Postal' variant='filled'    fullWidth  sx={{my:1}} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField label='Ciudad' variant='filled'    fullWidth  sx={{my:1}} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{my:1}}>
                    <InputLabel>Pais</InputLabel>
                    <Select 
                            variant='filled'
                            label='Pais'
                            value = {1}
                            >
                                <MenuItem value={1}>Chile</MenuItem>
                                <MenuItem value={2}>Argentina</MenuItem>
                                <MenuItem value={3}>Mexico</MenuItem>
                                <MenuItem value={4}>Honduras</MenuItem>
                                <MenuItem value={5}>El salvador</MenuItem>

                            </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField label='Telefeno' variant='filled'    fullWidth  sx={{my:1}} />
            </Grid>
        </Grid>
        <Box sx={{mt:5}} display='flex' justifyContent='center'>
            <Button
            color='secondary' className ='circular-btn' size='large' >
                Realizar pedido
            </Button>
        </Box>
        </>
    </ShopLayout>
  )
}

export default AddressPage