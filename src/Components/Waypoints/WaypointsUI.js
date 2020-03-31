import React, {useContext} from "react";
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
            <button>Finalize Trip</button>
        </div>
    )
}
