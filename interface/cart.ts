import { ISizes } from "./";

export interface ICartProduct {
    _id:string;
    // description: string;
    image: string;
    inStock: number;
    price: number;
    size?: ISizes;
    slug: string;//  mediante se llega a la pagina 
    // tags: string[];
    title: string;
    // type: ITypes;
    gender: 'men'|'women'|'kid'|'unisex',
    // createdAt:string,
    // updatedAt:string
    quantity:number,
}


