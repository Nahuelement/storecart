

import { Typography} from '@mui/material';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { ProductList } from '../../components/products/ProductList';
import { FullScreenLoading } from '../../components/ui/FullScreenLoading';
import { useProducts } from '../../hooks/useProducts';
import { IProduct } from '../../interface/products';
import { GetStaticProps ,GetStaticPaths} from 'next'
import { dbProduct } from '../../database';

interface Props {
  products:IProduct[]
}

const PrefPage: NextPage<Props> = ({products}) => {

    const router = useRouter()
    const query = router.query
    // EN EL CASO DE HACER FETCH DE LOS DATOS
    //const { isLoading, isError } = useProducts<IProduct[]>(`/products?gender=${query.pref}`)


 
   
     return (
       <ShopLayout title={'Teslo-shop'} pageDescription={'los mejores productos'} >
         <>
         <Typography
           variant='h1' 
           component='h1'// para que el indexadorde google sepa cual es el titulo
           sx={{
             cursor: 'default'
           }}
         >
             {  `${query.pref}`.charAt(0).toUpperCase() + `${query.pref}`.slice(1)}
            
         </Typography>
         <Typography variant='h2' sx={{
           mb:1,
           cursor: 'default'
         }}>Todos los productos</Typography>
   
         {
           <ProductList products={products} /> 
         }
       
         </>
       </ShopLayout>
     )
   }


   // You should use getStaticProps when:
   //- The data required to render the page is available at build time ahead of a user’s request.
   //- The data comes from a headless CMS.
   //- The data can be publicly cached (not user-specific).
   //- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
   
   // You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

   
   export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const genders = ['men','women','kid','unisex']
   
     return {
      paths: genders.map(gender=>{
          return {
              params:{pref:gender}
          }
      }) ,
     fallback: "blocking"
 }
   }
   
   export const getStaticProps: GetStaticProps = async ({params}) => {

    
    const {pref:gender} = params as any
     const products = await  dbProduct.getProductForGender(gender)
   
     return {
       props: {
        products
       }
     }
   }
   
   export default PrefPage
   