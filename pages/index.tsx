import { Typography} from '@mui/material';
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products';
import { FullScreenLoading } from '../components/ui';
import { useProducts } from '../hooks';
import { GetStaticProps } from 'next'
import { dbProduct } from '../database';
import { IProduct } from '../interface/products';
// import { initialData } from '../database/products';


interface Props {
  products: IProduct[]
}


const HomePage: NextPage<Props>= ({products}) => {

// EN EL CASO DE HACER FETCH DE LOS DATOS
//  const {isLoading, isError } = useProducts('/products')


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
          Tienda
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


export const getStaticProps: GetStaticProps = async (ctx) => {

  const products = await  dbProduct.getAllProduct()
  
  return {
    props: {
      products
    },
    revalidate:3600
  }
}

export default HomePage
