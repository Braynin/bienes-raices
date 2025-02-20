import createId from "../functions/createId";

const blogOptionsSinId = [
  {
    name: "Terraza en el techo de tu casa",
    img: "/blog1.jpg",
    description:
      "Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero",
    date: "15-08-2024",
    author: "John Doe",
  },
  {
    name: "Guía para la decoración de tu hogar",
    img: "/blog2.jpg",
    description:
      "Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio",
    date: "01-02-2025",
    author: "Jane Doe",
  },
];

const blogOptions = blogOptionsSinId.map((option) => ({
  ...option,
  id: createId(option.name),
}));

export default blogOptions;
