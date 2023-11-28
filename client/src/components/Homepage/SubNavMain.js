import React from "react";
import "../../style/Global/SubNavMain.scss";

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
      <button className="sub-navxdefault">
        <b className="home1" style={home1Style}>
          {home}
        </b>
      </button>
    </div>
  );
};

export default SubNavMain;
