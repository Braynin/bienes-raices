"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useContext } from "react";
import { DarkModeContext } from "../functions/darkModeContext.js";
import Image from "next/image";
import Link from "next/link.js";

import navOptions from "../data/navOptions.js";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`pb-12${
        isHome
          ? " h-svh bg-cover bg-center bg-[url('/header.webp')]"
          : " bg-grisOscuro"
      }`}
    >
      <div
        className=" w-[95%] max-w-[120rem] mx-auto pt-4 flex justify-end cursor-pointer"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        <Image
          src="/dark-mode.webp"
          width={30}
          height={30}
          alt="Telefono"
          className="invert cursor-pointer"
        />
      </div>
      <div className="w-[95%] max-w-[120rem] h-full mx-auto flex flex-col justify-between">
        <div className="flex justify-between  celular:flex-col">
          <Link href="/" className="self-center">
            <Image
              src="/logo.webp"
              width={300}
              height={100}
              alt="Logotipo de Bienes Raíces"
              className="object-cover"
            />
          </Link>

          <div
            className="hidden celular:block w-20 self-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <Image
              src="/barras.webp"
              width={50}
              height={50}
              alt="Icono Menu Responsivo  "
            />
          </div>

          <nav
            className={`
          ${menuOpen ? "celular:block" : "celular:hidden"}
          flex items-center celular:flex-col
        `}
          >
            {navOptions.map((option) => (
              <Link
                key={option.name}
                href={option.href}
                className="text-white hover:text-verde text-3xl celular:text-4xl mr-8 celular:mr-0 last-of-type:mr-0 celular:block celular:text-center celular:mb-8 celular:first-of-type:mt-8"
              >
                {option.name}
              </Link>
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
