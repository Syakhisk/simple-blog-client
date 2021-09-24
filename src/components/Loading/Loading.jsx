import React from "react";
import PlaneIcon from "./PlaneIcon";

export const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center my-3">
      <div className="border border-blue-300 rounded-md p-4 max-w-sm w-full mx-auto h-32 grid place-items-center">
        <PlaneIcon />
      </div>

      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-3">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-blue-400 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-blue-400 rounded"></div>
              <div className="h-4 bg-blue-400 rounded"></div>
              <div className="h-4 bg-blue-400 rounded"></div>
            </div>

            <div className="space-y-2">
              <div className="h-4 bg-blue-400 rounded"></div>
              <div className="h-4 bg-blue-400 rounded"></div>
              <div className="h-4 bg-blue-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
