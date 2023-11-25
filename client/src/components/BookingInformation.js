import React from "react";
import { getBookInfo } from "../api/PageApi";
import BookedInformation from "./BookedInformation";
import BookingPlaceInfo from "./BookingPlaceInfo";
import UserInfoComponent from "./UserInfoComponent";
import "../style/BookingInformation.scss";

class BookingInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingplaces: [],
      bookedplaces: [],
      shownTabId: 1,
    };
  }

  async componentDidMount() {
    // TODO: call hotel api
    // input: id
    const result = await getBookInfo();
    console.log(result);

    this.setState({
      bookingplaces: result.booked,
      bookedplaces: result.booking,
    });
  }

  showTab = async (id) => {
    this.setState({
      shownTabId: id,
    });
  };

    // render() {
    //     return <>
    //         <div className="homepage">
    //             <div className="main">
    //                 <Link to="/" className="main-child">
    //                     <img className="main-child" alt="" src="/logo__web.png" />
    //                 </Link>
    //                 <div className="sub-nav">
    //                     <SubNavMain
    //                         home="Lưu trú"
    //                         subNavMainWidth="71px"
    //                         subNavMainPosition="relative"
    //                         homeFontFamily="Roboto"
    //                     />
    //                     <SubNavMain
    //                         home="Phiếu giảm giá và ưu đãi"
    //                         subNavMainWidth="193px"
    //                         subNavMainPosition="relative"
    //                         homeFontFamily="Roboto"
    //                     />
    //                     <SubNavMain
    //                         home="Máy bay"
    //                         subNavMainWidth="86px"
    //                         subNavMainPosition="relative"
    //                         homeFontFamily="Roboto"
    //                     />
    //                     <SubNavMain
    //                         home="Khách sạn"
    //                         subNavMainWidth="96px"
    //                         subNavMainPosition="relative"
    //                         homeFontFamily="Roboto"
    //                     />
    //                     <SubNavMain
    //                         home="Địa điểm tham quan"
    //                         subNavMainWidth="158px"
    //                         subNavMainPosition="relative"
    //                         homeFontFamily="Roboto"
    //                     />
    //                 </div>
    //                 <UserInfoComponent />
    //             </div>
    //         </div>
    //         <div className='main-content-container'>
    //             <div className='left-container'>
    //                 <b>Clap 2K3</b>
    //                 <p>Sửa hồ sơ</p>
    //                 <hr />
    //                 <p>Tài khoản của tôi</p>
    //                 <p><i class="fa fa-bell" aria-hidden="true"></i>  Thông Báo</p>
    //             </div>
    //             <div className='right-container'>
    //                 <div className='right-content'>
    //                     <div className='left-banner'>
    //                         <p>Chỗ nghĩ đang thuê</p>
    //                     </div>
    //                     <div className='right-banner'>
    //                         <p>Chỗ nghĩ đang cho thuê</p>
    //                     </div>
    //                 </div>
    //                 <hr />
    //                 <div className='left-banner-detail'>
    //                     <img src='https://i.pinimg.com/564x/f8/90/1e/f8901e8af1fd97a5b8dc09ed26d71886.jpg' alt="" className="left-item-img"></img>
    //                     <b>Landmark</b>
    //                     <hr />
    //                     <span className='location'><i class="fa fa-map-marker" aria-hidden="true"></i> TP.Hồ Chí Minh, Việt Nam</span>
    //                     <hr />
    //                     <div className="booking-rating">
    //                         <button type="button" className="btn btn-primary">8.9</button>
    //                         <p>
    //                             Xuất sắc <br />
    //                             4 đánh giá
    //                         </p>
    //                     </div>
    //                     <hr />
    //                     <div className='last-button'>
    //                         <button type="button" className="btn btn-primary">Xem chỗ nghĩ</button>
    //                     </div>
    //                 </div>
    //                 <div className='right-banner-detail'>
    //                     <img src='https://i.pinimg.com/564x/f8/90/1e/f8901e8af1fd97a5b8dc09ed26d71886.jpg' alt="" className="right-item-img"></img>
    //                     <b>Landmark</b>
    //                     <hr />
    //                     <span className='location'><i class="fa fa-map-marker" aria-hidden="true"></i> TP.Hồ Chí Minh, Việt Nam</span>
    //                     <hr />
    //                     <div className="booking-rating">
    //                         <button type="button" className="btn btn-primary">8.9</button>
    //                         <p>
    //                             Xuất sắc <br />
    //                             4 đánh giá
    //                         </p>
    //                     </div>
    //                     <hr />
    //                     <div className='last-button'>
    //                         <button type="button" className="btn btn-primary">Xem chỗ nghĩ</button>
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>
    //         <button onClick={() => this.showTab(1)}>Chổ nghỉ đang thuê</button>
    //         <button onClick={() => this.showTab(2)}>Chổ nghỉ đang cho thuê</button>


    //         {/* booking tab: anyone can view, if logged in  */}
    //         {this.state.shownTabId == 1 && this.state.bookingplaces.map((place, index) => (
    //             <BookingPlaceInfo key={index} info={place} />
    //         ))}

    //         {/* booked tab: only manager can view */}
    //         {/* TODO: restrict non manager user */}
    //         {this.state.shownTabId == 2 && this.state.bookedplaces.map((place, index) => (
    //             <BookedInformation key={index} info={place} />
    //         ))}
    //     </>;
    // }

  render() {
    return (
      <div className="heade_info-component">
        <div className="property">
          <button onClick={() => this.showTab(1)}>Chổ nghỉ đang thuê</button>
          <button onClick={() => this.showTab(2)}>
            Chổ nghỉ đang cho thuê
          </button>
        </div>
        {/* booking tab: anyone can view, if logged in  */}
        {this.state.shownTabId == 1 &&
          this.state.bookingplaces.map((place, index) => (
            <BookingPlaceInfo key={index} info={place} />
          ))}

        {/* booked tab: only manager can view */}
        {/* TODO: restrict non manager user */}
        {this.state.shownTabId == 2 &&
          this.state.bookedplaces.map((place, index) => (
            <BookedInformation key={index} info={place} />
          ))}
        <UserInfoComponent />
      </div>
    );
  }
}

export default BookingInformation;
