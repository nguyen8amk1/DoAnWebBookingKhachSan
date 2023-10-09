import SubNavMain from "../components/SubNavMain";
import Property1LargeProperty2P from "../components/Property1LargeProperty2P";
import ExploreNowFormContainer from "../components/ExploreNowFormContainer";
import DestinationCard from "../components/DestinationCard";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="main">
        <img className="main-child" alt="" src="/rectangle-1@2x.png" />
        <div className="sub-nav">
          <SubNavMain
            home="Lưu trú"
            iconUserInterfaceLineArro="/iconuser-interfacelinearrow-down2.svg"
            showIconUserInterfaceLineArro={false}
            subNavMainWidth="71px"
            subNavMainPosition="relative"
            homeFontFamily="Roboto"
            iconUserInterfaceLineArroLeft="calc(50% + 11.5px)"
          />
          <SubNavMain
            home="Phiếu giảm giá và ưu đãi"
            iconUserInterfaceLineArro="/iconuser-interfacelinearrow-down3.svg"
            showIconUserInterfaceLineArro={false}
            subNavMainWidth="193px"
            subNavMainPosition="relative"
            homeFontFamily="Roboto"
            iconUserInterfaceLineArroLeft="calc(50% + 11.5px)"
          />
          <SubNavMain
            home="Máy bay"
            iconUserInterfaceLineArro="/iconuser-interfacelinearrow-down4.svg"
            showIconUserInterfaceLineArro={false}
            subNavMainWidth="86px"
            subNavMainPosition="relative"
            homeFontFamily="Roboto"
            iconUserInterfaceLineArroLeft="calc(50% + 11px)"
          />
          <SubNavMain
            home="Khách sạn"
            iconUserInterfaceLineArro="/iconuser-interfacelinearrow-down5.svg"
            showIconUserInterfaceLineArro={false}
            subNavMainWidth="96px"
            subNavMainPosition="relative"
            homeFontFamily="Roboto"
            iconUserInterfaceLineArroLeft="calc(50% + 11px)"
          />
          <SubNavMain
            home="Địa điểm tham quan"
            iconUserInterfaceLineArro="/iconuser-interfacelinearrow-down3.svg"
            showIconUserInterfaceLineArro={false}
            subNavMainWidth="158px"
            subNavMainPosition="relative"
            homeFontFamily="Roboto"
            iconUserInterfaceLineArroLeft="calc(50% + 11px)"
          />
        </div>
        <div className="button1">
          <Property1LargeProperty2P
            buttonText="Log In"
            property1LargeProperty2PBackgroundColor="unset"
            property1LargeProperty2PBorder="1.5px solid var(--background-2)"
            buttonFontFamily="Roboto"
            buttonColor="#fa7436"
          />
          <Property1LargeProperty2P
            buttonText="Sign Up"
            property1LargeProperty2PBackgroundColor="#fa7436"
            property1LargeProperty2PBorder="unset"
            buttonFontFamily="Roboto"
            buttonColor="#fff"
          />
        </div>
        <img className="main-item" alt="" src="/rectangle-2@2x.png" />
        <div className="top-destinations-in">Top destinations in Vietnam</div>
      </div>
      <ExploreNowFormContainer />
      <div className="search-location">
        <img className="vector-icon" alt="" src="/vector.svg" />
        <div className="frame-parent">
          <div className="date-parent">
            <div className="date">Date</div>
            <img className="frame-child" alt="" src="/vector-48551.svg" />
          </div>
          <img className="vector-icon1" alt="" src="/vector1.svg" />
        </div>
        <div className="frame-group">
          <div className="guest-parent">
            <div className="guest">Guest</div>
            <img className="frame-item" alt="" src="/vector-48552.svg" />
          </div>
          <img className="vector-icon2" alt="" src="/vector2.svg" />
        </div>
      </div>
      <DestinationCard />
    </div>
  );
};

export default Homepage;
