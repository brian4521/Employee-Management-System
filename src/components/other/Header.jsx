import React, { useState } from "react";

const Header = (props) => {
  // console.log("this is header data", data);

  // const [userName, setuserName] = useState("");
  // if (!data) {
  //   setuserName("admin");
  // } else {
  //   setuserName(data.firstName);
  // }
  function logoutUser() {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
  }

  //here window.location was causing the website to reload so to avoid it we pass setuser from app then changed it
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
