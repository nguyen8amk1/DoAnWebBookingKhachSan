// import React from "react";
import "../../style/Searchpage/Searchpage__searchitem.scss";

const Searchpage__searchitem = () => {
  return (
    <div className="sp__searchitem-container">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="sp-searchitem-img"
      />

      <div className="searchpage-si-desc">
        <h1 className="searchpage-si-title">Tower Street Apartments</h1>
        <span className="searchpage-si-distance">500m from center</span>
        <span className="searchpage-si-taxiop">Free airport taxi</span>
        <span className="searchpage-si-subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="searchpage-si-features">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="searchpage-si-cancelop">Free cancellation </span>
        <span className="searchpage-si-cancelopsubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="searchpage-si-details">
        <div className="searchpage-si-rating">
          <span>Excellent</span>
          <button
            type="button"
            class="searchpage-si-rating btn btn-primary btn-sidebar"
          >
            8.9
          </button>
        </div>
        <div className="searchpage-si-detailtexts">
          <span className="searchpage-si-price">$112</span>
          <span className="searchpage-si-taxop">Includes taxes and fees</span>
          <button
            type="button"
            class="searchpage-si-checkbutton btn btn-primary btn-sidebar"
          >
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchpage__searchitem;
