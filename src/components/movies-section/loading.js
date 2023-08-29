import React from "react";

import { Skeleton } from "@/components/skeleton";

function MoviesSectionLoading() {
  return (
    <div className="mt-9">
      <Skeleton width={128} height={36} />
      <div className="grid grid-cols-auto auto-rows-1453 gap-6">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} />
          ))}
      </div>
    </div>
  );
}

export default MoviesSectionLoading ;