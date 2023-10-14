import Destination__list from "./Destination__list";
import "../../style/DestinationCard.scss";

const DestinationCard = () => {
  return (
    <div className="Destination">
      <Destination__list
        name="Hồ Chí Minh"
        quantity="15,555 Chỗ ở"
        img="/HCM.png"
      />
      <Destination__list
        name="Vũng Tàu"
        quantity="6,300 Chỗ ở"
        img="/Vung_tau.png"
      />
      <Destination__list
        name="Đà Nẵng"
        quantity="5,555 Chỗ ở"
        img="/Da_nang.png"
      />
      <Destination__list
        name="Đà Lạt"
        quantity="5,100 Chỗ ở"
        img="/Da_lat.png"
      />

      <Destination__list
        name="Nha Trang"
        quantity="4,600 Chỗ ở"
        img="/Nha_trang.png"
      />

      <Destination__list name="Hà Nội" quantity="10.700 Chỗ ở" img="/HN.png" />
      <div className="top-destinations-in">Top destinations in Vietnam</div>
      <div className="Destination-icon-decor">
        <img
          className="Destination-icon--red"
          alt=""
          src="/Destination-icon--red.svg"
        />
        <img
          className="Destination-icon--blue"
          alt=""
          src="/Destination-icon--blue.svg"
        />
      </div>
    </div>
  );
};

export default DestinationCard;
