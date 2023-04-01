import { useState } from "react";
import Image from "next/image";
import Input from "../components/Input";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");

  return (
    <div
      className="
        relative 
        h-full 
        w-full 
        bg-[url('/images/netflix-bg.jpg')]
        bg-no-repeat
        bg-center
        bg-fixed
        bg-cover "
    >
      <div
        className="bg-black w-full 
        h-full 
        lg:bg-opacity-50 
        "
      >
        <nav className="px-12 py-5">
          <Image src={"/images/logo.png"} alt="logo" width={180} height={180} />
        </nav>
        <div className="flex justify-center">
          <div
            className="bg-black 
            bg-opacity-70
            px-16 py-16
            self-center
            mt-2
            lg:w-2/5 lg:max-w-md rounded-sm w-full"
          >
            <h2
              className="text-white
                text-4xl
                mb-8 font-semibold"
            >
              Entrar
            </h2>
            <div className="flex flex-col gap-4">
              <Input
                id="email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                value={email}
                label="Email ou número de telefone"
              />
              <Input
                id="password"
                onChange={(e: any) => {
                  setPassoword(e.target.value);
                }}
                value={password}
                type="password"
                label="Senha"
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 ">
              Entrar
            </button>
            <div className="flex flex-row items-center justify-between mt-2">
              <div className="mt-2 flex flex-row items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="accent-neutral-600 w-4 h-4 rounded-full inline-block"
                />
                <span className="ml-2 text-sm text-gray-400 inline-block">
                  Lembre-se de mim
                </span>
              </div>
              <div>
                <a
                  href="https://www.netflix.com/LoginHelp"
                  target="_blank"
                  className="ml-2 text-sm text-gray-400 hover:underline"
                >
                  Pecisa de ajuda?
                </a>
              </div>
            </div>
            <div className="text-zinc-600 text-lg mt-14">
              <span>
                Novo por aqui?
                <a
                  href="https://www.netflix.com/"
                  target="_blank"
                  className="text-white pl-1 hover:underline"
                >
                  Assine agora
                </a>
                .
              </span>
            </div>
            <div className="text-zinc-400 mt-2 text-sm">
              <span>
                Esta página é protegida pelo Google reCAPTCHA para garantir que
                você não é um robô.
                <a
                  href="https://www.netflix.com/"
                  target="_blank"
                  className="text-blue-700 pl-1 hover:underline"
                >
                  Saiba Mais.
                </a>
              </span>
            </div>
          </div>
        </div>
        <div
          className="bg-black 
            bg-opacity-70
            px-20
            self-center
            mt-24
            w
            rounded-sm w-full text-zinc-500"
        >
          <div className="pt-8">
            <p>Dúvidas? Ligue 0800 591 8942</p>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-10 pb-6">
            <a href="">Perguntas frequentes</a>
            <a href="">Central de Ajuda</a>
            <a href="">Termos de Uso</a>
            <a href="">Privacidade</a>
            <a href="">Preferências de cookies</a>
            <a href="">Informações corporativas</a>
          </div>
        </div>
      </div>
    </div>
  );
}
