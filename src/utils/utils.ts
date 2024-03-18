import { TProduct } from "../types";

export const generateProductText = (product: TProduct) => {
    return `${product.name} - Количество: ${product.count}`;
}