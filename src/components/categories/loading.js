import React from "react";
import { Skeleton } from "@/components/skeleton";


function CategoriesLoading() {
  return (
    <div className="flex h-[72px] gap-6">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={72} />
        ))}
    </div>
  );
}

export default CategoriesLoading ;