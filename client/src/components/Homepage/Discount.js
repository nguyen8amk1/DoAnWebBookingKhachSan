import React from "react"
import "../../style/Homepage/Discount.scss"


const Discount = () => {
    return (
        <div className="discount-container">
            <div className="discount-text--main">
                <span>
                    Ưu đãi
                </span>
            </div>

            <div className="discount-text--sub">
                <span>
                    Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn
                </span>
            </div>

            <div className="discount-list-grid">
                <div className="discount-list">
                    <img src="/hotel-discount-main.jpg" alt="" className="discount-list-img" />
                    <div className="discount-list-text discount-list-text--first">
                        <h3>Tận hưởng kỳ nghỉ dài nhất của bạn</h3>
                        <h5>Tìm kiếm các chỗ nghỉ cho phép lưu trú dài ngày với giá theo tháng ưu đãi</h5>
                        <p>phiếu giảm giá có giá trị trong một tháng</p>
                    </div>
                    <button type="button" className="btn btn-primary">Tìm chỗ nghỉ</button>
                </div>
                <div className="discount-list">
                    <img src="/hotel-discount-sub.jpg" alt="" className="discount-list-img" />
                    <div className="discount-list-text">
                        <h3>Tiết kiệm 15% với Ưu Đãi Cuối Năm</h3>
                        <h5>Khám phá hàng nghìn điểm đến khắp thế giới và tiết kiệm từ 15%</h5>
                        <p>phiếu giảm giá có giá trị trong một tháng</p>
                    </div>
                    <button type="button" className="btn btn-primary">Tìm ưu đãi cuối năm</button>
                </div>
            </div>
        </div>
    )
}

export default Discount