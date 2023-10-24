import FooterPage from "../components/Footer/FooterPage";
import SubNavMain from "../components/Homepage/SubNavMain";
import Header__button from "../components/Homepage/Header__button";
import Searchpage__sidebar from "../components/Searchpage/Searchpage__sidebar";
import { Link } from "react-router-dom";
import "../style/Searchpage/Searchpage.scss";

const Searchpage = () => {
  return (
    <div className="Searchpage">
      <div className="homepage">
        <div className="main">
          <Link to="/" className="main-child">
            <img className="main-child" alt="" src="/logo__web.png" />
          </Link>
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
            <Header__button
              buttonText="Log In"
              Header__buttonBackgroundColor="rgba(0,0,0,0.02)"
              Header__button="1.5px solid var(--background-2)"
              buttonFontFamily="Roboto"
              buttonColor="#fa7436"
            />
            <Header__button
              buttonText="Sign Up"
              Header__buttonBackgroundColor="#fa7436"
              Header__button="unset"
              buttonFontFamily="Roboto"
              buttonColor="#fff"
            />
          </div>
        </div>
      </div>
      <Searchpage__sidebar />
      <FooterPage />
    </div>
  );
};

export default Searchpage;
