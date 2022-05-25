import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../../components/layouts"
import NextLink from 'next/link';


const LoginPage = () => {
  return (
    <AuthLayout title={"Pagina de autificacion"}  >
            <Box sx ={{width:350, padding: '10px 20px'}}>
                <Grid container>
                    <Grid item xs={12} display='flex' justifyContent='center'>
                        <Typography variant='h1' component ='h1'>Iniciar Sesión</Typography>
                    </Grid>
                    <hr/>
                    <Grid item xs={12}>
                        <TextField label ='Correo electronico' variant='filled'  fullWidth/>
                    </Grid>
                    <Grid item xs={12} sx={{mt:1.5}}>
                        <TextField label ='Contraseña'  type='password' variant='filled'  fullWidth/>
                    </Grid>
                    <Grid item xs={12} sx={{mt:1.5}} >
                        <Button color='secondary' className='circular-btn' size='large' fullWidth>
                                Ingresar
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{mt:1}} display='flex' justifyContent='flex-end'>
                        <NextLink href='/auth/register' passHref>
                            <Link
                            underline="always"
                            >¿No tienes cuenta?</Link>
                        </NextLink>
                    </Grid>

                    

                </Grid>
            </Box>
    </AuthLayout>
  )
}

export default LoginPage