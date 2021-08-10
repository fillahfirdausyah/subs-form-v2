import React, { useState } from "react";

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
        <h4>Han Jihyoo</h4>
        <img
          src="https://images.genius.com/02c05a615d243a455f1148ae83a59c93.1000x1000x1.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
