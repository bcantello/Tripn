import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Waypoints from "./Waypoints";
import WaypointList from "./WaypointList";
import {UniversalProps} from "../../App";

export default function WaypointsUI() {
    const universalProps = useContext(UniversalProps);
    return(
        <div>
            <Waypoints
                handleWaypointsSubmit={universalProps.handleWaypointsSubmit}
                setWaypointsArr={universalProps.setWaypointsArr}
            />
            <WaypointList
                deleteDestination={universalProps.deleteDestination}
                waypointsArr={universalProps.waypointsArr}
            />
            <Link to={'/directions'}>
                <button>Finalize Trip</button>
            </Link>
        </div>
    )
}