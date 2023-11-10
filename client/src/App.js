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
        <Route exact path="/" Component={UploadPlaces} />
        {/* <Route exact path="/" Component={HotelDetail} /> */}
        {/* <Route exact path="/" Component={Homepage} />
        <Route path="/Searchpage" Component={Searchpage} /> */}
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
