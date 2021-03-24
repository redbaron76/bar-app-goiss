import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useCart from "../store/cart";
import "twin.macro";

const CartButton = () => {
  const router = useRouter();
  const items = useCart((store) => store.items);

  const itemsCount =
    items.length === 0
      ? 0
      : items.reduce((tot, item) => {
          return tot + item.count;
        }, 0);

  switch (router.pathname) {
    case "/cart":
      return (
        <Link href="/products">
          <a tw="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
            </svg>
          </a>
        </Link>
      );
    case "/products":
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
    default:
      return null;
  }
};

export default CartButton;
