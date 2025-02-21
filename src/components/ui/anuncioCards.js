import Link from "next/link.js";
import anuncioOptions from "../data/anuncioOptions.js";
import Boton from "@/components/ui/boton.js";

export default function AnuncioCards({ cantidadDeCards }) {
  const cantidadNum = Number(cantidadDeCards) || 0;
  return (
    <>
      <h2 className="font-semibold">Casas y Depas en Ventas</h2>
      <div className="h-full grid grid-cols-3 gap-8 celular:grid-cols-1 tablet:grid-cols-2">
        {anuncioOptions.slice(0, cantidadNum).map((anuncio) => (
          <div
            key={anuncio.name}
            className="bg-neutral-200 border-[1px] border-solid border-neutral-300 max-h-max"
          >
            <img
              src={anuncio.img}
              alt={anuncio.name}
              loading="lazy"
              className="w-full"
            />
            <div className="p-8 max-h-max ">
              <h3 className="m-0 font-semibold text-4xl">{anuncio.name}</h3>
              <p className="m-0 px-8 pt-4 h-[100px] text-3xl">
                {anuncio.description1}
              </p>
              <p className="my-10 text-verde font-bold text-4xl celular:text-5xl">
                {anuncio.precio}
              </p>
              <ul className="flex p-0 ">
                {anuncio.caracteristicas.map((caracteristica) => (
                  <li key={caracteristica.name} className="flex  flex-1">
                    <img
                      src={caracteristica.icon}
                      alt={caracteristica.name}
                      loading="lazy"
                      className="max-h-12 mr-4 "
                    />
                    <p className="font-black">{caracteristica.cantidad}</p>
                  </li>
                ))}
              </ul>
              <Link href={`/anuncios/${anuncio.id}`}>
                <Boton color="amarillo" texto="Ver Propiedad" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
