import Image from "next/image";

export default function Anuncios() {
  return (
    <>
      <main className="w-[95%] mx-auto my-10 max-w-[80rem]">
        <h1>Contacto</h1>
        <Image
          src="/destacada3.webp"
          alt="Imagen de contacto"
          width={500}
          height={500}
          className="w-full"
        />
        <h2>Llene el formulario de Contacto</h2>
        <form
          action=""
          className="w-[80%] mx-auto my-10 py-10 px-20 bg-gris border-black border-2 rounded-2xl"
        >
          <fieldset className="mb-10 flex flex-col w-10/12 ">
            <legend className="text-3xl mb-6 font-bold">
              Información Personal
            </legend>

            <input
              className="ml-6 bg-grisOscuro hover:bg-transparent hover:placeholder-grisOscuro hover:border-grisOscuro border-2 border-white  placeholder-white text-white mb-6 px-3 py-2 rounded-md"
              type="text"
              placeholder="Escriba su Nombre"
              id="name"
            />

            <input
              className="ml-6 bg-grisOscuro hover:bg-transparent hover:placeholder-grisOscuro hover:border-grisOscuro border-2 border-white  placeholder-white text-white mb-6 px-3 py-2 rounded-md"
              type="email"
              placeholder="Escriba su Email"
              id="email"
            />

            <input
              className="ml-6 bg-grisOscuro hover:bg-transparent hover:placeholder-grisOscuro hover:border-grisOscuro border-2 border-white   placeholder-white text-white mb-6 px-3 py-2 rounded-md"
              type="tel"
              placeholder="Escriba su Telefono"
              id="telefono"
            />

            <textarea
              className="ml-6 bg-grisOscuro hover:bg-transparent hover:placeholder-grisOscuro hover:border-grisOscuro border-2 border-white  placeholder-white text-white px-3 py-2 rounded-md"
              id="mensaje"
              placeholder="Escriba su Mensaje"
            ></textarea>
          </fieldset>
          <fieldset className="mb-10 flex flex-col w-10/12 ">
            <legend className="text-3xl mb-6 font-bold">
              Información sobre la Propiedad
            </legend>
            <label htmlFor="opciones" className="mb-6">
              Venta o Compra:
            </label>
            <select
              className="ml-6 bg-grisOscuro hover:bg-transparent hover:text-grisOscuro hover:border-grisOscuro border-2 border-white text-white px-3 py-2 mb-6 rounded-md"
              name="opciones"
              id="opciones"
              defaultValue=""
            >
              <option value="" disabled>
                ---Seleccione---
              </option>
              <option value="Compra">Compra</option>
              <option value="Vende">Venta</option>
            </select>
            <input
              className="ml-6 bg-grisOscuro hover:bg-transparent hover:placeholder-grisOscuro hover:border-grisOscuro border-2 border-white  placeholder-white text-white px-3 py-2 rounded-md"
              type="number"
              id="presupuesto"
              placeholder="Tu Precio o Presupuesto"
            />
          </fieldset>
          <fieldset className="mb-10 flex flex-col w-8/12 ">
            <legend className="text-3xl mb-6 font-bold">Contacto</legend>
            <p className="mb-6">¿Como desea ser contactado?:</p>
            <div className="ml-6 w-1/3 bg-grisOscuro hover:bg-transparent hover:text-grisOscuro hover:border-grisOscuro border-2 border-white text-white mb-6 px-3 py-2 rounded-md">
              <input
                type="radio"
                name="contacto"
                value="telefono"
                id="radioTelefono"
              />
              <label className="ml-4" htmlFor="radioTelefono">
                Telefono
              </label>
            </div>
            <div className="ml-6 w-1/3 bg-grisOscuro hover:bg-transparent hover:text-grisOscuro hover:border-grisOscuro border-2 border-white  placeholder-white text-white mb-6 px-3 py-2 rounded-md">
              <input
                type="radio"
                name="contacto"
                value="email"
                id="radioEmail"
              />
              <label className="ml-4" htmlFor="radioEmail">
                Email
              </label>
            </div>
            <p className="mb-6">Si eligió teléfono, elija una fecha y hora:</p>

            <input
              className="ml-6 w-1/2 bg-grisOscuro hover:bg-transparent hover:text-grisOscuro hover:border-grisOscuro border-2 border-white   text-white mb-6 px-3 py-2 rounded-md"
              type="date"
              id="fecha"
            />

            <input
              className="ml-6 w-1/2 bg-grisOscuro hover:bg-transparent hover:text-grisOscuro hover:border-grisOscuro border-2 border-white   text-white mb-6 px-3 py-2 rounded-md"
              type="time"
              id="hora"
              min="09:00"
              max="18:00"
            />
          </fieldset>
          <input
            type="submit"
            value="Enviar"
            className="bg-grisOscuro hover:bg-transparent hover:text-grisOscuro hover:border-grisOscuro border-2 border-white text-white font-bold py-4 px-12 text-center mt-10 block rounded-xl cursor-pointer"
          />
        </form>
      </main>
    </>
  );
}
