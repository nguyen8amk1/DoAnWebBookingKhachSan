import React from 'react'

// Map box things to note  
class BookingInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        // TODO: call hotel api 
        // input: id 

    }

    render() {
        return <>
        {/* Thong tin cac phong da book: customer */}
        <div>
            <h3>Ten khach san</h3> 
            <div className='thongtinphong'>
                <p>room name</p>
                <p>bedroomCount</p>
                <p>bedCount</p>
            </div>
            <p>Gia phong</p>
            <p>Thanh tien</p>
            <button>Hủy phòng</button>
            <button>Liên hệ người cho thuê</button>
        </div>

        {/* Thong tin cac phong duoc booking : hotel manager*/}
        <div>
            

        </div>
        </>;
    }
}

export default BookingInformation