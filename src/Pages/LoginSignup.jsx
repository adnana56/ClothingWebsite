import React, { useState } from "react";
import BACKEND_URL from "../config";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed", formData);
    let responseData;
    await fetch(`${BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.message || "Login Failed");
    }
  };

  const signup = async () => {
    console.log("Signup Function Executed", formData);
    let responseData;
    await fetch(`${BACKEND_URL}/auth/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.username,
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.message || "Signup Failed");
    }
  };

  return (
    <div className="w-full h-screen bg-[#fce3fe] pt-24 px-4">
      <div className="w-full max-w-[580px] h-auto bg-white m-auto px-5 md:px-[60px] py-10 rounded-xl">
        <h1 className="my-5 text-[#2c2c2c] text-3xl font-semibold">{state}</h1>
        <div className="flex flex-col gap-6 mt-8">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
              className="h-16 w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-lg"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
            className="h-16 w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-lg"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            className="h-16 w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-lg"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
          className="w-full h-16 text-white bg-[#ff4141] mt-7 border-none text-xl font-medium cursor-pointer rounded-lg hover:bg-[#ff2424] active:bg-[#e62e2e]"
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="mt-5 text-[#5c5c5c] text-base font-medium">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
              className="text-[#ff4141] font-semibold cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="mt-5 text-[#5c5c5c] text-base font-medium">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
              className="text-[#ff4141] font-semibold cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}

        <div className="flex items-center mt-6 gap-5 text-[#5c5c5c] text-base font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
