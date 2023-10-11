import "./Searchbar.scss";

const Searchbar = () => {
  return (
    <div className="search-bar">
      <div className="content">
        <div className="content__item">
          <div className="content__item-location">
            <div className="content__item-location--top">
              <img className="location-icon" alt="" src="/vector.svg" />
              <div className="location">Location</div>
              <img className="inner-icon" alt="" src="/vector-4855.svg" />
            </div>
            <div className="content__item-where">Bạn muốn đến đâu</div>
          </div>

          <div className="content__item-date">
            <div className="content__item-date--top">
              <img className="date-icon" alt="" src="/vector1.svg" />
              <div className="date">Date</div>
              <img className="inner-icon-1" alt="" src="/vector-4855.svg" />
            </div>
            <div className="content__item-date--check">
              Ngày nhận phòng - Ngày trả phòng
            </div>
          </div>

          <div className="content__item-guest">
            <div className="content__item-guest--top">
              <img className="guest-icon" alt="" src="/vector2.svg" />
              <div className="guest">Guest</div>
              <img className="inner-icon-2" alt="" src="/vector-4855.svg" />
            </div>
            <div className="content__item-quantity">Số hành khách</div>
          </div>
        </div>

        <div className="explore-btn">
          <div className="explore-now">Explore Now</div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
