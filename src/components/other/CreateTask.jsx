import React from "react";

const CreateTask = () => {
  return (
    <div>
      <div className=" text-white border-white mt-5">
        <form className="flex w-full flex-wrap bg-gray-800 items-start justify-between p-5 rounded">
          <div className="w-1/2">
            <div>
              <h3>Task Title</h3>
              <input type="text" placeholder="make ui integration" />
            </div>
            <div>
              <h3>Date</h3>
              <input type="date" />
            </div>
            <div>
              <h3>Assign to</h3>
              <input type="text" placeholder="employee name" />
            </div>
            <div>
              <h3>Category</h3>
              <input type="text" placeholder="design, dev, etc" />
            </div>
          </div>

          <div className="w-1/2">
            <h3>Description</h3>
            <textarea name="" id="" rows="10" cols="30"></textarea>
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
