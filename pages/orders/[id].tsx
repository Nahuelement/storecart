import { Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { ShopLayout } from "../../components/layouts"
import { CartList, OrdenSummary } from '../../components/cart';
import NextLink from 'next/link'
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material";


const OrderPage = () => {
  return (
    <ShopLayout title={"resumen de la orden 237438264"} pageDescription={"Resumen de la orden"} >
        <>
        <Typography variant = 'h1' component='h1'>Orden: anbd372438</Typography>
            <Box display='flex' justifyContent='center'>
            <Chip
                        sx={{my:2 }}
                        label='pendiente de pago'
                        variant = 'outlined'
                        color = 'error'
                        icon = {<CreditCardOffOutlined />}
                        />
            <Chip
                        sx={{my:2 }}
                        label='Pago realizado'
                        variant = 'outlined'
                        color = 'success'
                        icon = {<CreditScoreOutlined />}
                        />
            </Box>
        
        <Grid container spacing={2}>
                <Grid item xs = {12} sm = {7}>
                    {/* CartList */}
                    <CartList />
                </Grid>
                <Grid item xs = {12} sm = {5} >
                        <Card className = 'summary-card' >
                            <CardContent>
                                <Typography variant="h2">
                                    Resumen (3 procutos)
                                </Typography>
                                
                                <Divider sx = {{my:1}}/>
                                <Box display='flex' justifyContent='space-between'>
                                <Typography variant='subtitle1'>Direccion de entrega</Typography>
                                    <NextLink href='/checkout/address' passHref>
                                        <Link underline='hover'>
                                            Editar
                                        </Link>
                                    </NextLink>
                                </Box>
                                
                                <Typography >Nahuel</Typography>
                                <Typography >Perugi</Typography>
                                <Typography >Gran avenida 1671</Typography>
                                <Typography >Coquimbo</Typography>
                                <Typography >Chile</Typography>
                                <Divider sx = {{my:1}}/>
                                {/* ordenSumamary */}
                                <Box display='flex' justifyContent='flex-end'>
                                    <NextLink href='/cart' passHref>
                                        <Link underline='hover'>
                                            Editar
                                        </Link>
                                    </NextLink>
                                </Box>
                                
                                <OrdenSummary/>
                                <Box sx={{mt:3}}>
                                    <h1>Pagar</h1>
                                    <Chip
                                        sx={{my:2 }}
                                        label='Pago realizado'
                                        variant = 'outlined'
                                        color = 'success'
                                        icon = {<CreditScoreOutlined />}
                                        />
                                                        {/* <Button sx={{my:1}} color='secondary' className = 'circular-btn' fullWidth >
                                            Ckeckout
                                        </Button> */}
                                </Box>
                            </CardContent>

                        </Card>
                    
                </Grid>
        </Grid>

        </>

    </ShopLayout>
  )
}

export default OrderPage