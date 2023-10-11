import React from "react";
import "./SubNavMain.scss";

const SubNavMain = ({
  home,
  subNavMainWidth,
  subNavMainPosition,
  homeFontFamily,
}) => {
  const subNavMainStyle = {
    width: subNavMainWidth,
    position: subNavMainPosition,
  };

  const home1Style = {
    fontFamily: homeFontFamily,
  };

  return (
    <div className="sub-nav-main" style={subNavMainStyle}>
      <div className="sub-navxdefault">
        <b className="home1" style={home1Style}>
          {home}
        </b>
      </div>
    </div>
  );
};

export default SubNavMain;
