import React from 'react'
import { getHotelDetail } from '../api/PageApi';
import UserInfoComponent from '../components/UserInfoComponent';

class HotelDetail extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            ten: "", 
            diachi: "", 
            diem: "",  
            danhgia: [], 
            anh: [],  
            bigImg: '',
            smallImg1: '',
            smallImg2: '',
        };
    }

    async componentDidMount() {
        // const id = props.id;
        const detail = await getHotelDetail(2);
        console.log(detail);
        this.setState(
            {
                ten: detail.name, 
                diachi: detail.address, 
                diem: detail.score, 
                danhgia: [detail.review], 
                anh: detail.images, 
            }
        );
        if(this.state.anh != null)  {
            this.setState(
                {
                    bigImg: this.state.anh.shift(),
                    smallImg1: this.state.anh.shift(),
                    smallImg2: this.state.anh.shift(),
                }
            );
        }
    }

    render() {
        // TODO: 
        // substitude the info 
        return <>
            <h1>{this.state.ten}</h1>
            <button>Dat Can Ho</button>
            <p>{this.state.diachi}</p>
            <div className='danhgia'>
                <p>{this.state.diem}</p>
                <p>{this.state.danhgia.length}</p>
          { this.state.danhgia.map((danhgia, index) => (
            <p key={index}>{danhgia}</p>))}

            </div>
            <div className='anh'>
                <img className="big-right-image" src={this.state.bigImg} alt={'Anh lon ben trai'}/>
                <div>
                    <img className="small-left-image" src={this.state.smallImg1} alt={'Anh nho 1 ben phai'}/>
                    <img className="small-left-image" src={this.state.smallImg2} alt={'Anh nho 2 ben phai'}/>
                </div>  

                <div className='listanhconlai'> 
                {/* TODO: Should hide when too much, vd: exceed the 10 images */}
                    { this.state.anh && this.state.anh.map((anh, index) => (
                        <img key={index} src={anh} alt="Anh bi hu r :v"/>))}
                </div>
            </div>

            <div className='boxtimphong'>
                boxtimphong
                <button>Tim</button>
            </div>

            <div className='bando'>
                <button>Hien thi tren ban do</button>
            </div>


            <UserInfoComponent />
        </>;
    }
}

export default HotelDetail;