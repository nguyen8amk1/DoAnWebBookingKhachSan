import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./views/Homepage";
import Test from "./components/Homepage/TestAPICalls";
import MapComponentTest from "./components/Homepage/TestMapComponent";
// import Destination__slider from "./components/Homepage/Specialty";
import Searchpage from "./views/Searchpage";
import HotelDetail from "./views/HotelDetail";
import UploadPlaces from "./components/UploadPage/UploadPlaces";
import BookingInformation from "./components/BookingInformation";
import TestMap from "./components/TestMap";
import TestImageHosting from "./components/TestImageHosting";
import CreateOrder from "./views/CreateOrder";
import Detailpage from "./views/Detailpage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
      <switch>
        <Routes>
          {/* <Route exact path="/" Component={CreateOrder} /> */}
          {/* <Route exact path="/" Component={TestImageHosting} /> */}
          {/* <Route exact path="/" Component={TestMap} /> */}
          {/* <Route exact path="/" Component={BookingInformation} /> */}
          <Route exact path="/" Component={Homepage} />
          <Route exact path="/hoteldetail" Component={HotelDetail} />
          {/* <Route path="/Searchpage" Component={Searchpage} /> 
        <Route path="/uploadHotel" Component={UploadPlaces} />*/
            <Route path="/bookinginfo" Component={BookingInformation} />}
        </Routes>
        {/* <p> */}
        {/* <Destination__slider /> */}
        {/* <Test />
        <MapComponentTest /> */}
        {/* </p> */}
      </switch>
    </>
  );
}
export default App;
