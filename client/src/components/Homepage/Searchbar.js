import "../../style/Homepage/Searchbar.scss";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
// import { getSearch } from "../../api/PageApi";
const Searchbar = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, SetOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  let searchPageData = undefined;

  const handleOption = (name, operation) => {
    SetOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = async () => {
    // navigate("/Searchpage", { state: { destination, date, options } });
    navigate("/Searchpage");
    localStorage.setItem("destination", JSON.stringify(destination));
    localStorage.setItem("date", JSON.stringify(date));
    localStorage.setItem("options", JSON.stringify(options));

    // let response = await getSearch(destination);
    // searchPageData = response
    // // console.log(searchPageData)
    // for (let i = 0; i < searchPageData.length; i++) {
    //   console.log(searchPageData[i].score)
    // }
  };

  return (
    <div className="search-bar">
      <div className="content">
        <div className="content__item">
          <div className="content__item-location">
            <div className="content__item-location--top">
              <img className="location-icon" alt="" src="/vector.svg" />
              <div className="location">Location</div>
              <img className="inner-icon" alt="" src="/vector-4855.svg" />
            </div>
            <div className="content__item-where">
              <nav className="justify-content-between">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Bạn muốn đi đâu?"
                  aria-label="Bạn muốn đi đâu?"
                  onChange={(e) => setDestination(e.target.value)}
                ></input>
              </nav>
            </div>
          </div>

          <div className="content__item-date">
            <div
              onClick={() => {
                setOpenDate(!openDate);
                setOpenOptions(false);
              }}
              className="content__item-date--top"
            >
              <img className="date-icon" alt="" src="/vector1.svg" />
              <div className="date">Date</div>
              <img className="inner-icon-1" alt="" src="/vector-4855.svg" />
            </div>
            <div
              onClick={() => {
                setOpenDate(!openDate);
                setOpenOptions(false);
              }}
              className="content__item-date--check"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </div>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
                className="date"
              />
            )}
          </div>

          <div className="content__item-guest">
            <div
              className="content__item-guest--top"
              onClick={() => {
                setOpenOptions(!openOptions);
                setOpenDate(false);
              }}
            >
              <img className="guest-icon" alt="" src="/users.svg" />
              <div className="guest">Guest</div>
              <img className="inner-icon-2" alt="" src="/vector-4855.svg" />
            </div>
            <div
              onClick={() => {
                setOpenOptions(!openOptions);
                setOpenDate(false);
              }}
              className="content__item-quantity"
            >
              {`${options.adult} Người lớn · ${options.children} Trẻ em · ${options.room} Phòng`}
            </div>
            {openOptions && (
              <div className="guest__options">
                <div className="guest__options-item">
                  <span className="guest__options-text">Người lớn</span>
                  <div className="guest__options-counter">
                    <button
                      disabled={options.adult <= 1}
                      className="guest__options-counter-button "
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="guest__options-counter-number">
                      {options.adult}
                    </span>
                    <button
                      className="guest__options-counter-button "
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="guest__options-item">
                  <span className="guest__options-text">Trẻ em</span>
                  <div className="guest__options-counter">
                    <button
                      disabled={options.children <= 0}
                      className="guest__options-counter-button "
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="guest__options-counter-number">
                      {options.children}
                    </span>
                    <button
                      className="guest__options-counter-button "
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="guest__options-item">
                  <span className="guest__options-text">Phòng</span>
                  <div className="guest__options-counter">
                    <button
                      disabled={options.room <= 1}
                      className="guest__options-counter-button "
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="guest__options-counter-number">
                      {options.room}
                    </span>
                    <button
                      className="guest__options-counter-button "
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <Link to="/Searchpage">
          <div className="explore-btn">
            <div className="explore-now" onClick={handleSearch}>
              Explore Now
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Searchbar;
