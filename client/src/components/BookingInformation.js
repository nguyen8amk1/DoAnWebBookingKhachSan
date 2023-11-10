import React from 'react'
import BookedInformation from './BookedInformation';
import BookingPlaceInfo from './BookingPlaceInfo';

class BookingInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookingplaces: [], 
            bookedplaces: [], 
            shownTabId: 1, 
        }
    }

    componentDidMount() {
        // TODO: call hotel api 
        // input: id 
        this.setState({
            bookingplaces: [ {
                // NOTE: This is just test data, real data is gonna be given my 
                tenkhachsan: "Ten khach san", 
                roomname: "room name", 
                thongtinngaydenngaydi: "10/21/2021 - 11/20/2021", 
                bedroomCount: 1,
                bedCount: 1, 
                giaphong: 100, 
                thanhtien: 1000,
            }
            ],
            bookedplaces: [ {
                tenphong: "Ten phong", 
                tennguoithue: "Ditmesaigon", 
                thongtinngaydenngaydi: "10/21/2021 - 11/20/2021", 
                giaphong: 100, 
                thanhtien: 100, 
            }
            ], 
        });
    }

    showTab = async (id) => {
        this.setState({
            shownTabId: id
        });
    }

    render() {
        return <>
        <button onClick={() => this.showTab(1)}>Chổ nghỉ đang thuê</button>
        <button onClick={() => this.showTab(2)}>Chổ nghỉ đang cho thuê</button>
        {/* booking tab: anyone can view, if logged in  */}
        {this.state.shownTabId == 1 && this.state.bookingplaces.map((place, index) => (
            <BookingPlaceInfo key={index} info={place}/> 
        ))}

        {/* booked tab: only manager can view */}
        {/* TODO: restrict non manager user */}
        {this.state.shownTabId == 2 && this.state.bookedplaces.map((place, index) => (
            <BookedInformation key={index} info={place}/> 
        ))}
        </>;
    }
}

export default BookingInformation