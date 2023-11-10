import React from 'react'

class BookingPlaceInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return <>
        <div>
            <h3>{this.props.info.tenkhachsan}</h3> 
            <div className='thongtinphong'>
                <p>{this.props.info.roomname}</p>
                <p>{this.props.info.bedroomCount}</p>
                <p>{this.props.info.bedCount}</p>
            </div>
            <p>{this.props.info.thongtinngaydenngaydi}</p>
            <p>{this.props.info.giaphong}</p>
            <p>{this.props.info.thanhtien}</p>
            <button>Hủy phòng</button>
            <button>Liên hệ người cho thuê</button>
        </div>
        </>;
    }
}

export default BookingPlaceInfo;