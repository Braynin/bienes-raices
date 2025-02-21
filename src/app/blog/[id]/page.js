"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

import blogOptions from "@/components/data/blogOptions.js";

export default function AnuncioDetail() {
  //  Obtenemos el id de la ruta
  const { id } = useParams();

  //  Buscamos el anuncio correspondiente
  const blog = blogOptions.find((item) => item.id === id);

  //  Si no existe el anuncio, mostramos un mensaje
  if (!blog) {
    return <p>Blog no encontrado</p>;
  }

  return (
    <>
      <main className="w-[95%] mx-auto my-10 max-w-[80rem]">
        <h1 className="font-semibold">{blog.name}</h1>
        <Image
          src={blog.img}
          alt={blog.name}
          loading="lazy"
          width={500}
          height={500}
          className="w-full"
        />

        <p className="text-[16px] font-medium mt-6">
          Escrito el: <span className="text-amarillo">{blog.date}</span> por:{" "}
          <span className="text-amarillo">{blog.author}</span>
        </p>
        <div>
          <p className="pt-6">{blog.description1}</p>
          <p className="pt-6">{blog.description2}</p>
          <p className="pt-6">{blog.description3}</p>
        </div>
      </main>
    </>
  );
}
