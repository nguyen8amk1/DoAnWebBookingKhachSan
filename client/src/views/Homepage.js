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
            <img className="main-child" alt="" src="https://res.cloudinary.com/dj5xxhqsj/image/upload/v1701229573/logo__web_jttsl0.png" />
          </Link>
          <NavBar/>
          <UserInfoComponent/>
          <img className="main-item" alt="" src="https://res.cloudinary.com/dj5xxhqsj/image/upload/v1701229577/homepage__img_odma2e.png" />
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
