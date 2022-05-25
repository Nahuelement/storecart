import { Grid ,Box,Typography, Button, Chip} from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { NextPage } from "next";
import { IProduct, ISizes } from '../../interface/products';
import { ProductSlideShow, SizeSelector } from '../../components/products';
import 'react-slideshow-image/dist/styles.css'
import { ItemCounter } from "../../components/ui";
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router';
import { useProducts } from '../../hooks/useProducts';
import { dbProduct } from "../../database";
import { GetStaticProps } from 'next'
import { GetStaticPaths } from 'next'
import { getAllProductSlugs } from "../../database/dbProduct";
import { useContext, useState } from "react";
import { ICartProduct } from '../../interface/cart';
import { CartContext } from '../../context/cart/CartContext';



interface Props {
    product:IProduct
}

const ProductPage:NextPage<Props>= ({product}) => {
    
    
//     const router = useRouter()
//     console.log(router.query.slug)
//     const {products:product, isLoading} = useProducts(`/products/${router.query.slug}`)
//    if(isLoading){
//        return(<h1>Cargando..</h1>)
//    }

const {cart,addProductToCart} = useContext(CartContext)
const router = useRouter()
const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id:product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    inStock:product.inStock,
    quantity:1,
})

const selectedSize = (size:ISizes) => {
    setTempCartProduct(stateProduct=>{
        return{
           ... stateProduct,
           size
        }
    })
}

const addAndRestQuantity = (quantity:number) =>{
    setTempCartProduct({...tempCartProduct,quantity})
}

const onAddProduct = () =>{
    if(!tempCartProduct.size) return 


    addProductToCart(tempCartProduct)
    router.push('/cart')
    console.log(cart,tempCartProduct)


}

  return (
    <ShopLayout title={product.title} pageDescription={product.description} >
        <>
        <Grid container spacing={3}>
            <Grid item  xs={12} sm={7}>

            <ProductSlideShow images={product.images}/>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Box>
                    <Typography variant='h1' component='h1'>{product.title}</Typography>
                    <Typography variant= 'subtitle1' component='h2'>{`$${product.price}`}</Typography>
                <Box sx={{my:2}}>
                <Typography variant= 'subtitle2' >Cantidad</Typography>
                    <ItemCounter
                        currentValue = {tempCartProduct.quantity}
                        updateQuantity = {(quantity)=>addAndRestQuantity(quantity)}
                        maxValue = {tempCartProduct.inStock}
                     />
                    <SizeSelector 
                        sizes={product.sizes} 
                        selectedSize = {tempCartProduct.size}
                        onSelectedSide = {(size)=>selectedSize(size)}
                        />
                </Box>

                {
                    (product.inStock>0)?
                    (<Button 
                        color='secondary' 
                        className="circular-btn" 
                        fullWidth
                        disabled ={(product.inStock===0)} 
                        onClick={()=>onAddProduct()}
                        
                        >
                        {
                            tempCartProduct.size? 'Agregar a carrito':'Seleccione una talla'
                        }
                    </Button>):
                    <Chip sx={{width:'100%'}} label='Producto no disponibles' color='error' variant='outlined'/> 

                }
             
                <Box sx={{mt:3}}>
                <Typography variant='subtitle2' >Description</Typography>
                <Typography variant='body2' >{product.description}</Typography>
                </Box>
                
                </Box> 
            </Grid>

        </Grid>
        </>
    </ShopLayout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


// export const getServerSideProps: GetServerSideProps = async ({params}) => {

//     const {slug} = params as any

//     const  product  = await dbProduct.getProductBySlug(slug)

//     if(!product){
//         return {
//             redirect:{
//                 destination:'/',
//                 permanent:false
//             }
//         }
//     }
//     return {
//         props: {
//             product
            
//         }
//     }
// }

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths= async (ctx) => {
    const ProductSlugs = await  dbProduct.getAllProductSlugs()

    return {
         paths: ProductSlugs.map(({slug}) =>{
             return {
                 params:{slug}
             }
         }) ,
        fallback: "blocking"
    }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async ({params}) => {

    const {slug} = params as {slug:string}
    const product = await  dbProduct.getProductBySlug(slug)


    if(!product){
               return {
                   redirect:{
                       destination:'/',
                       permanent:false
                   }
               }
           }

    return {
        props: {
            product
        },
        revalidate:86400
    }
}

export default ProductPage