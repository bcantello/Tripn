import React, {useState} from "react";

export default function HomeForm(props) {
    const [startingLocation, setStartingLocation] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        props.handleSubmit(startingLocation);
        setStartingLocation("");
    };

    const handleChange = e => {
        const location = e.target.value;
        setStartingLocation(location);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Starting-Location">Starting Location</label>
                <input
                    id="starting-location"
                    type="text"
                    value={startingLocation}
                    onChange={handleChange}
                />
                <input type="submit" value="Set Starting Location" />
            </form>
        </>
    );
};