import React from "react";
import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react';
import Marker from "./Map/Marker";
import axios from "axios";

const googleMapAPIKey = "AIzaSyDc7PnOq3Hxzq6dxeUVaY8WGLHIePl0swY";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const getPositionFromAddress = async (address) => {
	const query = `https://maps.googleapis.com/maps/api/place/textsearch/json
  ?query=restaurants%20in%20Sydney
  &key=${googleMapAPIKey}`;

	const result = await axios.get(query);
	console.log(result);
	// NOTE: currently the API call is not working since the api key is not valid one 
	
	return result;
}

export default function SimpleMap() {
	const defaultProps = {
		center: {
			lat: 10.788133596609491,
			lng: 106.70537643068802
		},
		zoom: 11
	};

	// NOTE: store the api key some where else; this is not good 
	const diachi = "2 Nguyễn Bỉnh Khiêm, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh 700000"
	getPositionFromAddress(diachi);

	// TODO: get the lat and lng from address string 
	return (
		// Important! Always set the container height explicitly
		<div style={{ height: '500px', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: googleMapAPIKey }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<Marker lat={defaultProps.center.lat} lng={defaultProps.center.lng} text="My Marker" />
			</GoogleMapReact>
		</div>
	);
}