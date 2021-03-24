import React from "react";
import Link from "next/link";
import useUser from "../store/user";
import CartButton from "../components/CartButton";
import "twin.macro";

const Layout = (props) => {
  const user = useUser((store) => store.user);
  return (
    <div tw="flex flex-col min-h-screen bg-white">
      <header tw="bg-blue-400 text-white p-4 sticky top-0 flex flex-row justify-between items-center">
        <Link href="/">
          <h1 tw="font-bold text-2xl cursor-pointer">{props.name}</h1>
        </Link>
        {user && <h6>({user.email})</h6>}
        <CartButton />
      </header>
      <main tw="flex flex-grow">{props.children}</main>
      <footer tw="bg-gray-700 text-white text-center p-8">
        Corso Web @ Goiss 2021
      </footer>
    </div>
  );
};

export default Layout;
