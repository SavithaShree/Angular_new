import { Url } from 'url';

export interface Product{
    id: number;
    isFound: boolean;
    Category: string;
    Product: string;
    Brand: string;
    Image: Url;
    Price: number;
    Description: string;
    randomCount: number;
}