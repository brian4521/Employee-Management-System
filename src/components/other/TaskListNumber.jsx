import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="py-6 px-8 w-[45%] rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg hover:-translate-y-1 transition duration-300">
        <h2 className="text-4xl font-bold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-lg font-medium mt-2">New Task</h3>
      </div>

      <div className="py-6 px-8 w-[45%] rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:-translate-y-1 transition duration-300">
        <h2 className="text-4xl font-bold">{data.taskNumbers.completed}</h2>
        <h3 className="text-lg font-medium mt-2">Completed Task</h3>
      </div>

      <div className="py-6 px-8 w-[45%] rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg hover:-translate-y-1 transition duration-300">
        <h2 className="text-4xl font-bold">{data.taskNumbers.active}</h2>
        <h3 className="text-lg font-medium mt-2">Accepted Task</h3>
      </div>

      <div className="py-6 px-8 w-[45%] rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg hover:-translate-y-1 transition duration-300">
        <h2 className="text-4xl font-bold">{data.taskNumbers.failed}</h2>
        <h3 className="text-lg font-medium mt-2">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
