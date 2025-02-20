import Boton from "@/components/ui/boton.js";
import Link from "next/link.js";
import MasSobreNosotros from "@/components/ui/masSobreNosotros.js";

import anuncioOptions from "../components/data/anuncioOptions.js";
import blogOptions from "@/components/data/blogOptions.js";

export default function Home() {
  return (
    <>
      <main className="w-[95%] max-w-[120rem] mx-auto my-10">
        <MasSobreNosotros />
      </main>
      {/* ANUNCIOS */}
      <section className="w-[95%] max-w-[120rem] max-h-max mx-auto my-10">
        <h2 className="font-semibold">Casas y Depas en Ventas</h2>
        <div className=" max-h-max grid grid-cols-3 gap-8 celular:grid-cols-1">
          {anuncioOptions.map((anuncio) => (
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
                <h3 className="m-0 font-semibold">{anuncio.name}</h3>
                <p className="m-0 h-[100px]">{anuncio.description}</p>
                <p className="my-10 text-verde font-bold text-5xl">
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
        <div className="flex justify-end">
          <Link href="/anuncios">
            <Boton color="verde" texto="Ver Todas" />
          </Link>
        </div>
      </section>
      {/* ENCUENTRA CONTACTO */}
      <section className="bg-[url('/encuentra.jpg')] bg-center bg-cover py-40 flex flex-col items-center">
        <h2 className="text-white font-black text-6xl">
          Encuentra la casa de tus sueños
        </h2>
        <p className="text-white text-3xl">
          LLena el formulario de contacto y un asesor se pondra en contacto
          contigo a la brevedad
        </p>
        <Link href="/contacto">
          <Boton color="amarillo" texto="Contáctanos" />
        </Link>
      </section>
      {/* BLOG */}
      <div className="w-[95%] max-w-[120rem] py-10 mx-auto grid grid-cols-[2fr_1fr] gap-8 celular:grid-cols-1 ">
        <section>
          <h3 className="font-semibold">Nuestro Blog</h3>
          {blogOptions.map((blog) => (
            <article
              key={blog.name}
              className="mb-8 last-of-type:mb-0 grid grid-cols-[1fr_2fr] gap-8 celular:grid-cols-1 celular:gap-0"
            >
              <img src={blog.img} alt={blog.name} loading="lazy" />
              <div className="celular:mt-8">
                <a
                  href={`/blog/${blog.id}`}
                  className="h-full text-black flex flex-col justify-around"
                >
                  <h4 className="m-0 font-bold after:bg-verde after:block after:w-60 after:h-2">
                    {blog.name}
                  </h4>
                  <p className="text-[16px] font-medium">
                    Escrito el:{" "}
                    <span className="text-amarillo">{blog.date}</span> por:{" "}
                    <span className="text-amarillo">{blog.author}</span>
                  </p>
                  <p className="leading-snug text-[18px] font-semibold ">
                    {blog.description}
                  </p>
                </a>
              </div>
            </article>
          ))}
        </section>
        <section className="bg-verde rounded-[2rem] text-[2.4rem] px-14 pb-20 text-white flex flex-col ">
          <h3 className="mb-8 font-bold">Testimoniales</h3>
          <div className="relative flex flex-col my-auto">
            <img
              src="/comilla.svg"
              alt="Comilla decorativa"
              className="absolute left-0 top-0 w-20"
              loading="lazy"
            />
            <blockquote className="w-4/5 pl-12 mx-auto text-[20px]">
              El personal se comportó de una excelente forma, muy buena atención
              y la casa que me ofrecieron cumple con todas mis expectativas.
            </blockquote>
            <p className="mt-12 text-right text-white text-[16px]">
              -Juan de la Plata
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
