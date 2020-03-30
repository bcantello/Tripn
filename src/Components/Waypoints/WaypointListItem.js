import React from "react";

function WaypointListItem({ waypoint, index, deleteDestination }) {
    return (
        <div className="waypoint-item">
      <span className="name">
        <span>{waypoint}</span>
      </span>
            <span className="actions">
        <span>
          <button onClick={ () => deleteDestination(index) }>Delete</button>
        </span>
      </span>
        </div>
    );
}

export default WaypointListItem;