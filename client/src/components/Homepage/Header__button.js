import React from "react";
import "./Header__button.scss";

const Header__button = ({
  buttonText,
  Header__buttonBackgroundColor,
  Header__buttonBorder,
  buttonFontFamily,
  buttonColor,
}) => {
  const Header__buttonStyle = {
    backgroundColor: Header__buttonBackgroundColor,
    border: Header__buttonBorder,
  };

  const buttonStyle = {
    fontFamily: buttonFontFamily,
    color: buttonColor,
  };

  return (
    <div className="Header__button" style={Header__buttonStyle}>
      <b className="button" style={buttonStyle}>
        {buttonText}
      </b>
    </div>
  );
};

export default Header__button;
