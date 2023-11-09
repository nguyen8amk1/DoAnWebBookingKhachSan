import React from 'react'
import UserInfoComponent from '../components/UserInfoComponent';

class HotelDetail extends React.Component {
    constructor(props) { 
        super(props);
    }

    render() {
        return <>
            <h1>Ten khach san</h1>
            <button>Dat Can Ho</button>
            <p>Dia chi</p>
            <div className='danhgia'>
                <p>diem</p>
                <p>so luong danh gia</p>
                <p>danh gia</p>
            </div>
            <div className='anh'>
                <img src={''} alt={'Anh lon ben trai'}/>
                <img src={''} alt={'Anh nho 1 ben phai'}/>
                <img src={''} alt={'Anh nho 2 ben phai'}/>

                <div className='listanhconlai'> 
                {/* TODO: Should hide when too much, vd: exceed the 10 images */}
                    <img src={''} alt={'anh con lai'}/>
                    <img src={''} alt={'anh con lai'}/>
                    <img src={''} alt={'anh con lai'}/>
                    <img src={''} alt={'anh con lai'}/>
                    <img src={''} alt={'anh con lai'}/>
                    <img src={''} alt={'anh con lai'}/>
                    <img src={''} alt={'anh con lai'}/>
                    <img src={''} alt={'anh con lai'}/>
                    <img src={''} alt={'anh con lai'}/>
                    <img src={''} alt={'anh con lai'}/>
                    <img src={''} alt={'anh con lai'}/>
                </div>
            </div>

            <div className='boxtimphong'>
                boxtimphong
            </div>

            <div className='bando'>
                <button>Hien thi tren ban do</button>
            </div>


            <UserInfoComponent />
        </>;
    }
}

export default HotelDetail;