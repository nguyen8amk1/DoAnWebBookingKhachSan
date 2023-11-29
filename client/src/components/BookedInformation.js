import React from "react";
import "../style/BookedInformation.scss";

class BookedInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="Isrent-container">
          <div className="Isrent_hotel-name">{this.props.info.tenphong}</div>
          <div className="Isrent-info-container">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/f2/cf/78/rio-quente-resorts-hotel.jpg?w=1200&h=-1&s=1"
              alt=""
              className="Isrent-img-container"
            />
            <div className="Isrent-detail">
              <div className="Isrent-username">
                Người cho thuê: {this.props.info.tennguoithue}
              </div>
              <div className="Isrent-name-hotel">Khách sạn Sun Beach</div>
              <div className="Isrent-info-hotel">
                Nằm ở Vũng Tàu, cách Back Beach 13 phút đi bộ, Sun Beach Hotel
                cung cấp chỗ nghỉ có xe đạp miễn phí, chỗ đậu xe riêng miễn phí,
                phòng chờ chung và tiện nghi BBQ.
              </div>
            </div>
            <div className="Isrent-price">
              Giá thành: {this.props.info.giaphong}
            </div>
          </div>
          <hr />
          <p>{this.props.info.thongtinngaydenngaydi}</p>
          <div className="Isrent-amount">
            <img src="/invoice.svg" alt="" className="Isrent_amount-icon" />
            Thành tiền: {this.props.info.thanhtien}
          </div>
          <button type="button" class="btn btn-primary btn_isrent-contact">
            Liên hệ người thuê
          </button>
        </div>
      </>
    );
  }
}

export default BookedInformation;
