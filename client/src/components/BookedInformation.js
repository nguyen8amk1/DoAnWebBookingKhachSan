import React from 'react'

class BookedInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return <>
        <div>
            <h3>{this.props.info.tenphong}</h3>
            <p>{this.props.info.tennguoithue}</p> 
            <p>{this.props.info.thongtinngaydenngaydi}</p>
            <p>{this.props.info.giaphong}</p>
            <p>{this.props.info.thanhtien}</p>
            <button>Liên hệ người thuê</button>
        </div>
        </>;
    }
}

export default BookedInformation;