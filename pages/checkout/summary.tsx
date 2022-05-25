import { Button, Card, CardContent, Divider, Grid, Link, Typography ,Box} from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { CartList, OrdenSummary } from '../../components/cart';
import NextLink from 'next/link'


const SummaryPage = () => {
  return (
    <ShopLayout title={"resumen de la compra"} pageDescription={"Resumen de la orden"} >
        <>
        <Typography variant = 'h1' component='h1'>Resumen de la orden</Typography>

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
                                <Box>
                                        <Button sx={{my:1}} color='secondary' className = 'circular-btn' fullWidth >
                                            Ckeckout
                                        </Button>
                                </Box>
                            </CardContent>

                        </Card>
                    
                </Grid>
        </Grid>

        </>

    </ShopLayout>
  )
}

export default SummaryPage