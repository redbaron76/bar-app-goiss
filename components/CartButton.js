import React from "react";
import Link from "next/link";
import useCart from "../store/cart";
import "twin.macro";

const CartButton = () => {
  const items = useCart((store) => store.items);

  const itemsCount =
    items.length === 0
      ? 0
      : items.reduce((tot, item) => {
          return tot + item.count;
        }, 0);

  return (
    <Link href="/cart">
      <a tw="relative cursor-pointer">
        {!!itemsCount && (
          <div tw="absolute top-0 right-1 z-10 rounded-full bg-green-400 w-4 h-4 flex flex-col justify-center items-center">
            <span tw="text-xs">{itemsCount}</span>
          </div>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 16 16"
          tw="mr-2 mb-1 text-white"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </a>
    </Link>
  );
};

export default CartButton;
