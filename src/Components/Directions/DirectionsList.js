import React from "react";
import DirectionsListItem from "./DirectionsListItem";

export default function DirectionsList({directions}) {
    let directionsListArr = this;
    console.log("DirectionsList props: ", directions);
    if (directions['routes'] !== undefined) {
        console.log(directions['routes'][0]['legs'][0]['steps']);
        let directionSteps = directions['routes'][0]['legs'][0]['steps'];
        directionsListArr = directionSteps.map( (e, index) => {
            return (
                <DirectionsListItem element={e} key={index}/>
            );
        });
    }
    return <div className="directions-list">{directionsListArr}</div>;
}
