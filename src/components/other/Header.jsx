import React from "react";

const Header = ({ data }) => {
  console.log("this is header data", data);
  return (
    <div className="flex items-end justify-between text-white">
      <h1 className="text-2xl">
        Header, <br /> {data.firstName}
      </h1>
      <button className="bg-red-500 text-white rounded px-5 py-3 font-medium">
        Log out
      </button>
    </div>
  );
};

export default Header;
