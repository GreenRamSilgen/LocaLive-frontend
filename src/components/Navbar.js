import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navBar">
      <div className="navBar__left">STUFF HERE</div>
      <div className="navBar__middle">STUFF HERE</div>
      <div className="navBar__right">
        <NavItem icon="ICO">
          <Dropdown>
            <DropdownItem>Upload</DropdownItem>
            <DropdownItem>Download</DropdownItem>
            <DropdownItem>Run</DropdownItem>
          </Dropdown>
        </NavItem>
        <NavItem icon="lel">
          <Dropdown>
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem>My Posting</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
          </Dropdown>
        </NavItem>
      </div>
    </nav>
  );
}
function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-item">
      <div className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </div>
      <CSSTransition 
      in={open === true} 
      classNames="drop-primary"
      timeout={200} 
      unmountOnExit>
        {props.children}
      </CSSTransition>
    </div>
  );
}

function Dropdown(props) {
  return <div className="dropdown">{props.children}</div>;
}

function DropdownItem(props) {
  return <div className="dropDownItem">{props.children}</div>;
}
export default Navbar;
