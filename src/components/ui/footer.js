import navOptions from "../data/navOptions.js";
export default function Footer() {
  return (
    <footer className="mt-10 py-10 bg-grisOscuro">
      <div className="w-[95%] max-w-[120rem] mx-auto">
        <nav>
          {navOptions.map((option) => (
            <a
              key={option.name}
              href={option.href}
              className="text-white text-3xl celular:text-4xl mr-8 last-of-type:mr-0 celular:block celular:text-center"
            >
              {option.name}
            </a>
          ))}
        </nav>
      </div>
      <p className="text-center text-white">
        Todos los derechos reservados 2025
      </p>
    </footer>
  );
}
