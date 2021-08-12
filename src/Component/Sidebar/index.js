import React from "react";

// Contex
import { useAnimate } from "../../Context/Animate";
import { useAuth } from "../../Context/AuthContext";

// Asset
import "./style.css";
import MenuIcon from "@material-ui/icons/Menu";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import DescriptionIcon from "@material-ui/icons/Description";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

function Sidebar() {
  const { addAnimate, animate, addBackdrop } = useAnimate();
  const { logout } = useAuth();

  const showForm = () => {
    if (animate === "up") {
      addAnimate("down");
      addBackdrop("not-show");
    } else {
      addAnimate("up");
      addBackdrop("show");
    }
  };

  const handleLogOut = () => {
    logout();
  };

  return (
    <div className="sidebar">
      <header>
        <MenuIcon />
        <hr />
      </header>
      <nav>
        <li className="mb-3 active">
          <AvTimerIcon className="nav-icon" />
        </li>
        <li className="mb-3" onClick={showForm}>
          <NoteAddIcon />
        </li>
        <li className="mb-3">
          <DescriptionIcon />
        </li>
      </nav>
      <footer>
        <hr />
        <div className="footer-item" onClick={handleLogOut}>
          <ExitToAppOutlinedIcon fontSize="small" />
        </div>
      </footer>
    </div>
  );
}

export default Sidebar;
