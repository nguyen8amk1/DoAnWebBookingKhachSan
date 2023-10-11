import SubNavMain from "../components/Homepage/SubNavMain";
import Property1LargeProperty2P from "../components/Homepage/Property1LargeProperty2P";
import Searchbar from "../components/Homepage/Searchbar";
import DestinationCard from "../components/Homepage/DestinationCard";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="main">
        <img className="main-child" alt="" src="/rectangle-1@2x.png" />
        <div className="sub-nav">
          <SubNavMain
            home="Lưu trú"
            subNavMainWidth="71px"
            subNavMainPosition="relative"
            homeFontFamily="Roboto"
          />
          <SubNavMain
            home="Phiếu giảm giá và ưu đãi"
            subNavMainWidth="193px"
            subNavMainPosition="relative"
            homeFontFamily="Roboto"
          />
          <SubNavMain
            home="Máy bay"
            subNavMainWidth="86px"
            subNavMainPosition="relative"
            homeFontFamily="Roboto"
          />
          <SubNavMain
            home="Khách sạn"
            subNavMainWidth="96px"
            subNavMainPosition="relative"
            homeFontFamily="Roboto"
          />
          <SubNavMain
            home="Địa điểm tham quan"
            subNavMainWidth="158px"
            subNavMainPosition="relative"
            homeFontFamily="Roboto"
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
      </div>
      <Searchbar />
      <DestinationCard />
    </div>
  );
};

export default Homepage;
