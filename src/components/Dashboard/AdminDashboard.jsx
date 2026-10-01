import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import Alltask from "../other/Alltask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen bg-[#1c1c1c] w-full p-10">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <Alltask />
    </div>
  );
};

export default AdminDashboard;
