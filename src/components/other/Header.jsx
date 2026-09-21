import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between text-white">
      <h1 className="text-2xl">
        Header, <br /> mark
      </h1>
      <button className="bg-red-500 text-white rounded px-5 py-3 font-medium">
        Log out
      </button>
    </div>
  );
};

export default Header;
