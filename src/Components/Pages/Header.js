import React from "react";
import Button from "./Button";
import "./Header.css";
const Header = ({ showForm, changeTextAndColor }) => {
  return (
    <header className="header">
      <h2 className="app-header">Admin DashBoard</h2>
      <Button
        onClick={showForm}
        color={changeTextAndColor ? "red" : "green"}
        text={changeTextAndColor ? "Close" : "Add"}
      />
    </header>
  );
};

export default Header;
