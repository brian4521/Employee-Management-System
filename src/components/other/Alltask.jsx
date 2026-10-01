import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Alltask = () => {
  const authData = useContext(AuthContext);
  console.log("admin page", authData);
  console.log(authData.employees[0].taskNumbers.active);
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-50 ">
      <div className="bg-green-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5 bg-amber-300 ">
          Employee Name
        </h2>
        <h3 className="text-lg font-medium w-1/5 bg-amber-300 ">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 bg-amber-300 ">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 bg-amber-300 ">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 bg-amber-300 ">Failed</h5>
      </div>

      <div className="h-[80%] overflow-auto">
        {authData.employees.map((empData) => {
          return (
            <div className="bg-green-400 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="text-lg font-medium w-1/5 bg-amber-300 ">
                {empData.firstName}
              </h2>
              <h3 className="text-lg font-medium w-1/5 bg-amber-300 ">
                {empData.taskNumbers.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 bg-amber-300 ">
                {empData.taskNumbers.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 bg-amber-300 ">
                {empData.taskNumbers.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 bg-amber-300 ">
                {empData.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alltask;
