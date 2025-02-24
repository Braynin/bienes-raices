import createId from "../functions/createId";

const blogOptionsSinId = [
  {
    name: "Terraza en el techo de tu casa",
    img: "/blog1.webp",
    description1:
      "Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero",
    description2:
      "Descubre la magnificencia de esta casa situada en la costa de un mar turquesa, con diseño contemporáneo y acabados de mármol italiano. Su imponente fachada de vidrio refleja la luz natural, iluminando cada rincón. La amplia terraza ofrece vistas panorámicas, perfecta para relajarse en la piscina infinita. Una cocina gourmet, salones amplios y un jardín interior crean un ambiente elegante. Esta residencia define el lujo moderno, fusionando comodidad, estilo y exclusividad en cada pequeño detalle.",
    description3:
      "Descubre la magnificencia de esta casa situada en la costa de un mar turquesa, con diseño contemporáneo y acabados de mármol italiano. Su imponente fachada de vidrio refleja la luz natural, iluminando cada rincón. La amplia terraza ofrece vistas panorámicas, perfecta para relajarse en la piscina infinita. Una cocina gourmet, salones amplios y un jardín interior crean un ambiente elegante. Esta residencia define el lujo moderno, fusionando comodidad, estilo y exclusividad en cada pequeño detalle.",

    date: "15-08-2024",
    author: "John Doe",
  },
  {
    name: "Construye una alberca",
    img: "/blog2.webp",
    description1:
      "Construye una alberca en tu casa con los mejores materiales y ahorrando dinero",
    description2:
      "Descubre la magnificencia de esta casa situada en la costa de un mar turquesa, con diseño contemporáneo y acabados de mármol italiano. Su imponente fachada de vidrio refleja la luz natural, iluminando cada rincón. La amplia terraza ofrece vistas panorámicas, perfecta para relajarse en la piscina infinita. Una cocina gourmet, salones amplios y un jardín interior crean un ambiente elegante. Esta residencia define el lujo moderno, fusionando comodidad, estilo y exclusividad en cada pequeño detalle.",
    description3:
      "Descubre la magnificencia de esta casa situada en la costa de un mar turquesa, con diseño contemporáneo y acabados de mármol italiano. Su imponente fachada de vidrio refleja la luz natural, iluminando cada rincón. La amplia terraza ofrece vistas panorámicas, perfecta para relajarse en la piscina infinita. Una cocina gourmet, salones amplios y un jardín interior crean un ambiente elegante. Esta residencia define el lujo moderno, fusionando comodidad, estilo y exclusividad en cada pequeño detalle.",
    date: "01-02-2025",
    author: "Jane Doe",
  },
  {
    name: "Guía para la decoración de tu hogar",
    img: "/blog3.webp",
    description1:
      "Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio",
    description2:
      "Descubre la magnificencia de esta casa situada en la costa de un mar turquesa, con diseño contemporáneo y acabados de mármol italiano. Su imponente fachada de vidrio refleja la luz natural, iluminando cada rincón. La amplia terraza ofrece vistas panorámicas, perfecta para relajarse en la piscina infinita. Una cocina gourmet, salones amplios y un jardín interior crean un ambiente elegante. Esta residencia define el lujo moderno, fusionando comodidad, estilo y exclusividad en cada pequeño detalle.",
    description3:
      "Descubre la magnificencia de esta casa situada en la costa de un mar turquesa, con diseño contemporáneo y acabados de mármol italiano. Su imponente fachada de vidrio refleja la luz natural, iluminando cada rincón. La amplia terraza ofrece vistas panorámicas, perfecta para relajarse en la piscina infinita. Una cocina gourmet, salones amplios y un jardín interior crean un ambiente elegante. Esta residencia define el lujo moderno, fusionando comodidad, estilo y exclusividad en cada pequeño detalle.",
    date: "01-02-2025",
    author: "Jane Doe",
  },
  {
    name: "Guía para la decoración de tu habitación",
    img: "/blog4.webp",
    description1:
      "Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio",
    description2:
      "Descubre la magnificencia de esta casa situada en la costa de un mar turquesa, con diseño contemporáneo y acabados de mármol italiano. Su imponente fachada de vidrio refleja la luz natural, iluminando cada rincón. La amplia terraza ofrece vistas panorámicas, perfecta para relajarse en la piscina infinita. Una cocina gourmet, salones amplios y un jardín interior crean un ambiente elegante. Esta residencia define el lujo moderno, fusionando comodidad, estilo y exclusividad en cada pequeño detalle.",
    description3:
      "Descubre la magnificencia de esta casa situada en la costa de un mar turquesa, con diseño contemporáneo y acabados de mármol italiano. Su imponente fachada de vidrio refleja la luz natural, iluminando cada rincón. La amplia terraza ofrece vistas panorámicas, perfecta para relajarse en la piscina infinita. Una cocina gourmet, salones amplios y un jardín interior crean un ambiente elegante. Esta residencia define el lujo moderno, fusionando comodidad, estilo y exclusividad en cada pequeño detalle.",
    date: "01-02-2025",
    author: "Jane Doe",
  },
];

const blogOptions = blogOptionsSinId.map((option) => ({
  ...option,
  id: createId(option.name),
}));

export default blogOptions;
