import React from 'react'
import PlusMinusComponent from '../PlusMinusComponent';
import RadioListComponent from '../RadioListComponent';
import UserInfoComponent from '../UserInfoComponent';

class UploadPlaces extends React.Component {
    constructor(props) { 
        super(props);
    }

    async componentDidMount() {
    }

    render() {
        return <>
        <form>
        <h2>Loại chỗ nghỉ</h2>
        <select>
            <option value="canho">Căn hộ</option>
            <option value="nha">Nhà</option>
            <option value="khachsan">Khách sạn</option>
            <option value="cac loai nha nghi khac">Các loại nhà nghỉ khác</option>
        </select>  
        <h2>Tên và địa điểm</h2>
        <PlusMinusComponent label={"Đăng bao nhiêu chổ nghỉ"} positive={true}/>
        <label>Tên chổ nghỉ</label>
        <input type="text"/><br/><br/>
        <label>Địa chỉ</label>
        {/* TODO: chon dia chi xong -> hien ra chon dia chi tren ban do */}
        <input type="text"/><br/><br/> 
        <h2>Cài đặt chổ nghỉ</h2>
            <h3>Chi tiết chổ nghỉ</h3>
                <PlusMinusComponent label={"Bao nhiêu phòng ngủ ?"} positive={true}/>
                <PlusMinusComponent label={"Bao nhiêu giường ?"} positive={true}/>
            <h3>Tiện nghi chung</h3>
                <RadioListComponent labels={
                    [
                    "Điều hòa nhiệt độ", 
                    "Hệ thống sưởi", 
                    "WIFI miễn phí", 
                    "Trạm sạc xe điện", 
                    ]
                } name="tiennghi"/>

            <h3>Giải trí</h3>
                <RadioListComponent labels={
                    [
                    "TV màn hình phẳng", 
                    "Hồ bơi", 
                    "Bể sục", 
                    "Minibar", 
                    ]
                } name="giaitri"/>

            <h3>Nấu nướng và giặt rửa</h3>
                <RadioListComponent labels={
                    [
                    "Bếp", 
                    "Bếp nhỏ", 
                    "Máy giặt", 
                    ]
                } name="naunuong"/>

            <h3>Không gian ngoài trời</h3>
                <RadioListComponent labels={
                    [
                    "Ban công", 
                    "Nhìn ra vườn", 
                    "Sân thượng/hiên", 
                    "Tầm nhìn ra khung cảnh", 
                    ]
                } name="khonggian"/>

            <h3>Giá mỗi đêm</h3>
            <input/>
            <h3>Ảnh</h3>
            <p>Đăng tải ít nhất 5 ảnh của chỗ nghỉ</p>
            <label for="img">Select image:</label>
            <input type="file" id="img" name="img" accept="image/*" multiple/>
            <br/>
            <button type="submit">Hoàn thành</button>
        </form>
        <UserInfoComponent/>
        </>;
    }
}

export default UploadPlaces;