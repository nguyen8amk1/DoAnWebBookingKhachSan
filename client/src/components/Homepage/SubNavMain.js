import { useMemo } from "react";
import "./SubNavMain.scss";

const SubNavMain = ({
  home,
  iconUserInterfaceLineArro,
  showIconUserInterfaceLineArro,
  subNavMainWidth,
  subNavMainPosition,
  homeFontFamily,
  iconUserInterfaceLineArroLeft,
}) => {
  const subNavMainStyle = useMemo(() => {
    return {
      width: subNavMainWidth,
      position: subNavMainPosition,
    };
  }, [subNavMainWidth, subNavMainPosition]);

  const home1Style = useMemo(() => {
    return {
      fontFamily: homeFontFamily,
    };
  }, [homeFontFamily]);

  const iconUserInterfaceLineArrow1Style = useMemo(() => {
    return {
      left: iconUserInterfaceLineArroLeft,
    };
  }, [iconUserInterfaceLineArroLeft]);

  return (
    <div className="sub-nav-main" style={subNavMainStyle}>
      <div className="sub-navxdefault">
        <b className="home1" style={home1Style}>
          {home}
        </b>
        {showIconUserInterfaceLineArro && (
          <img
            className="iconuser-interfacelinearrow1"
            alt=""
            src={iconUserInterfaceLineArro}
            style={iconUserInterfaceLineArrow1Style}
          />
        )}
      </div>
    </div>
  );
};

export default SubNavMain;
