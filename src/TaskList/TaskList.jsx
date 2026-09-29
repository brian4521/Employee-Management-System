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
      className="h-[55%] overflow-x-auto w-full flex items-center gap-5 flex-nowrap py-5 mt-10 text-white"
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
