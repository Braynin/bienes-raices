import Boton from "@/components/ui/boton.js";
import Link from "next/link.js";
import Image from "next/image";
import MasSobreNosotros from "@/components/ui/masSobreNosotros.js";
import AnuncioCards from "@/components/ui/anuncioCards.js";
import BlogCards from "@/components/ui/blogCards.js";

export default function Home() {
  return (
    <>
      <main className="w-[95%] max-w-[120rem] mx-auto my-10">
        <MasSobreNosotros />
      </main>
      {/* ANUNCIOS */}
      <section className="w-[95%] max-w-[120rem] mx-auto my-10">
        <AnuncioCards cantidadDeCards="3" />
        <div className="flex justify-end">
          <Link href="/anuncios">
            <Boton color="verde" texto="Ver Todas" />
          </Link>
        </div>
      </section>
      {/* ENCUENTRA CONTACTO */}
      <section className="bg-[url('/encuentra.webp')] bg-center bg-cover py-40 flex flex-col items-center">
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
        <section className="w-[95%] pb-10 mx-auto">
          <BlogCards cantidadDeCards="2" />
        </section>
        <section className="bg-verde rounded-[2rem] text-[2.4rem] px-14 pb-20 text-white flex flex-col ">
          <h3 className="mb-8 font-bold">Testimoniales</h3>
          <div className="relative flex flex-col my-auto">
            <Image
              src="/comilla.webp"
              alt="Comilla decorativa"
              loading="lazy"
              width={50}
              height={50}
              className="absolute left-0 top-0"
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
