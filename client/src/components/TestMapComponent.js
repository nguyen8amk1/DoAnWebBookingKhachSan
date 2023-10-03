import React from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// Map box things to note  
class MapComponentTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -70.9,
            lat: 42.35,
            zoom: 9
        }
        // mapboxgl.accessToken = process.env.REACT_APP_API_KEY;
        mapboxgl.accessToken = 'pk.eyJ1Ijoibmd1eWVuOGFtazEiLCJhIjoiY2ticjZmdmpjMHRtczJzczQ5cmRqdGo1MCJ9.8BqG_JgqnnXsIbmaCxMc2w';
        console.log(process.env.REACT_APP_API_KEY);
        this.mapContainer = React.createRef();
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    }

    render() {
        return <>
            <div ref={this.mapContainer} className='map-container'></div>
        </>;
    }
}

export default MapComponentTest;