import React from "react";
import "twin.macro";

const Layout = (props) => {
  return (
    <div tw="flex flex-col min-h-screen bg-white">
      <header tw="bg-blue-400 text-white p-4 sticky top-0">
        <h1 tw="font-bold text-2xl">{props.name}</h1>
      </header>
      <main tw="flex flex-grow">{props.children}</main>
      <footer tw="bg-gray-700 text-white text-center p-8">
        Corso Web @ Goiss 2021
      </footer>
    </div>
  );
};

export default Layout;
