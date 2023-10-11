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
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <p>
        {/* <Destination__slider /> */}
        <Test />
        <MapComponentTest />
      </p>
    </>
  );
}
export default App;
