// Mapeo de colores y sus clases
const colorMap = {
  amarillo: {
    default: "bg-amarillo",
    hover: "hover:bg-amarilloHover",
  },
  verde: {
    default: "bg-verde",
    hover: "hover:bg-verdeHover",
  },
  grisOscuro: {
    default: "bg-grisOscuro",
    hover: "hover:bg-black",
  },
};
export default function Boton({ color, texto }) {
  // Extraemos las clases de color desde el mapeo definido (asegúrate de tener colorMap definido)
  const { default: defaultColor, hover: hoverColor } = colorMap[color] || {};

  return (
    <div
      className={`
          ${defaultColor} 
          ${hoverColor}
          text-white font-bold px-12 py-4 mt-10 text-center
        `}
    >
      {texto}
    </div>
  );
}
