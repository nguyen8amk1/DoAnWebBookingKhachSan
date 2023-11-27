import React from "react";
import MapModal from "../views/MapModal";
import LocationOnMapSetting from "./Map/LocationOnMapSetting";

class MapBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            openMapModal: false,
			markers: [
				{
					latitude: 10.787811400315592,
					longitude: 106.70537121898475,
				},
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

    render() {
        return <>
            <MapModal
                isOpenModal={this.state.openMapModal}
                toggle={this.toggleMapModal}
            />

            <div onClick={this.showMapModal}>
                <LocationOnMapSetting markers={this.state.markers} width="250px" height="200px" style={{}} />
            </div>
        </>
    }
}

export default MapBox;