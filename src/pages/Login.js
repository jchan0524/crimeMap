import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Home from "./Home";

export default function Login() {
  const [cookies, setCookies] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useContext(LoginContext)
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    const url = `https://api.crimemap.hopto.org/login?username=${username}&password=${password}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        if (data.message === "user login success") {
          setLoggedIn(true);
          navigate("/");
          return <Home props={data} />;
        } else {
          console.log("try again");
        }
      });
  }

  return (
    <>
      <form className="m-2 w-full max-w-sm" id="customer" onSubmit={login}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/4">
            <label htmlFor="username">Username</label>
          </div>

          <div className="md:w-3/4">
            <input
              id="username"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/4">
            <label htmlFor="password">Password</label>
          </div>
          <div className="md:w-3/4">
            <input
              id="password"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded no-underline">
          Login{" "}
        </button>
      </form>
      <Link to="/register">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded no-underline ml-3">
          Register{" "}
        </button>
      </Link>
    </>
  );
}
