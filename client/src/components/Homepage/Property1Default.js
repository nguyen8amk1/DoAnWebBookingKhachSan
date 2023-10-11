import { useMemo } from "react";
import "./Property1Default.scss";

const Property1Default = ({
  pageTitle,
  iconImageUrl,
  showIconUserInterfaceLineArro,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultRight,
  property1DefaultBottom,
  property1DefaultLeft,
  homeFontFamily,
  iconUserInterfaceLineArroLeft,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      right: property1DefaultRight,
      bottom: property1DefaultBottom,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultRight,
    property1DefaultBottom,
    property1DefaultLeft,
  ]);

  const homeStyle = useMemo(() => {
    return {
      fontFamily: homeFontFamily,
    };
  }, [homeFontFamily]);

  const iconUserInterfaceLineArrowStyle = useMemo(() => {
    return {
      left: iconUserInterfaceLineArroLeft,
    };
  }, [iconUserInterfaceLineArroLeft]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      <b className="home" style={homeStyle}>
        {pageTitle}
      </b>
      {showIconUserInterfaceLineArro && (
        <img
          className="iconuser-interfacelinearrow"
          alt=""
          src={iconImageUrl}
          style={iconUserInterfaceLineArrowStyle}
        />
      )}
    </div>
  );
};

export default Property1Default;
