import React from "react";
import Button from "../components/Button";
import useCart from "../store/cart";
import "twin.macro";

import { products } from "../mock/products";

const Products = () => {
  const [items, addToCart] = useCart((store) => [store.items, store.addToCart]);

  return (
    <div tw="flex flex-col justify-start flex-grow bg-gray-200 px-4">
      <div>
        <h1 tw="font-bold text-2xl text-center py-4 lg:(text-4xl)">
          I nostri prodotti
        </h1>
        <p tw="text-center lg:(text-xl)">
          Scegli i prodotti che vuoi acquistare e mettili nel carrello.
        </p>
      </div>
      <div tw="mt-4 pb-4">
        {products.map((product, i) => {
          const item = items.find((i) => i.id === product.id);

          return (
            <div key={"prod_" + i} tw="mt-2">
              <div tw="bg-white rounded-lg flex flex-row h-14 px-4 justify-between items-center">
                <div tw="font-bold text-lg">
                  {item && item.count} {product.name}
                </div>
                <Button
                  primary
                  small
                  rounded
                  mono
                  onClick={() => addToCart(product)}
                >
                  <div tw="flex flex-row justify-between items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      tw="mr-2 mb-1 text-yellow-400"
                    >
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                    </svg>
                    {product.price.toFixed(2)}
                  </div>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
