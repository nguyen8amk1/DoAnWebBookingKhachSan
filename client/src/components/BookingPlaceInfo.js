import React from 'react'
import '../style/BookingInfo.scss'

class BookingPlaceInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        console.log(this.props);
    }

    render() {
        return <>
          {/* <div>
            <img src='https://i.pinimg.com/564x/f8/90/1e/f8901e8af1fd97a5b8dc09ed26d71886.jpg' alt="" className="right-item-img"></img>
            <b>Ten khach san</b>
            <hr />
            <span className='location'><i class="fa fa-map-marker" aria-hidden="true"></i> TP.Hồ Chí Minh, Việt Nam</span>
            <hr />
            <div className="booking-rating">
              <button type="button" className="btn btn-primary">8.9</button>
              <p>
                Xuất sắc <br />
                4 đánh giá
              </p>
            </div>
            <hr />
            <div style={{display: 'flex', flexDirection: 'row'}} className='buttons'>
                <div className='last-button'>
                <button type="button" className="btn btn-primary">Xem chỗ nghĩ</button>
                </div>
                <div className='last-button'>
                <button type="button" className="btn btn-primary">Hủy phòng</button>
                </div>
                <div className='last-button'>
                <button type="button" className="btn btn-primary">Liên hệ người cho thuê</button>
                </div>
            </div>
          </div> */}


        <div>
            <h3>Ten Khach San</h3> 
            <div className='thongtinphong'>
                <p>{this.props.info.tenphong}</p>
                <p>{this.props.info.bedroomCount}</p>
                <p>{this.props.info.bedCount}</p>
            </div>
            {/* <p>{this.props.info.thongtinngaydenngaydi}</p> */}
            <p>{this.props.info.giaphong}</p>
            <p>{this.props.info.thanhtien}</p>
            <button>Hủy phòng</button>
            <button>Liên hệ người cho thuê</button>
        </div>
        </>;

    }
}

export default BookingPlaceInfo;