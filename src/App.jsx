import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  const [user, setuser] = useState(null);
  const [isUserLoggedIn, setisUserLoggedIn] = useState();

  console.log("this is from app data", isUserLoggedIn);

  const authData = useContext(AuthContext);
  console.log("this is authData", authData);

  useEffect(() => {
    localStorage.setItem;
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setuser(loggedInUser.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setuser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password,
      );
      if (employee) {
        setuser("employee");
        setisUserLoggedIn(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" }),
        );
      }

      console.log("Its employee");
    } else {
      alert("invalid data");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard />
      ) : user == "employee" ? (
        <EmployeeDashboard data={isUserLoggedIn} />
      ) : null}

      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
