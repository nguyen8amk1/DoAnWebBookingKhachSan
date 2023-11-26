import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Detailpage/Detailpage.scss";
import SubNavMain from "../components/Homepage/SubNavMain";
import FooterPage from "../components/Footer/FooterPage";
import NavBar from "../components/NavBar";

const Detailpage = () => {
  return (
    <div className="Detailpage">
      <div className="homepage">
        <div className="main">
          <Link to="/" className="main-child">
            <img className="main-child" alt="" src="/logo__web.png" />
          </Link>
          <NavBar/>
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
              onClick={() => alert("button click catched")}
            >
              Login
            </button>
            <button
              type="button"
              className="btn-register btn btn-primary"
              onClick={() => alert("button click catched")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <FooterPage />
    </div>
  );
};

export default Detailpage;
