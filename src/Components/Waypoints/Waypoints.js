import React, { useState } from "react";

function Waypoints(props) {
    const [input, setInput] = useState("");

    const handleChange = e => {
        const userInput = e.target.value;
        setInput(userInput);
    };
    const handleSubmit = e => {
        e.preventDefault();
        props.handleWaypointsSubmit(input);
    };
    return (
        <div className="create-new">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Add a destination'
                    onChange={handleChange}
                    value={input}
                />
                <button>Add destination</button>
            </form>
        </div>
    );
}

export default Waypoints;
