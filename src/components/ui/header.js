"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import navOptions from "../data/navOptions.js";

export default function Header() {
  const pathname = usePathname();
  // Evitamos usar "mounted" para cambiar la estructura del DOM
  const isHome = pathname === "/";

  return (
    <header
      className={`pt-4 pb-12${
        isHome
          ? " h-svh bg-cover bg-center bg-[url('/header.jpg')]"
          : " bg-grisOscuro"
      }`}
    >
      <div className="w-[95%] max-w-[120rem] h-full mx-auto flex flex-col justify-between">
        <div className="flex justify-between pt-12 celular:flex-col">
          <a href="/">
            <Image
              src="/logo.svg"
              width={300}
              height={100}
              alt="Logotipo de Bienes Raíces"
              className="object-cover"
            />
          </a>
          <nav className="flex items-center">
            {navOptions.map((option) => (
              <a
                key={option.name}
                href={option.href}
                className="text-white text-3xl celular:text-4xl mr-8 last-of-type:mr-0 celular:block celular:text-center"
              >
                {option.name}
              </a>
            ))}
          </nav>
        </div>
        <h1
          className={`text-left text-white font-bold leading-loose max-w-[60rem] ${
            isHome ? "" : "hidden"
          }`}
        >
          Venta de Casas y Departamentos Exclusivos de Lujo
        </h1>
      </div>
    </header>
  );
}
