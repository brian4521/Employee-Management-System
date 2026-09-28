import React from "react";

const AcceptTask = () => {
  return (
    <div>
      <div className="h-full shrink-0 w-[300px] p-5 bg-red-400 rounded">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded-xl">High</h3>
          <h4 className="text-sm">20 feb 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">hello going for walk</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque
          nisi consequuntur quis nesciunt eius soluta voluptas magni
        </p>
        <div className="flex justify-between mt-4">
          <button className="bg-amber-400 p-3">Mark as completed</button>
          <button className="bg-amber-400 p-3">Mark as failed</button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
