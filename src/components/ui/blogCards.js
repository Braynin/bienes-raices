import Link from "next/link.js";
import Image from "next/image.js";

import blogOptions from "../data/blogOptions.js";

export default function BlogCards({ cantidadDeCards }) {
  const cantidadNum = Number(cantidadDeCards) || 0;
  return (
    <>
      <h3 className="font-semibold">Nuestro Blog</h3>
      {blogOptions.slice(0, cantidadNum).map((blog) => (
        <article
          key={blog.name}
          className="mb-8 last-of-type:mb-0 grid grid-cols-[1fr_2fr] gap-8 celular:grid-cols-1 celular:gap-0"
        >
          <Image
            src={blog.img}
            alt={blog.name}
            width={500}
            height={500}
            className="w-full"
          />

          <div className="celular:mt-8">
            <Link
              href={`/blog/${blog.id}`}
              className="h-full text-black flex flex-col justify-around"
            >
              <h4 className="m-0 font-bold after:bg-verde after:block after:w-60 after:h-2">
                {blog.name}
              </h4>
              <p className="text-[16px] font-medium">
                Escrito el: <span className="text-amarillo">{blog.date}</span>{" "}
                por: <span className="text-amarillo">{blog.author}</span>
              </p>
              <p className="leading-snug text-[18px] font-semibold ">
                {blog.description1}
              </p>
            </Link>
          </div>
        </article>
      ))}
    </>
  );
}
