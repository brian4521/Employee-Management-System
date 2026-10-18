import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log("this is task list data", data);

  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto w-full flex items-center gap-6 flex-nowrap p-6 mt-10 text-white bg-gradient-to-br from-[#151b2b] via-[#111827] to-[#0b1120] rounded-3xl border border-white/10 shadow-2xl shadow-black/20 scroll-smooth"
    >
      {data.tasks.map((item, idx) => {
        if (item.active) {
          return <AcceptTask key={idx} data={item} />;
        }

        if (item.newTask) {
          return <NewTask key={idx} data={item} />;
        }

        if (item.completed) {
          return <CompleteTask key={idx} data={item} />;
        }

        if (item.failed) {
          return <FailedTask key={idx} data={item} />;
        }
      })}
    </div>
  );
};

export default TaskList;
