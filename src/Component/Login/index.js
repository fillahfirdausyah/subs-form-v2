import React, { useState } from "react";
import { useHistory } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../Helpers/Context/AuthContext";
import { useAnimate } from "../../Helpers/Context/Animate";
import { AlertDanger } from "../Alert";
import Spinner from "../Spinner";

import "./style.css";

function Login() {
  const { loginWithGoogle } = useAuth();
  const { addAlert, alert } = useAnimate();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLoginWithGoogle = async () => {
    try {
      setLoading(true);
      const rel = await loginWithGoogle();
      if (rel.user.email.includes("buanalintas.co.id")) {
        history.push("/dashboard");
        setLoading(false);
      } else if (rel.user.email.includes("pemburubaikx")) {
        history.push("/dashboard");
        setLoading(false);
      } else {
        setMessage("Not Authorized ❗");
        addAlert("show");
        setTimeout(() => addAlert("close"), 5000);
        setLoading(false);
      }
    } catch (err) {
      setMessage("Terjadi Kesalahan ❗");
      addAlert("show");
      setTimeout(() => addAlert("close"), 5000);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="login">
          <Spinner />
        </div>
      ) : (
        <div className="login" onClick={handleLoginWithGoogle}>
          <FcGoogle className="icon" />
          <p>Login dengan Google</p>
        </div>
      )}
      <footer>
        <p>Copyrights@2021</p>
      </footer>
      <AlertDanger message={message} visibility={alert} />
    </>
  );
}

export default Login;
