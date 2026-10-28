import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen bg-[#1c1c1c] p-5 text-white sm:p-8">
      <Header changeUser={props.changeUser} data={props.data} />

      <div className="mt-8 rounded-xl bg-[#252525] p-5">
        <TaskListNumber data={props.data} />
      </div>

      <div className="mt-8">
        <h2 className="mb-5 text-2xl font-bold">My Tasks</h2>
        <TaskList data={props.data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
