import React from "react";
import "twin.macro";

import { products } from "../mock/products";

const Products = () => {
  return (
    <div>
      <h1>PRODUCTS</h1>
      <div>
        {products.map((product, i) => (
          <div key={"prod_" + i}>
            {product.name} - € {product.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
