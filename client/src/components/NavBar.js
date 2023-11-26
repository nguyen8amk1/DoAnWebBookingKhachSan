import React from "react";
import UserLogin from "../views/UserLogin";
import UserRegister from "../views/UserRegister";
import SubNavMain from "../components/Homepage/SubNavMain";
import { Link, useNavigate } from "react-router-dom";
import "../style/navbar.scss";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openLoginModal: false,
      openRegisterModal: false,
    };
  }

  render() {
    return <>
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

        <Link to={"/uploadhotel"}>
            <SubNavMain
                home="Đăng chổ nghỉ của bạn"
                subNavMainWidth="158px"
                subNavMainPosition="relative"
                homeFontFamily="Roboto"
            />
        </Link>

        </div>
    </>
  }
}

export default NavBar; 