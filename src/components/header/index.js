import Link from "next/link";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-black/80 to-transparent container fluid">
      <div className=" flex items-center justify-between">
        <Link href="/" className=" flex items-center space-x-2 text-2xl font-bold tracking-wider text-white">
          <FaPlayCircle /> NetFilms
        </Link>
        <nav className="flex gap-12 text-white font-bold tracking-widest">
          <Link href="/">Movies</Link>
          <Link href="/">Series</Link>
          <Link href="/">Kids</Link>
        </nav>
      </div>
    </header>
  );
}
