import React from "react";
import { useHistory } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../Context/AuthContext";

import "./style.css";

function Login() {
  const { loginWithGoogle } = useAuth();
  const history = useHistory();

  const handleLoginWithGoogle = async () => {
    try {
      const rel = await loginWithGoogle();
      if (rel.user.email.includes("students.amikom.ac.id")) {
        console.log(true);
        history.push("/dashboard");
      } else {
        alert("Not Authorized");
      }
      console.log(rel);
    } catch (err) {
      alert("ada yang salah");
    }
  };

  return (
    <>
      <div className="login" onClick={handleLoginWithGoogle}>
        <FcGoogle className="icon" />
        <p>Login dengan Google</p>
      </div>
      <footer>
        <p>Copyrights@2021</p>
      </footer>
    </>
  );
}

export default Login;
