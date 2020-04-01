import React, {useContext} from "react";
import '../styles.css'
import {UniversalProps} from "../App";

export default function Map() {
    const universalProps = useContext(UniversalProps);
    const apiKey = universalProps.apiKey;
    console.log(apiKey);
    console.log(universalProps.directions);
    let starting = '';
    let ending = '';
    let waypointsLength = '';
    let waypointList = '&waypoints=' + universalProps.waypointsArr.join('');
    // let waypointList = universalProps.waypoints;
    console.log(waypointList);
    if (universalProps.directions['geocoded_waypoints'] !== undefined) {
        waypointsLength = universalProps.directions['geocoded_waypoints']['length'];
        console.log(waypointsLength);
        starting = universalProps.directions['geocoded_waypoints'][0]['place_id'];
        ending = universalProps.directions['geocoded_waypoints'][waypointsLength - 1]['place_id'];
    }
    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=place_id:${starting}&destination=place_id:${ending}${apiKey}${waypointList}`;

    console.log(starting);
    return(
        <iframe
                src={mapUrl}
                allowFullScreen ></iframe>
    )
}
