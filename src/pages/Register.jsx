import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://94.74.86.174:8080/api/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
        navigate("/login", { replace: true });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          for="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="******************"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p className="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          type="button"
          onSubmit={(event) => handleSubmit(event)}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Register;
