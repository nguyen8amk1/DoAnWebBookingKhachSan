import { useMemo } from "react";
import "./Property1LargeProperty2P.scss";

const Property1LargeProperty2P = ({
  buttonText,
  property1LargeProperty2PBackgroundColor,
  property1LargeProperty2PBorder,
  buttonFontFamily,
  buttonColor,
}) => {
  const property1LargeProperty2PStyle = useMemo(() => {
    return {
      backgroundColor: property1LargeProperty2PBackgroundColor,
      border: property1LargeProperty2PBorder,
    };
  }, [property1LargeProperty2PBackgroundColor, property1LargeProperty2PBorder]);

  const buttonStyle = useMemo(() => {
    return {
      fontFamily: buttonFontFamily,
      color: buttonColor,
    };
  }, [buttonFontFamily, buttonColor]);

  return (
    <div
      className="property-1large-property-2p"
      style={property1LargeProperty2PStyle}
    >
      <b className="button" style={buttonStyle}>
        {buttonText}
      </b>
    </div>
  );
};

export default Property1LargeProperty2P;
