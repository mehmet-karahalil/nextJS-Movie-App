import React from "react";


function Loading() {
  return (
    <div className="min-h-full min-w-full flex items-center justify-center ">
      <div className="animate-spin inline-block w-50 h-50 border-3 border-solid border-white border-opacity-30 rounded-[50%] border-t-white "></div>
    </div>
  );
}

export { Loading };