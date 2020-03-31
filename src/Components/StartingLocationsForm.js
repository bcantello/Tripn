import React, {useState} from "react";
import {Redirect, withRouter} from "react-router-dom";

function StartingLocationsForm(props) {
    const [startingLocation, setStartingLocation] = useState('');
    const [endingLocation, setEndingLocation] = useState('');
    const [waypointRoute, setWaypointRoute] = useState('/');

    const handleSubmit = e => {
        e.preventDefault();
        props.handleSubmit(startingLocation, endingLocation);
        setStartingLocation("");
        setEndingLocation('');
        setWaypointRoute('/waypoints');
    };

    const handleStartingChange = e => {
        const location = e.target.value;
        setStartingLocation(location);
    };

    const handleEndingChange = e => {
        const location = e.target.value;
        setEndingLocation(location);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Starting-Location">Starting Location</label>
                <input
                    id="starting-location"
                    type="text"
                    value={startingLocation}
                    onChange={handleStartingChange}
                />
            </div>
            <div>
                <label htmlFor="Ending-Location">Ending Location</label>
                <input
                    id="ending-location"
                    type="text"
                    value={endingLocation}
                    onChange={handleEndingChange}
                />
            </div>
            <input type="submit" value="Set Starting Location"/>
            <Redirect to={`${waypointRoute}`} />
        </form>
    );
}

export default withRouter(StartingLocationsForm);
