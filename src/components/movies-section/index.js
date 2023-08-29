import React from "react";
import Link from "next/link";
import Image from "next/image";


function MoviesSection({ title, movies }) {
  return (
    <div className="mt-9">
      <h3 className="mb-3 uppercase text-2xl tracking-wider">{title}</h3>
      <div className="grid grid-cols-auto auto-rows-1453 gap-6">
        {movies.map((movie) => (
          <div className="overflow-hidden rounded-lg relative box-shadow-custom  transition-transform duration-300 ease-in-out hover:z-10 hover:scale-125" key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export { MoviesSection };