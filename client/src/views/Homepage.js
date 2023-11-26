import SubNavMain from "../components/Homepage/SubNavMain";
import Searchbar from "../components/Homepage/Searchbar";
import UserInfoComponent from "../components/UserInfoComponent";
import DestinationCard from "../components/Homepage/DestinationCard";
import "../style/Homepage/Homepage.scss";
import Header__button from "../components/Homepage/Header__button";
import FooterPage from "../components/Footer/FooterPage";
import Discount from "../components/Homepage/Discount";
import Property__list from "../components/Homepage/Property__list";
import Featured__properties from "../components/Homepage/Featured__properties";
import Mail__list from "../components/Footer/Mail__list";
import Chatbot_web from "../components/ChatbotComponent/Chatbot_web";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Homepage = () => {
  return (
    <>
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

          <UserInfoComponent/>
          <img className="main-item" alt="" src="/Homepage__img.png" />
        </div>
        <Searchbar />
        <DestinationCard />
        <Discount />
        <Property__list />
        <Featured__properties />
        <Mail__list />
        <FooterPage />
        <Chatbot_web />
      </div>
    </>
  );
};

export default Homepage;
