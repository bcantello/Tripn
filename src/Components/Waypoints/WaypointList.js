import React from "react";
import WaypointListItem from "./WaypointListItem";

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
    return <div className="items-list">{waypointListArr}</div>;
}

export default WaypointList;
