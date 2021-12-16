import { createContext, useState } from "react";
import Products from "./../data/products.json";

export const ProductContext = createContext({
  products: [],
  deleteProduct: () => {},
  createNewProduct: () => {},
  editProduct: () => {},
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const createNewProduct = (newProduct) => {
    setProducts([...products, { ...newProduct }]);
  };

  const editProduct = (editedProduct) => {
    setProducts(
      products.map((product) => {
        if (product.id === editedProduct.id) {
          return editedProduct;
        }

        return product;
      })
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, deleteProduct, createNewProduct, editProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
