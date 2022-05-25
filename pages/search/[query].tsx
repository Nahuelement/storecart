import { Typography ,Box} from "@mui/material"
import { NextPage } from "next"
import { ShopLayout } from "../../components/layouts"
import { ProductList } from "../../components/products"
import { IProduct } from '../../interface/products';
import { GetServerSideProps } from 'next'
import { dbProduct } from "../../database"




interface Props {
    products:IProduct[],
    query:string,
    isHaveProduct:boolean
}



const SearchePage: NextPage<Props>= ({products,query,isHaveProduct}) => {

    
    // const {products, isLoading, isError } = useProducts('/products')
    
    
      return (
        <ShopLayout title={'Teslo-shop - Search'} pageDescription={'los mejores productos'} >
          <>
          <Typography variant='h1' component='h1'// para que el indexadorde google sepa cual es el titulo
            sx={{
              cursor: 'default'
            }}
          >
              Buscar Producto
          </Typography>
          {
              isHaveProduct?
              (<Typography variant='h2' sx={{
                mb:1,
                mt:1,
                cursor: 'default'
              }}>{query}</Typography>):
              (
                  <Box display='flex'>
                      <Typography variant='h2' sx={{ mb:1,cursor: 'default'}}
                      textTransform='capitalize' // PARA CAPITALIZAR EL TEXTO
                      >
                          no se encontro ningun producto 
                      </Typography>
                        <Typography variant='h2' sx={{ ml:1,mb:1,cursor: 'default',color:'gray'}} >
                                    {`"${query}"`}
                        </Typography>

                  </Box>
              )

          }
          
    
          
            
            <ProductList products={products} />
         
             
          
        
    
          </>
        </ShopLayout>
      )
    }


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time



export const getServerSideProps: GetServerSideProps = async ({params}) => {
    
    const {query} = params as { query : string}

    
    
    let products = await  dbProduct.getProductForSearch(query)
    const isHaveProduct = products.length >0

    if(!isHaveProduct){

        products = await  dbProduct.getAllProduct()
        return {
            props: {
                products,
                query: query.charAt(0).toUpperCase() + query.slice(1),
            }
        }
    }
    

    return {
        props: {
            products,
            query: query.charAt(0).toUpperCase() + query.slice(1),
            isHaveProduct

        }
    }
}
    
    
 export default SearchePage