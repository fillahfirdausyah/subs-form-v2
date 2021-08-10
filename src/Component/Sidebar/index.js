import React from "react";

// Asset
import "./style.css";
import MenuIcon from "@material-ui/icons/Menu";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import DescriptionIcon from "@material-ui/icons/Description";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";

function Sidebar() {
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
        <li className="mb-3">
          <NoteAddIcon />
        </li>
        <li className="mb-3">
          <DescriptionIcon />
        </li>
      </nav>
      <footer>
        <hr />
        <div className="footer-item">
          <ChatBubbleOutlineOutlinedIcon fontSize="small" />
        </div>
      </footer>
    </div>
  );
}

export default Sidebar;
