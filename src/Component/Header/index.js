import React from "react";

import { useAuth } from "../../Context/AuthContext";

// Asset
import "./style.css";

function Header() {
  const { currentUser } = useAuth();

  console.log(currentUser);

  return (
    <div className="header">
      <nav>
        <li>
          <a href="">Dashboard</a>
        </li>
        <li>
          <a href="">Document</a>
        </li>
        <li>
          <a href="">Form</a>
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
