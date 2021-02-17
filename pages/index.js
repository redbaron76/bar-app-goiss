import React, { useState } from "react";
import InputField from "../components/InputField";
import "twin.macro";

const HomePage = () => {
  const [loginState, setLoginState] = useState({
    login: "",
    password: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("loginState", loginState);
  };

  return (
    <div tw="flex flex-col justify-center items-center flex-grow bg-gray-200 pb-8">
      <h1 tw="font-bold text-3xl py-4">Benvenuto nel nostro Bar</h1>
      <p tw="">
        Esegui il login con il tuo account scolastico per ordinare i nostri
        prodotti.
      </p>
      <div tw="bg-white w-2/4 p-8 mt-8 rounded-xl shadow">
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
          <button tw="mt-4 py-4 px-6 bg-blue-400 text-white font-semibold w-full rounded shadow">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
