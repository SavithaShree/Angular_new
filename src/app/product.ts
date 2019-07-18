import { Url } from 'url';

export class Product{
    id: number;
    isFound: boolean;
    Category: string;
    Product: string;
    Brand: string;
    Image: Url;
    Price: number;
    Description: string;
}