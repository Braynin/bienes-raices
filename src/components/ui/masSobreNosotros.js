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
              <img
                src={option.icon}
                alt={`Icono ${option.name}`}
                loading="lazy"
                className="h-40"
              />
              <h3 className="uppercase font-medium">{option.name}</h3>
              <p>{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
