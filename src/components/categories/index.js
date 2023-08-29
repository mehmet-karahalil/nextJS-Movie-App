import React from "react";
import Link from "next/link";

function Categories({ categories }) {
  return (
    <div className="flex h-[72px] gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          className="flex items-center justify-center bg-black/75 border border-solid border-black box-shadow-custom w-full h-full rounded-md font-bold"
          href={`/${category.id}`}
        >
          <div>{category.name}</div>
        </Link>
      ))}
    </div>
  );
}


export { Categories };
