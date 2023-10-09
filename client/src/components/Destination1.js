import { useMemo } from "react";
import "./Destination1.scss";

const Destination1 = ({
  hChMinh,
  ch,
  ellipse1,
  hChMinhLeft,
  hChMinhTop,
  chLeft,
  chTextAlign,
  ellipseIconTextAlign,
  ellipseIconLeft,
}) => {
  const destinationStyle = useMemo(() => {
    return {
      left: hChMinhLeft,
      top: hChMinhTop,
    };
  }, [hChMinhLeft, hChMinhTop]);

  const hChMinhStyle = useMemo(() => {
    return {
      left: chLeft,
      textAlign: chTextAlign,
    };
  }, [chLeft, chTextAlign]);

  const chStyle = useMemo(() => {
    return {
      textAlign: ellipseIconTextAlign,
      left: ellipseIconLeft,
    };
  }, [ellipseIconTextAlign, ellipseIconLeft]);

  return (
    <div className="destination" style={destinationStyle}>
      <div className="h-ch-minh" style={hChMinhStyle}>
        {hChMinh}
      </div>
      <div className="ch" style={chStyle}>
        {ch}
      </div>
      <img className="destination-child" alt="" src={ellipse1} />
    </div>
  );
};

export default Destination1;
