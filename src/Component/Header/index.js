import React from "react";

import { useAuth } from "../../Helpers/Context/AuthContext";

// Asset
import "./style.css";

function Header() {
  const { currentUser } = useAuth();

  return (
    <div className="header">
      <nav>
        <li>
          <a href="/dashboard" key="xkl1">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/document" key="xkl2">
            Document
          </a>
        </li>
        <li>
          <a href="/form" key="xkl3">
            Form
          </a>
        </li>
      </nav>
      <div className="user-info">
        {/* <h4>Jihan Weeekly (지효) &#128158;</h4>
        <img src="https://static.asiachan.com/Jihan.full.250009.jpg" alt="" /> */}
        <h4>{currentUser.displayName}</h4>
        <img src={currentUser.photoURL} alt="" />
      </div>
    </div>
  );
}

export default Header;
