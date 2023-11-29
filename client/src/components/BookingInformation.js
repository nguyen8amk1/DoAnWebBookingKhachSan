import React from "react";
import { getBookInfo } from "../api/PageApi";
import BookedInformation from "./BookedInformation";
import BookingPlaceInfo from "./BookingPlaceInfo";
import UserInfoComponent from "./UserInfoComponent";
import "../style/BookingInfo.scss";
import SubNavMain from "./Homepage/SubNavMain";
import { Link, Navigate } from "react-router-dom";
import NavBar from "./NavBar";

class BookingInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingplaces: [],
      bookedplaces: [],
      shownTabId: 1,
      error: false,
    };
  }

  async componentDidMount() {
    // TODO: call hotel api
    // input: id
    const result = await getBookInfo();
    console.log("booking info ", result);

    if (result === -1) {
      this.setState({ error: true });
    }

    this.setState({
      bookingplaces: result.booked,
      bookedplaces: result.booking,
    });
  }

  showTab = (id) => {
    this.setState({
      shownTabId: id,
    });
  };

  render() {
    const content = (
      <>
        <div className="homepage">
          <div className="main">
            <Link to="/" className="main-child">
              <img className="main-child" alt="" src="/logo__web.png" />
            </Link>

            <NavBar />

            <UserInfoComponent />
          </div>
        </div>

        <div className="main-content-container">
          <div className="right-container">
            <div className="right-content">
              <div className="left-banner">
                <button onClick={() => this.showTab(1)}>
                  Chỗ nghỉ đang thuê
                </button>
              </div>
              <div className="right-banner">
                <button onClick={() => this.showTab(2)}>
                  Chỗ nghỉ đang cho thuê
                </button>
              </div>
            </div>
            <hr className="line-container" />

            {this.state.shownTabId == 1 && (
              <div>
                {this.state.bookingplaces.length > 0 && (
                  <div>
                    <BookingPlaceInfo
                      info={this.state.bookingplaces[0]}
                      className="left-banner-detail"
                    />
                    <BookingPlaceInfo
                      info={this.state.bookingplaces[1]}
                      className="right-banner-detail"
                    />
                  </div>
                )}
              </div>
            )}

            {this.state.shownTabId == 2 && (
              <div>
                {this.state.bookedplaces.length > 0 && (
                  <div>
                    <BookedInformation
                      info={this.state.bookedplaces[0]}
                      className="left-banner-detail"
                    />
                    <BookedInformation
                      info={this.state.bookedplaces[1]}
                      className="right-banner-detail"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </>
    );

    const redirect = <Navigate to="/" />;

    let c;
    if (this.state.error) {
      c = redirect;
    } else {
      c = content;
    }

    return c;
  }
}

export default BookingInformation;
