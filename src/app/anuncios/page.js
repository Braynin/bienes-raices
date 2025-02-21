import AnuncioCards from "@/components/ui/anuncioCards";

export default function Anuncios() {
  return (
    <>
      <main className="w-[95%] max-w-[120rem] mx-auto my-10">
        <AnuncioCards cantidadDeCards="6" />
      </main>
    </>
  );
}
