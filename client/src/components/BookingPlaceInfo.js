import React from "react";
import "../style/BookingInfo.scss";
import "../style/BookingPlaceInfo.scss";


class BookingPlaceInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <>
        <div className="rent_property-container">
          <div className="rent_hotel-name">KHACH SAN CHO THUE</div>
          <div className="rent_property-info">
            <div className="rent_price-container">
              <div className="rent_price-info">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/94/34/08/img-hotel-s-rio-quente.jpg?w=1200&h=-1&s=1"
                  alt=""
                  className="rent_price-img"
                ></img>
                <div className="rent_info">
                  <p className="rent_info-name">{this.props.info.tenphong}</p>
                  <p>{this.props.info.bedroomCount}</p>
                  <div className="rent_date">
                    <label htmlFor="">
                      Từ ngày 5 - ngày 8, tháng 12, năm 2023
                    </label>
                  </div>

                  <div className="rent_quantity">
                    <label htmlFor="">x1</label>
                  </div>
                </div>
              </div>
              <div className="rent_price">
                <p className="giathanh">
                  Giá thành: {this.props.info.giaphong}
                </p>
              </div>
            </div>
            <hr />
            <div className="rent_amount-container">
              <p>{this.props.info.bedCount}</p>
              <p>
                <img src="/invoice.svg" alt="" className="rent_amount-icon" />
                Thành tiền: {this.props.info.thanhtien}
              </p>
            </div>
          </div>
          {/* <p>{this.props.info.thongtinngaydenngaydi}</p> */}
          <div className="rent_property-btn">
            <button onClick={this.props.removeOrder} type="button" class="btn btn-primary btn_rent-cancel">
              Hủy phòng
            </button>
            <button type="button" class="btn btn-primary btn_rent-contact">
              Liên hệ người cho thuê
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default BookingPlaceInfo;
