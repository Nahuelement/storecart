import { Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { ShopLayout } from "../../components/layouts"
import { CartList, OrdenSummary } from '../../components/cart';
import { useContext } from "react";
import { CartContext } from "../../context";



const CartPage = () => {

   
  return (
    <ShopLayout title={"Carrito - 3"} pageDescription={"Carrito de compra de la tienda"} >
        <>
        <Typography variant = 'h1' component='h1'>Carrito</Typography>

        <Grid container spacing={2}>
                <Grid item xs = {12} sm = {7}>
                    {/* CartList */}
                    <CartList editable />
                </Grid>
                <Grid item xs = {12} sm = {5} >
                        <Card className = 'summary-card' >
                            <CardContent>
                                <Typography variant="h2">
                                    Orden
                                </Typography>
                                <Divider sx = {{my:1}}/>

                                {/* ordenSumamary */}
                                
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

export default CartPage