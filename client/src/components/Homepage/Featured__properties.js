import React from "react";
import "../../style/Homepage/Featured__properties.scss";

const Featured__properties = () => {
    return (
        <div className="feature__property-container">
            <div className="feature-property-text">
                <h1>Lưu trú tại các chỗ nghỉ độc đáo hàng đầu</h1>
            </div>

            <div className="feature__property">
                <div className="feature__property-item">
                    <img src="/hotel-room.jpg" alt="" className="fp-img" />
                    <span className="fp-name">Casaprisco</span>
                    <span className="fp-city">Hà Lan, Putten</span>
                    <span className="fp-price">VND 3.109.614</span>

                    <div className="fp-rating">
                        <button type="button" className="btn btn-primary">8.9</button>
                        <span>Excellent</span>
                    </div>
                </div>

                <div className="feature__property-item">
                    <img src="/hotel-room.jpg" alt="" className="fp-img" />
                    <span className="fp-name">La Maison Pamaljolie</span>
                    <span className="fp-city">Canada, Stanstead-Est</span>
                    <span className="fp-price">VND 3.053.640</span>

                    <div className="fp-rating">
                        <button type="button" className="btn btn-primary">9.1</button>
                        <span>Excellent</span>
                    </div>
                </div>

                <div className="feature__property-item">
                    <img src="/hotel-room.jpg" alt="" className="fp-img" />
                    <span className="fp-name">Carinya Park</span>
                    <span className="fp-city">Úc, Gembrook</span>
                    <span className="fp-price">VND 3.695.693</span>

                    <div className="fp-rating">
                        <button type="button" className="btn btn-primary">9.3</button>
                        <span>Excellent</span>
                    </div>
                </div>

                <div className="feature__property-item">
                    <img src="/hotel-room.jpg" alt="" className="fp-img" />
                    <span className="fp-name">Agriturismo Cabrele</span>
                    <span className="fp-city">Ý, Santorso</span>
                    <span className="fp-price">VND 2.358.124</span>

                    <div className="fp-rating">
                        <button type="button" className="btn btn-primary">9.3</button>
                        <span>Excellent</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured__properties