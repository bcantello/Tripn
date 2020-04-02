import React, {useContext} from "react";
import {UniversalProps} from "../../App";
import MapContainer from "./Map3";

function MapList() {
    const props = useContext(UniversalProps);
    const destinationsCoords = [];
    if (props.directions.routes[0].legs[0].via_waypoint[0]) {
        const coordArr = props.directions.routes[0].legs[0].via_waypoint[0].map((location) => {
            return (
                destinationsCoords.push(location)
            );
        });
        return <MapContainer coords={coordArr}/>;
    } else {
        return <MapContainer coords={destinationsCoords}/>;
    }
}

export default MapList;