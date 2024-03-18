import { useState } from "react";
import { TProduct } from "../../types";
import { generateProductText } from "../../utils/utils";
import { ProductList } from "../product-list/product-list";
import s from "./app.module.css";


export const App = () => {
  const [products, setProducts] = useState<Array<TProduct>>([
    {
      id: 1, name: "Молоко", count: 2
    },
    {
      id: 2, name: "Кефир", count: 3
    },
    {
      id: 3, name: "Шоколад", count: 1
    }
  ]);

  const onDeleteProduct = (product: TProduct) => {
    console.log("Удален:", generateProductText(product));
    setProducts(products.filter(p => p.id != product.id));
  }

  return (
    <ProductList products={products} onDelete={onDeleteProduct} />
  );
};
