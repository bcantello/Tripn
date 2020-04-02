import React, {useState} from "react";
import DirectionsListItem from "./DirectionsListItem";

export default function DirectionsList({directions}) {
    let directionsListArr = this;
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    if (directions['routes'] !== undefined) {
        if (directions['routes'][0]['legs'][count] !== undefined) {
            let directionSteps = directions['routes'][0]['legs'][count]['steps'];
            directionsListArr = directionSteps.map((e, index) => {
                return (
                    <DirectionsListItem element={e} key={index}/>
                );
            });
        // } else {
        //    const container = document.getElementById('directions-list-container');
        //    container.appendChild(<div>Looks like you're done Tripn!</div>)
        }
    }
    return(
        <div id={'directions-list-container'}>
            <div className="directions-list">{directionsListArr}</div>
            <button onClick={handleClick}>Next Destination</button>
        </div>
    )
}
