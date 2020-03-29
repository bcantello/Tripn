import React from "react";
import WaypointListItem from "./WaypointListItem";

function WaypointList(props) {
    const waypointListArr = props.waypointsArr.map((todo, index) => {
        return (
            <WaypointListItem
                todo={todo}
                key={index}
                index={index}
                deleteDestination={props.deleteDestination}
            />
        );
    });
    return <div className="items-list">{waypointListArr}</div>;
}

export default WaypointList;
