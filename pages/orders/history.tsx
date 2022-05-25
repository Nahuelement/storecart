import { Chip, Grid, Typography,Link } from '@mui/material';
import { DataGrid ,GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import React from 'react'
import { ShopLayout } from '../../components/layouts/ShopLayout';
import NextLink from 'next/link'



const columns : GridColDef[] = [
  {field: 'id', headerName:'ID', width:100},
  {field: 'fullname', headerName:'Nombre Completo', width:300},
  {
      field:'paid',
      headerName:'pagada',
      description: 'Muestra informacion si esta pagada',
      width:200,
      renderCell:(params:GridValueGetterParams)=>{
        return (
            params.row.paid ? 
            <Chip color ='success' label='pagada' variant= 'filled' />:
            <Chip color ='error' label='no pagada' variant= 'outlined' />
        )
      }
  },
  {
    field:'order',
    headerName:'orden',
    description: 'informacion del producto',
    width:200,
    renderCell:(params:GridValueGetterParams)=>{
      return (
         
          <NextLink href={`/orders/${params.row.id}`} passHref >
                <Link>
                ver orden
                </Link>
          </NextLink>
      
      )
    }
}
]

const rows = [
{id:1 ,fullname :'Nahuel Perugi',paid:false}, 
{id:2 ,fullname :'Nahuel Perugi',paid:true}, 
{id:3 ,fullname :'Nahuel Perugi',paid:false}, 
{id:4 ,fullname :'Nahuel Perugi',paid:true}, 
{id:5 ,fullname :'Nahuel Perugi',paid:true}, 
{id:6 ,fullname :'Nahuel Perugi',paid:false}, 
{id:7 ,fullname :'Nahuel Perugi',paid:true}, 

]
const OrderHistoryPage = () => {
  return (
    <ShopLayout title={'Historia de las ordenes'} pageDescription={'Historia de ordenes'} >
        <Typography variant='h1' component='h1'>Historial de compras</Typography>

        <Grid container>
          <Grid item xs={12} sx={{height:500, width:'100%'}}>

            <DataGrid 
                columns={columns}
                 rows={rows} 
                 pageSize={10}
                 rowsPerPageOptions={[10]}
                 />

          </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default OrderHistoryPage