import React from "react";

function WaypointListItem({ todo, index, deleteDestination }) {
    return (
        <div className="to-do-item">
      <span className="name">
        <span>{todo}</span>
      </span>
            <span className="actions">
        <span>
          <button onClick={() => deleteDestination(index)}>Delete</button>
        </span>
      </span>
        </div>
    );
}

export default WaypointListItem;