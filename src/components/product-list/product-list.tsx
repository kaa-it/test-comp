import { ChangeEvent, useState } from "react";
import { TProduct } from "../../types";
import { generateProductText } from "../../utils/utils";
import s from "./product-list.module.css";

type TProductListProps = {
  products: Array<TProduct>;
  onDelete: (product: TProduct) => void;
};

export const ProductList = ({ products, onDelete }: TProductListProps) => {
  const [fontSize, setFontSize] = useState(16);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFontSize(+e.target.value);
  };

  const handleClick = () => {
    onDelete(products[products.length - 1]);
  };

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {products.map((product) => (
          <p
            className={s.product}
            style={{ fontSize: `${fontSize}px` }}
            key={product.id}
          >
            {generateProductText(product)}
          </p>
        ))}
      </ul>
      <label htmlFor="font-size">Размер шрифта:</label>
      <input
        id="font-size"
        type="range"
        min={14}
        max={20}
        step={1}
        value={fontSize || 14}
        onChange={handleChange}
      />
      <button className={s.button} onClick={handleClick}>
        Удалить последний
      </button>
    </div>
  );
};
