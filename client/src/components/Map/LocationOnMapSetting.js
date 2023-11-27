import * as React from "react";
import { useState, useCallback } from "react";
import { render } from "react-dom";
import MapGL, { Marker } from "@goongmaps/goong-map-react";
// import ControlPanel from './control-panel';
// import MAP_STYLE from './map-style-basic-v8.json';
import Pin from "./Pin";

const GOONG_MAPTILES_KEY = "KU4zG7SF6zb7kqPXuyKrwUvRREtTmH4xdCZ9BbM4"; // Set your goong maptiles key here

function getCursor({ isHovering, isDragging }) {
  return isDragging ? "grabbing" : isHovering ? "pointer" : "default";
}

function LocationOnMapSetting(props) {
  const [viewport, setViewport] = useState({
    // latitude: 21.02727,
    // longitude: 105.85119,
    latitude: 10.787811400315592,
    longitude: 106.70537121898475,
    zoom: 13,
    bearing: 0,
    pitch: 0,
  });

  const [marker, setMarker] = useState({
    latitude: 10.787811400315592,
    longitude: 106.70537121898475,
  });

  return (
    <>
      <MapGL
        {...viewport}
        width= {props.width}
        height= {props.height}
        mapStyle="https://tiles.goong.io/assets/goong_map_web.json"
        onViewportChange={setViewport}
        goongApiAccessToken={GOONG_MAPTILES_KEY}
      >
        { props.markers.map((value, index)=>
        ( 
          <Marker key={index}
            longitude={value.longitude}
            latitude={value.latitude}
            offsetTop={-20}
            offsetLeft={-10}
          >
            <Pin size={20} color="#dd0" />
          </Marker>
        ))}
       {console.log(props.markers)} 
      </MapGL>
    </>
  );
}

export default LocationOnMapSetting;
