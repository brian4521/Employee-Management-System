import React, { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email : ", email);
    console.log("password : ", password);

    setemail("");
    setpassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-gray-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            className="text-black outline-none bg-transparent border-2 border-gray-600 rounded-full py-3 px-5"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            className="text-black outline-none bg-transparent border-2 border-gray-600 rounded-full py-3 px-5 mt-4"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="text-white mt-4 outline-none bg-gray-600 rounded-full py-3 px-5"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
