import React from "react";
import { FcGoogle } from "react-icons/fc";

import "./style.css";

function Login() {
  return (
    <>
      <div className="login">
        <FcGoogle className="icon" />
        <p>Login dengan Google</p>
      </div>
      <footer>
        <p>
          Made With <span>&#129504;</span> From Yogyakarta
        </p>
      </footer>
    </>
  );
}

export default Login;
