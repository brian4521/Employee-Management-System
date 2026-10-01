import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [taskAssignTo, setassignTo] = useState("");
  const [taskCategory, setcategory] = useState("");
  const [task, settask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();

    settask({
      taskTitle,
      taskDescription,
      taskDate,
      taskCategory,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = JSON.parse(localStorage.getItem("employees"));
    console.log("create task", data);
    data.forEach((ele) => {
      if (taskAssignTo == ele.firstName) {
        ele.tasks.push(task);
        console.log(ele);
      }
    });

    settaskTitle("");
    settaskDate("");
    settaskDescription("");
    setcategory("");
    setassignTo("");
  };
  // note: while using forEach it will run all the ele so will also run else part if unmatched so better to use if inside try and catch will catch error if caught
  return (
    <div>
      <div className=" text-white border-white mt-5">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex w-full flex-wrap bg-gray-800 items-start justify-between p-5 rounded"
        >
          <div className="w-1/2">
            <div>
              <h3>Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  settaskTitle(e.target.value);
                }}
                type="text"
                placeholder="make ui integration"
              />
            </div>
            <div>
              <h3>Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  settaskDate(e.target.value);
                }}
                type="date"
              />
            </div>
            <div>
              <h3>Assign to</h3>
              <input
                value={taskAssignTo}
                onChange={(e) => {
                  setassignTo(e.target.value);
                }}
                type="text"
                placeholder="employee name"
              />
            </div>
            <div>
              <h3>Category</h3>
              <input
                value={taskCategory}
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>

          <div className="w-1/2">
            <h3>Description</h3>
            <input
              value={taskDescription}
              onChange={(e) => {
                settaskDescription(e.target.value);
              }}
              type="text"
              placeholder="description"
              style={{ width: "400px", height: "50px" }}
            />
          </div>

          <button className="text-white bg-green-500 p-2 rounded">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
