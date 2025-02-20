import Image from "next/image";

export default function Home() {
  return (
    <header>
      <div className="contenedor">
        <div className="relative w-full">
          <Image
            src="../public/img/logo.svg"
            fill
            alt="Imagen Logo"
            className="object-cover"
          />
        </div>
        <h1> Venta de Casas y Departamentos Exclusivos de Lujo</h1>
      </div>
    </header>
  );
}
