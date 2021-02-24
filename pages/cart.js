import React from "react";
import Button from "../components/Button";
import "twin.macro";
import useCart from "../store/cart";

const Cart = () => {
  const [items, removeFromCart] = useCart((store) => [
    store.items,
    store.removeFromCart
  ]);

  return (
    <div tw="flex flex-col justify-start flex-grow bg-gray-200 px-4">
      <div>
        <h1 tw="font-bold text-2xl text-center py-4 lg:(text-4xl)">
          Il tuo carrello
        </h1>
        <p tw="text-center lg:(text-xl)">Ordina i prodotti qui elencati.</p>
      </div>
      <div tw="mt-4 pb-4">
        {items.map((item, i) => (
          <div key={"item_" + i} tw="mt-2">
            <div tw="bg-white rounded-lg flex flex-row h-14 px-4 justify-between items-center">
              <div tw="font-bold text-lg">
                {item.count} {item.name}{" "}
                <span tw="text-xs text-gray-400">
                  € {item.price.toFixed(2)}
                </span>
              </div>
              <Button
                danger
                small
                rounded
                mono
                onClick={() => removeFromCart(item.id)}
              >
                <div tw="flex flex-row justify-between items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </div>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
