import FooterPage from "../components/Footer/FooterPage";
import SubNavMain from "../components/Homepage/SubNavMain";
import Header__button from "../components/Homepage/Header__button";
import Searchpage__sidebar from "../components/Searchpage/Searchpage__sidebar";
import { Link } from "react-router-dom";
import "../style/Searchpage/Searchpage.scss";
import React from "react";
import UserInfoComponent from "../components/UserInfoComponent";
import { searchForPlaces } from "../api/PageApi";
import NavBar from "../components/NavBar";


class Searchpage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: []
		};
	}

	async componentDidMount() {
		const destination = JSON.parse(localStorage.getItem("destination"));
		const d = JSON.parse(localStorage.getItem("date"));
		const options = JSON.parse(localStorage.getItem("options"));
		console.log(destination, d, options);

		const date = { came: d.startDate, leave: d.endDate };
		const city = destination;
		const memberCount = {
			adult: options.adult,
			children: options.children
		};

		const result = await searchForPlaces(city, date, memberCount, options.room);
		console.log(result);
		this.setState({ searchResults: result });
	}

	render() {
		const { searchResults } = this.state;
		return (
			<>
			<div className="Searchpage">
				<div className="homepage">
					<div className="main">
						<Link to="/" className="main-child">
							<img className="main-child" alt="" src="/logo__web.png" />
						</Link>
						<NavBar />
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
						<UserInfoComponent />
                        <Searchpage__sidebar searchResults={searchResults} />
					</div>
				</div>
				<FooterPage />
			</div>
			</>
		);
	}
}

export default Searchpage;
