import React from "react";

// Asset
import "./style.css";

function Header() {
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
        <h4>Jihan Weeekly (지효) &#128158;</h4>
        <img src="https://static.asiachan.com/Jihan.full.250009.jpg" alt="" />
      </div>
    </div>
  );
}

export default Header;
