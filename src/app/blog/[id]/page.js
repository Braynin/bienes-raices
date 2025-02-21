"use client";
import { useParams } from "next/navigation";
import blogOptions from "@/components/data/blogOptions.js";

export default function AnuncioDetail() {
  //  Obtenemos el id de la ruta
  const { id } = useParams();

  //  Buscamos el anuncio correspondiente
  const anuncio = blogOptions.find((item) => item.id === id);

  //  Si no existe el anuncio, mostramos un mensaje
  if (!anuncio) {
    return <p>Anuncio no encontrado</p>;
  }

  return (
    <>
      <main className="w-[95%] mx-auto my-10 max-w-[80rem]">
        <h1 className="font-semibold">{anuncio.name}</h1>
      </main>
    </>
  );
}
