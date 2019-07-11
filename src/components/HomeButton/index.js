import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <Link to="/">
      <button className="HomeButton-btn" type="button" />
    </Link>
  );
}

export default HomeButton;
