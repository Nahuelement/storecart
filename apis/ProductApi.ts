import axios from "axios";

const ProductApi = axios.create({
    baseURL:'/api'
})

export default ProductApi