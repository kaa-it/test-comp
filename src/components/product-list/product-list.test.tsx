import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductList } from "./product-list";
import { generateProductText } from "../../utils/utils";

describe("ProductList Component", () => {
  test("show products", () => {
    const products = [
      {
        id: 1,
        name: "Молоко",
        count: 2,
      },
      {
        id: 2,
        name: "Кефир",
        count: 3,
      },
      {
        id: 3,
        name: "Шоколад",
        count: 1,
      },
    ];

    const { getByText } = render(
      <ProductList products={products} onDelete={() => {}} />
    );

    const list = document.querySelector("ul");
    expect(list?.childElementCount).toBe(3);
    expect(getByText(generateProductText(products[0]))).toBeInTheDocument();
    expect(getByText(generateProductText(products[1]))).toBeInTheDocument();
    expect(getByText(generateProductText(products[2]))).toBeInTheDocument();
  });

  test("change font size", () => {
    const products = [
      {
        id: 1,
        name: "Молоко",
        count: 2,
      },
    ];

    const { getByLabelText, getByText } = render(
      <ProductList products={products} onDelete={() => {}} />
    );

    const inputNode = screen.getByLabelText("Размер шрифта:");

    console.log(inputNode);
    
    fireEvent.change(inputNode, { target: { value: "18" }});
    expect(getByText(generateProductText(products[0]))).toHaveStyle("font-size: 18px");
  });

  test("delete product", () => {
    const products = [
      {
        id: 1,
        name: "Молоко",
        count: 2,
      },
      {
        id: 2,
        name: "Кефир",
        count: 3,
      },
      {
        id: 3,
        name: "Шоколад",
        count: 1,
      },
    ];

    const onDelete = jest.fn()

    const { getByText } = render(
      <ProductList products={products} onDelete={onDelete} />
    );

    const button = getByText("Удалить последний");

    fireEvent.click(button);

    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledWith(products[2]);

  })
});
