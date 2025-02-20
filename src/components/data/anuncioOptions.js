import createId from "../functions/createId";

const anuncioOptionsSinId = [
  {
    name: "Casa de Lujo en el Lago",
    img: "/anuncio1.jpg",
    description:
      "Casa de lujo en el lago con excelente vista, acabados de lujo a un excelente precio.",
    precio: "$3,000,000",
    caracteristicas: [
      {
        name: "icono wc",
        icon: "/icono_wc.svg",
        cantidad: 3,
      },
      {
        name: "icono estacionamiento",
        icon: "/icono_estacionamiento.svg",
        cantidad: 2,
      },
      {
        name: "icono dormitorio",
        icon: "/icono_dormitorio.svg",
        cantidad: 4,
      },
    ],
  },
  {
    name: "Casa terminados de lujo",
    img: "/anuncio2.jpg",
    description:
      "Casa con diseño moderno, así como tecnología inteligente y amueblada.",
    precio: "$4,000,000",
    caracteristicas: [
      {
        name: "icono wc",
        icon: "/icono_wc.svg",
        cantidad: 3,
      },
      {
        name: "icono estacionamiento",
        icon: "/icono_estacionamiento.svg",
        cantidad: 2,
      },
      {
        name: "icono dormitorio",
        icon: "/icono_dormitorio.svg",
        cantidad: 4,
      },
    ],
  },
  {
    name: "Casa con alberca",
    img: "/anuncio3.jpg",
    description:
      "Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad.",
    precio: "$5,500,000",
    caracteristicas: [
      {
        name: "icono wc",
        icon: "/icono_wc.svg",
        cantidad: 3,
      },
      {
        name: "icono estacionamiento",
        icon: "/icono_estacionamiento.svg",
        cantidad: 2,
      },
      {
        name: "icono dormitorio",
        icon: "/icono_dormitorio.svg",
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
