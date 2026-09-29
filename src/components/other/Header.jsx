import React, { useState } from "react";

const Header = () => {
  // console.log("this is header data", data);

  // const [userName, setuserName] = useState("");
  // if (!data) {
  //   setuserName("admin");
  // } else {
  //   setuserName(data.firstName);
  // }
  function logoutUser() {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  }
  return (
    <div className="flex items-end justify-between text-white">
      <h1 className="text-2xl">
        Header, <br /> userName
      </h1>
      <button
        onClick={logoutUser}
        className="bg-red-500 text-white rounded px-5 py-3 font-medium"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
