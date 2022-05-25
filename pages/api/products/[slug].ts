import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Product } from '../../../models'
import { IProduct } from '../../../interface/products';

type Data = {message: string}| IProduct

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getProductBySlug( req, res)
         default:
                return res.status(400).json({ message: 'endpoint no existe' })
        }

    
}
const getProductBySlug =async(req: NextApiRequest, res: NextApiResponse<Data>) =>{
    const {slug} = req.query
    await db.connect()
    const ProductGet = await Product.findOne({slug}).lean()
    await db.disconnect()

    if(!ProductGet){
        return res.status(404).json({ message: 'no hay entrada con ese slug  '  + slug})
    }
    return res.status(200).json( ProductGet )
}