import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedDatabase } from '../../database'
import { initialData } from '../../database/products'
import Product from '../../models/Product';





export default  async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(process.env.NODE_ENV ==='production'){
        return res.status(401).json({ message: 'esta en producion no tiene acceso a este servicio' })
    }
    switch (req.method) {
        case 'GET':
            return getEntries ( res )
        case 'POST':
            return postEntry(req,res)
        case 'DELETE':
            return deleteEntries(res)

            
        default:
            return res.status(400) .json({message:'end-point no existe'});
    }
  
}
const getEntries = async(res: NextApiResponse) =>{

    await db.connect()
    const entries = await Product.find()
    await db.disconnect()
    res.status(200).json(entries)
}

const postEntry = async(req:NextApiRequest,res: NextApiResponse)=>{

   
    await db.connect()
    await Product.insertMany(initialData.products)
    await await db.disconnect()
    return  res.status(201).json('DATOS SEMILLA GUARDADOS')

    // initialData.products.map(async(product)=>{
    // const newEntry =  new Product({
    //                 description: product.description,
    //                 images: product.images,
    //                 inStock: product.inStock,
    //                 price: product.price,
    //                 sizes: product.sizes,
    //                 slug: product.slug,//  mediante se llega a la pagina 
    //                 tags: product.tags,
    //                 title: product.title,
    //                 type: product.type,
    //                 gender: product.gender
    //                 });
    
    //     try {
    //         await db.connect()
    //         await newEntry.save()
    //         await db.disconnect()
    //         console.log(newEntry)
    //         return  res.status(201).json({})
    //     } catch (error) {
    //         await db.disconnect()
    //         console.log(error)
    
    //         return res.status(500).json({message:'algo salio mal '})
            
    //     }
       
    // })
    

   
}
const deleteEntries = async(res: NextApiResponse) =>{

    await db.connect()
    await Product.deleteMany({})
    await db.disconnect()
    res.status(201).json('DATOS SEMILLA ELIMINADOS')
}