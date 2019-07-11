import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const HomeButton = props => {
  const { navClose } = props;
  return (
    <Link to="/">
      <button className="HomeButton-btn" type="button" onClick={navClose} />
    </Link>
  );
};

export default HomeButton;
