import SubNavMain from "../components/Homepage/SubNavMain";
import Searchbar from "../components/Homepage/Searchbar";
import DestinationCard from "../components/Homepage/DestinationCard";
import "../style/Homepage/Homepage.scss";
import Header__button from "../components/Homepage/Header__button";
import FooterPage from "../components/Footer/FooterPage";
import Discount from "../components/Homepage/Discount";
import Property__list from "../components/Homepage/Property__list";
import Featured__properties from "../components/Homepage/Featured__properties";
import Mail__list from "../components/Footer/Mail__list";
import { Link, useNavigate } from "react-router-dom";
import UserLogin from "./UserLogin";
import { useState } from "react";
import { render } from "react-dom";
import { emitter } from "../utils/emitter";


const Homepage = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleLogin = () => {
    setOpenModal(true)
  }
  const toggleUserModal = () => {
    setOpenModal(!isOpenModal)
  }
  const handleLoginData = (data) => {
    console.log("data from child", data)
    emitter.emit('EVENT_CLEAR_MODAL_DATA')
  }

  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  }
  return (
    <>
      <div className="homepage">
        <UserLogin
          isOpenModal={isOpenModal}
          toggle={toggleUserModal}
          handleLoginData={handleLoginData}
        />
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
          {/* <div className="button1">
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
          </div> */}
          <div className="btn-login_register">
            <button
              type="button"
              className="btn-login btn btn-primary"
              onClick={handleLogin}
            >
              Login
            </button>
            {/* <Link to="/register">
              <div className="btn-register btn btn-primary">
                <div className="explore-now" onClick={handleRegister}>
                  Sign Up
                </div>
              </div>
            </Link> */}
            <button
              type="button"
              className="btn-register btn btn-primary"
              onClick={() => alert("button click catched")}
            >
              Sign Up
            </button>
          </div>
          <img className="main-item" alt="" src="/Homepage__img.png" />
        </div>
        <Searchbar />
        <DestinationCard />
        <Discount />
        <Property__list />
        <Featured__properties />
        <Mail__list />
        <FooterPage />
      </div>
    </>
  );
};

export default Homepage;
