import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useRouter } from "next/router";
import useUser from "../store/user";
import "twin.macro";

const HomePage = () => {
  const router = useRouter();
  const [user, loginUser] = useUser((store) => [store.user, store.loginUser]);
  const [loginState, setLoginState] = useState({
    login: "",
    password: ""
  });

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("loginState", loginState);
    loginUser(loginState);
  };

  if (user) {
    router.push("/products");
  }

  return (
    <div tw="flex flex-col justify-center items-center flex-grow bg-gray-200 pb-8">
      <div tw="mx-8">
        <h1 tw="font-bold text-2xl text-center py-4 lg:(text-4xl)">
          Benvenuto nel nostro Bar
        </h1>
        <p tw="text-center lg:(text-xl)">
          Esegui il login con il tuo account scolastico per ordinare i nostri
          prodotti.
        </p>
      </div>
      <div tw="bg-white p-8 m-8 rounded-xl shadow hidden">
        <form onSubmit={formSubmit}>
          <InputField
            label="Indirizzo e-mail"
            name="email"
            type="text"
            placeholder="nome.cognome@goiss.it"
            value={loginState.login}
            onChange={(e) => {
              // console.log("value", e.target.value);
              loginState.login = e.target.value;
              setLoginState({ ...loginState });
            }}
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="8-digits password"
            value={loginState.password}
            info="minimo 8 caratteri alfanumerici"
            onChange={(e) => {
              // console.log("value", e.target.value);
              loginState.password = e.target.value;
              setLoginState({ ...loginState });
            }}
          />

          <Button full rounded primary tw="mt-4">
            Login
          </Button>
        </form>
      </div>
      <Button
        full
        secondary
        onClick={() => {
          router.push("/products");
        }}
      >
        LEGGI IL MENU'
      </Button>
    </div>
  );
};

export default HomePage;
