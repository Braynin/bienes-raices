import Image from "next/image.js";

import iconOptions from "../data/iconOptions.js";

export default function MasSobreNosotros() {
  return (
    <>
      <h1 className="font-semibold">Más Sobre Nosotros</h1>
      <div>
        <div className="grid grid-cols-3 gap-8 celular:grid-cols-1">
          {iconOptions.map((option) => (
            <div
              key={option.name}
              className="text-center flex flex-col items-center"
            >
              <Image
                src={option.icon}
                alt={`Icono ${option.name}`}
                width={90}
                height={90}
                className="h-36"
              />

              <h3 className="uppercase font-medium">{option.name}</h3>
              <p className="celular:mb-20">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
