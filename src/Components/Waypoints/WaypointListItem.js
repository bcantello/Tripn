import React from "react";
import './waypointStyles.css'

function WaypointListItem({ waypoint, index, deleteDestination }) {
    return (
        <div className="waypoint-item">
            <span className="name">
                <span>{waypoint}</span>
            </span>
            <span className="actions">
                <span>
                    <button onClick={ () => deleteDestination(index) }>Remove</button>
                </span>
            </span>
        </div>
    );
}

export default WaypointListItem;