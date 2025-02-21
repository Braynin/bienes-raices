"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

import anuncioOptions from "@/components/data/anuncioOptions";

export default function AnuncioDetail() {
  //  Obtenemos el id de la ruta
  const { id } = useParams();

  //  Buscamos el anuncio correspondiente
  const anuncio = anuncioOptions.find((item) => item.id === id);

  //  Si no existe el anuncio, mostramos un mensaje
  if (!anuncio) {
    return <p>Anuncio no encontrado</p>;
  }

  return (
    <>
      <main className="w-[95%] mx-auto my-10 max-w-[80rem]">
        <h1 className="font-semibold">{anuncio.name}</h1>
        <Image
          src={anuncio.img}
          alt={anuncio.name}
          loading="lazy"
          width={500}
          height={500}
          className="w-full"
        />
        <div>
          <p className="my-10 text-verde font-bold text-5xl">
            {anuncio.precio}
          </p>
          <ul className="flex p-0  max-w-[40rem]">
            {anuncio.caracteristicas.map((caracteristica) => (
              <li key={caracteristica.name} className="flex  flex-1">
                <Image
                  src={caracteristica.icon}
                  alt={caracteristica.name}
                  loading="lazy"
                  width={30}
                  height={30}
                  className="h-10"
                />

                <p className="font-black mx-4">{caracteristica.cantidad}</p>
              </li>
            ))}
          </ul>
          <p className="py-6">{anuncio.description1}</p>
          <p>{anuncio.description2}</p>
        </div>
      </main>
    </>
  );
}
