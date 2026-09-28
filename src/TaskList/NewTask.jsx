import React from "react";

const NewTask = () => {
  return (
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
      <div className="mt-4">
        <button>Accept task</button>
      </div>
    </div>
  );
};

export default NewTask;
