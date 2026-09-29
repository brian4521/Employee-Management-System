import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div>
      <div className="h-full shrink-0 w-[300px] p-5 bg-red-400 rounded">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded-xl">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2">{data.taskDescription}</p>
        <div className="flex justify-between mt-4">
          <button className="bg-amber-400 p-3">Mark as completed</button>
          <button className="bg-amber-400 p-3">Mark as failed</button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
