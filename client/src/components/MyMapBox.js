import React from "react";
import { searchForPlaces } from "../api/PageApi";
import MapModal from "../views/MapModal";
import LocationOnMapSetting from "./Map/LocationOnMapSetting";

class MyMapBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            openMapModal: false,
			markers: [
			],
		};
	}

	showMapModal = () => {
		console.log("Show map");
		this.setState({openMapModal: true});
	};

	toggleMapModal = () => {
		const temp = !this.state.openMapModal;
		this.setState({openMapModal: temp});
	};

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
		// console.log(result);
		for(let i = 0; i < result.length; i++) {
			const a = result[i];
			// console.log(a.long, a.lat);
			this.state.markers.push({
				longitude: a.long, 
				latitude: a.lat, 
			});
		}
	}

    render() {
        return <>
            <MapModal
                isOpenModal={this.state.openMapModal}
                toggle={this.toggleMapModal}
				markers={this.state.markers}
            />

            <div onClick={this.showMapModal}>
                <LocationOnMapSetting markers={this.state.markers} width="250px" height="200px" style={{}} />
            </div>
        </>
    }
}

export default MyMapBox;