import useSWR, { SWRConfiguration } from "swr"
import { IProduct } from '../interface/products';




export const useProducts = <T>(url:string, config: SWRConfiguration = {}) => {

    const { data, error } = useSWR(`/api${ url }` , config)
   

    return {
        products: data || [],
        isLoading: !error && !data,
        isError: error
    }


  
}
