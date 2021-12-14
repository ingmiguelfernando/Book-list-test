import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const { user, password } = e.target.elements;

    if (user.value === "admin" && password.value === "admin") {
      navigate("/books");
    } else {
      alert("Invalid credentials");
    }

    console.log("submit");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="text-primary">user: </div>
      <input id="user" type="text" required />
      <div className="text-primary">password: </div>
      <input id="password" type="password" required />
      <div className="bg-gray-400 mt-5">
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
