import React from "react";
import WaypointListItem from "./WaypointListItem";
import './waypointStyles.css'

function WaypointList(props) {
    const waypointListArr = props.waypointsArr.map((waypoint, index) => {
        return (
            <WaypointListItem
                waypoint={waypoint}
                key={index}
                index={index}
                deleteDestination={props.deleteDestination}
            />
        );
    });
    return <div className="waypoints-list">{waypointListArr}</div>;
}

export default WaypointList;
