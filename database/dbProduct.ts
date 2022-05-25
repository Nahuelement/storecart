import { Product } from '../models'
import { db ,SHOP_CONSTANTS} from './'
import { IProduct } from '../interface/products';


export const getProductBySlug = async( slug: string) :Promise<IProduct  | null>=>{


    await db.connect()

    const product = await Product.findOne({slug}).lean()
    

    await db.disconnect()
    if (!product){
        return null 
    }
    
    return JSON.parse( JSON.stringify( product ))


}

export const getAllProduct = async() :Promise <IProduct[]>=>{

    await db.connect()

    const products = await Product.find().lean()
    

    await db.disconnect()
    
    
    return JSON.parse( JSON.stringify( products ))

}


export interface SlugProps {
    slug:string
}
export const getAllProductSlugs = async() :Promise<SlugProps[] >=>{

    await db.connect()

    const slugs= await Product.find().select('slug -_id').lean()

    await db.disconnect()
    
    
    return slugs

}


export const getProductForGender = async(gender:string) :Promise<IProduct[] | null>=>{

    await db.connect()

    

    let condition = {}

    if ( gender !== 'all' && SHOP_CONSTANTS.validGender.includes(`${gender}`)){
        condition = {gender}
    }

    const  products = await Product.find(condition)
                                                .select('title images price inStock slug -_id')
                                                .lean()
    await db.disconnect()

    
    return JSON.parse( JSON.stringify( products ))

}
export const getProductForSearch=async(search:string):Promise <IProduct[]>=>{

    search  = search.toString().toLowerCase()
   
    await db.connect()

    const products = await Product.find({
        $text : {$search: search } //AGREGANDO LA BUSQUEDA POR INDICE
    })
    .select('title images price inStock slug -_id')
    .lean()

    await db.disconnect()

   
    return  products 

}