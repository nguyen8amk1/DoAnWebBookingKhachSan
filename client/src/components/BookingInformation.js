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
