import React from "react";
import "../../style/Homepage/Property__list.scss";

const Property__list = () => {
    return (
        <div className="property-container">
            <div className="property-text">
                <h1>Tìm theo loại chỗ nghỉ</h1>
            </div>

            <div className="pList">
                <div className="pList-item">
                    <img src="/hotel-room.jpg" alt="" className="pList-item-img" />
                    <div className="pList-tittles">
                        <h1>Khách sạn</h1>
                        <h2>15 tháng 11-16 tháng 11, 2 người lớn</h2>
                        <h2>Có 13 chỗ nghỉ còn trống</h2>
                    </div>
                </div>

                <div className="pList-item">
                    <img src="/guest-house.jpg" alt="" className="pList-item-img" />
                    <div className="pList-tittles">
                        <h1>Nhà khách</h1>
                        <h2>15 tháng 11-16 tháng 11, 2 người lớn</h2>
                        <h2>Có 5 chỗ nghỉ còn trống</h2>
                    </div>
                </div>

                <div className="pList-item">
                    <img src="/motel-room.jpg" alt="" className="pList-item-img" />
                    <div className="pList-tittles">
                        <h1>Nhà trọ</h1>
                        <h2>15 tháng 11-16 tháng 11, 2 người lớn</h2>
                        <h2>Có 1 chỗ nghỉ còn trống</h2>
                    </div>
                </div>

                <div className="pList-item">
                    <img src="/b&b.jpg" alt="" className="pList-item-img" />
                    <div className="pList-tittles">
                        <h1>Nhà nghỉ B&B</h1>
                        <h2>15 tháng 11-16 tháng 11, 2 người lớn</h2>
                        <h2>Có 3 chỗ nghỉ còn trống</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Property__list
