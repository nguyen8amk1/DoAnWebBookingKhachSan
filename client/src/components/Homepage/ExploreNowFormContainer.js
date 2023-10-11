import "./ExploreNowFormContainer.scss";

const ExploreNowFormContainer = () => {
  return (
    <div className="search-bar">
      <div className="content">
        <div className="explore-btn">
          <div className="explore-now">Explore Now</div>
        </div>
        <div className="content1">
          <div className="bn-mun-n-u-parent">
            <div className="bn-mun-n">Bạn muốn đến đâu</div>
            <div className="location-parent">
              <div className="location">Location</div>
              <img className="frame-inner" alt="" src="/vector-4855.svg" />
            </div>
          </div>
          <div className="ngy-nhn-phng">Ngày nhận phòng - Ngày trả phòng</div>
          <div className="s-hnh-khch">Số hành khách</div>
        </div>
      </div>
    </div>
  );
};

export default ExploreNowFormContainer;
