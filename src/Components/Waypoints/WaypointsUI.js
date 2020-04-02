import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Waypoints from "./Waypoints";
import WaypointList from "./WaypointList";
import './waypointStyles.css'
import {UniversalProps} from "../../App";

export default function WaypointsUI() {
    const universalProps = useContext(UniversalProps);
    return(
        <div>
            <div id={'waypoints-headline'}>
                <span>So many amazing places to see!</span>
                <br/>
                <span>Why not add a few?</span>
            </div>
            <Waypoints
                handleWaypointsSubmit={universalProps.handleWaypointsSubmit}
                setWaypointsArr={universalProps.setWaypointsArr}
            />
            <WaypointList
                deleteDestination={universalProps.deleteDestination}
                waypointsArr={universalProps.waypointsArr}
            />
            <Link to={'/directions'}>
                <button id={'waypoints-finalize-button'}>Finalize Trip</button>
            </Link>
        </div>
    )
}
