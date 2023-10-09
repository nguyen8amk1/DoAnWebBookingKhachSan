import Destination1 from "./Destination1";
import "./DestinationCard.scss";

const DestinationCard = () => {
  return (
    <div className="destination1">
      <Destination1
        hChMinh="Hồ Chí Minh"
        ch="15,555 Chỗ ở"
        ellipse1="/ellipse-1@2x.png"
      />
      <Destination1
        hChMinh="Vũng Tàu"
        ch="6,300 Chỗ ở"
        ellipse1="/ellipse-11@2x.png"
        hChMinhLeft="385px"
        hChMinhTop="56px"
        chLeft="30%"
        chTextAlign="center"
        ellipseIconTextAlign="center"
        ellipseIconLeft="32.5%"
      />
      <Destination1
        hChMinh="Đà Nẵng"
        ch="5,555 Chỗ ở"
        ellipse1="/ellipse-12@2x.png"
        hChMinhLeft="577px"
        hChMinhTop="61px"
        chLeft="31.25%"
        chTextAlign="center"
        ellipseIconTextAlign="center"
        ellipseIconLeft="32.5%"
      />
      <Destination1
        hChMinh="Đà Lạt"
        ch="5,100 Chỗ ở"
        ellipse1="/ellipse-13@2x.png"
        hChMinhLeft="769px"
        hChMinhTop="66px"
        chLeft="36.25%"
        chTextAlign="center"
        ellipseIconTextAlign="center"
        ellipseIconLeft="32.5%"
      />
      <Destination1
        hChMinh="Nha Trang"
        ch="4,600 Chỗ ở"
        ellipse1="/ellipse-14@2x.png"
        hChMinhLeft="962px"
        hChMinhTop="71px"
        chLeft="27.5%"
        chTextAlign="center"
        ellipseIconTextAlign="center"
        ellipseIconLeft="32.5%"
      />
      <Destination1
        hChMinh="Hà Nội"
        ch="10.700 Chỗ ở"
        ellipse1="/ellipse-15@2x.png"
        hChMinhLeft="194px"
        hChMinhTop="53px"
        chLeft="35.63%"
        chTextAlign="center"
        ellipseIconTextAlign="center"
        ellipseIconLeft="30%"
      />
      <img className="frame-icon" alt="" src="/frame.svg" />
      <img className="frame-icon1" alt="" src="/frame1.svg" />
    </div>
  );
};

export default DestinationCard;
