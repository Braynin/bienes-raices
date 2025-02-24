import Image from "next/image";

import MasSobreNosotros from "@/components/ui/masSobreNosotros";

export default function Nosotros() {
  return (
    <>
      <main className="w-[95%] max-w-[120rem] mx-auto my-10">
        <h1 className="font-semibold">Conoce sobre Nosotros</h1>
        <div className="grid grid-cols-2 gap-8">
          <Image
            src="/nosotros.webp"
            alt="Imagen de nosotros"
            loading="lazy"
            width={500}
            height={500}
            className="w-full"
          />

          <div className="pr-44">
            <p className="font-bold text-3xl mb-8">25 Años de Experiencia</p>
            <p className="mb-8 text-3xl leading-10">
              Somos una empresa líder en bienes raíces, comprometida en ofrecer
              soluciones integrales. Con amplia experiencia en comercialización
              y gestión de propiedades, nuestro equipo asesora a compradores y
              vendedores para lograr transacciones seguras y exitosas.
              Trabajamos con ética y profesionalismo, impulsando proyectos
              residenciales y comerciales que responden a las necesidades del
              mercado. Nuestra misión es transformar espacios en hogares y
              oportunidades de negocio, combinando innovación, tradición y
              compromiso social, para superar expectativas y brindar servicio
              personalizado.
            </p>
            <p className="text-3xl leading-10">
              Con años de experiencia, nuestra empresa se destaca por su
              compromiso y profesionalismo. Ofrecemos asesoramiento integral en
              el proceso de compra o venta. Creemos en la transparencia y la
              innovación para transformar sueños en realidades, impulsando
              resultados excepcionales.
            </p>
          </div>
        </div>
      </main>
      <section className="w-[95%] max-w-[120rem] mx-auto my-10">
        <MasSobreNosotros />
      </section>
    </>
  );
}
