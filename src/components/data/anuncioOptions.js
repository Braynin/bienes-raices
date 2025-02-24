import createId from "../functions/createId";

const anuncioOptionsSinId = [
  {
    name: "Casa de Lujo en el Lago",
    img: "/anuncio1.webp",
    description1:
      "Casa de lujo en el lago con excelente vista, acabados de lujo a un excelente precio.",
    description2:
      "Descubre la magnificencia de esta casa situada en la costa de un mar turquesa, con diseño contemporáneo y acabados de mármol italiano. Su imponente fachada de vidrio refleja la luz natural, iluminando cada rincón. La amplia terraza ofrece vistas panorámicas, perfecta para relajarse en la piscina infinita. Una cocina gourmet, salones amplios y un jardín interior crean un ambiente elegante. Esta residencia define el lujo moderno, fusionando comodidad, estilo y exclusividad en cada pequeño detalle.",
    precio: "$3,000,000",
    caracteristicas: [
      {
        name: "icono wc",
        icon: "/icono_wc.webp",
        cantidad: 3,
      },
      {
        name: "icono estacionamiento",
        icon: "/icono_estacionamiento.webp",
        cantidad: 2,
      },
      {
        name: "icono dormitorio",
        icon: "/icono_dormitorio.webp",
        cantidad: 4,
      },
    ],
  },
  {
    name: "Casa terminados de lujo",
    img: "/anuncio2.webp",
    description1:
      "Casa con diseño moderno, así como tecnología inteligente y amueblada.",
    description2:
      "Descubre la magnificencia de esta casa situada en la costa de un mar turquesa, con diseño contemporáneo y acabados de mármol italiano. Su imponente fachada de vidrio refleja la luz natural, iluminando cada rincón. La amplia terraza ofrece vistas panorámicas, perfecta para relajarse en la piscina infinita. Una cocina gourmet, salones amplios y un jardín interior crean un ambiente elegante. Esta residencia define el lujo moderno, fusionando comodidad, estilo y exclusividad en cada pequeño detalle.",
    precio: "$4,000,000",
    caracteristicas: [
      {
        name: "icono wc",
        icon: "/icono_wc.webp",
        cantidad: 3,
      },
      {
        name: "icono estacionamiento",
        icon: "/icono_estacionamiento.webp",
        cantidad: 2,
      },
      {
        name: "icono dormitorio",
        icon: "/icono_dormitorio.webp",
        cantidad: 4,
      },
    ],
  },
  {
    name: "Casa con alberca",
    img: "/anuncio3.webp",
    description1:
      "Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad.",
    description2:
      "Descubre la magnificencia de esta casa situada en la costa de un mar turquesa, con diseño contemporáneo y acabados de mármol italiano. Su imponente fachada de vidrio refleja la luz natural, iluminando cada rincón. La amplia terraza ofrece vistas panorámicas, perfecta para relajarse en la piscina infinita. Una cocina gourmet, salones amplios y un jardín interior crean un ambiente elegante. Esta residencia define el lujo moderno, fusionando comodidad, estilo y exclusividad en cada pequeño detalle.",
    precio: "$5,500,000",
    caracteristicas: [
      {
        name: "icono wc",
        icon: "/icono_wc.webp",
        cantidad: 3,
      },
      {
        name: "icono estacionamiento",
        icon: "/icono_estacionamiento.webp",
        cantidad: 2,
      },
      {
        name: "icono dormitorio",
        icon: "/icono_dormitorio.webp",
        cantidad: 4,
      },
    ],
  },
  {
    name: "Casa Clasica Urbana",
    img: "/anuncio4.webp",
    description1:
      "Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad.",
    description2:
      "Descubre la magnificencia de esta casa situada en la costa de un mar turquesa, con diseño contemporáneo y acabados de mármol italiano. Su imponente fachada de vidrio refleja la luz natural, iluminando cada rincón. La amplia terraza ofrece vistas panorámicas, perfecta para relajarse en la piscina infinita. Una cocina gourmet, salones amplios y un jardín interior crean un ambiente elegante. Esta residencia define el lujo moderno, fusionando comodidad, estilo y exclusividad en cada pequeño detalle.",
    precio: "$5,000,000",
    caracteristicas: [
      {
        name: "icono wc",
        icon: "/icono_wc.webp",
        cantidad: 3,
      },
      {
        name: "icono estacionamiento",
        icon: "/icono_estacionamiento.webp",
        cantidad: 2,
      },
      {
        name: "icono dormitorio",
        icon: "/icono_dormitorio.webp",
        cantidad: 4,
      },
    ],
  },
  {
    name: "Casa con hermoso jardín",
    img: "/anuncio5.webp",
    description1:
      "Casa con un hermoso jardín y acabados de lujo en la ciudad, excelente oportunidad.",
    description2:
      "Descubre la magnificencia de esta casa situada en la costa de un mar turquesa, con diseño contemporáneo y acabados de mármol italiano. Su imponente fachada de vidrio refleja la luz natural, iluminando cada rincón. La amplia terraza ofrece vistas panorámicas, perfecta para relajarse en la piscina infinita. Una cocina gourmet, salones amplios y un jardín interior crean un ambiente elegante. Esta residencia define el lujo moderno, fusionando comodidad, estilo y exclusividad en cada pequeño detalle.",
    precio: "$5,500,000",
    caracteristicas: [
      {
        name: "icono wc",
        icon: "/icono_wc.webp",
        cantidad: 3,
      },
      {
        name: "icono estacionamiento",
        icon: "/icono_estacionamiento.webp",
        cantidad: 2,
      },
      {
        name: "icono dormitorio",
        icon: "/icono_dormitorio.webp",
        cantidad: 4,
      },
    ],
  },
  {
    name: "Casa con alberca de lujo",
    img: "/anuncio6.webp",
    description1:
      "Casa de lujo en el lago con excelente vista, acabados de lujo a un excelente precio.",
    description2:
      "Descubre la magnificencia de esta casa situada en la costa de un mar turquesa, con diseño contemporáneo y acabados de mármol italiano. Su imponente fachada de vidrio refleja la luz natural, iluminando cada rincón. La amplia terraza ofrece vistas panorámicas, perfecta para relajarse en la piscina infinita. Una cocina gourmet, salones amplios y un jardín interior crean un ambiente elegante. Esta residencia define el lujo moderno, fusionando comodidad, estilo y exclusividad en cada pequeño detalle.",
    precio: "$8,500,000",
    caracteristicas: [
      {
        name: "icono wc",
        icon: "/icono_wc.webp",
        cantidad: 3,
      },
      {
        name: "icono estacionamiento",
        icon: "/icono_estacionamiento.webp",
        cantidad: 2,
      },
      {
        name: "icono dormitorio",
        icon: "/icono_dormitorio.webp",
        cantidad: 4,
      },
    ],
  },
];

const anuncioOptions = anuncioOptionsSinId.map((option) => ({
  ...option,
  id: createId(option.name),
}));

export default anuncioOptions;
