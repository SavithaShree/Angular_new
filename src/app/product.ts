import { Url } from 'url';

export interface Product {
    id: number;
    isFound: boolean;
    category: string;
    product: string;
    brand: string;
    image: Url;
    price: number;
    description: string;
}
