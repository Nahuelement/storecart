import { Grid, Typography } from "@mui/material"
import { FC } from "react"


export const OrdenSummary:FC = () => {
  return (
   <Grid container>
       <Grid item xs={6}>
           <Typography> No. Productos</Typography>
       </Grid>
       <Grid display='flex' justifyContent='flex-end'  item xs={6}>
           <Typography> 3</Typography>
       </Grid>
       <Grid item xs={6}>
           <Typography> Subtotal</Typography>
       </Grid>
       <Grid display='flex' justifyContent='flex-end'  item xs={6}>
           <Typography> $ 3.00</Typography>
       </Grid>
       <Grid item xs={6}>
           <Typography> Impuestos (15%)</Typography>
       </Grid>
       <Grid display='flex' justifyContent='flex-end'  item xs={6}>
           <Typography> $ 0.50</Typography>
       </Grid>
       <Grid item xs={6} sx={{mt:2}}>
           <Typography variant='subtitle1'> Total :</Typography>
       </Grid>
       <Grid display='flex' justifyContent='flex-end'  item xs={6} sx={{mt:2}}>
           <Typography variant='subtitle1'> $ 3.50</Typography>
       </Grid>
   </Grid>
  )
}
