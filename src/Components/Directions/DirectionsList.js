import React, {useState} from "react";
import DirectionsListItem from "./DirectionsListItem";
import './directionsStyles.css'

export default function DirectionsList({directions}) {
    let directionsListArr = this;
    const [count, setCount] = useState(0);
    let destination = this;

    const handleClick = () => {
        setCount(count + 1);
    };

    if (directions['routes'] !== undefined) {
        if (directions['routes'][0]['legs'][count] !== undefined) {
            destination = directions['routes'][0]['legs'][count]['end_address'];
            let directionSteps = directions['routes'][0]['legs'][count]['steps'];
            directionsListArr = directionSteps.map((e, index) => {
                return (
                    <DirectionsListItem element={e} key={index}/>
                );
            });
        } else {
           const container = document.getElementById('end-directions-placeholder');
            let message = document.createElement('DIV');
            let content = document.createTextNode('Looks like you\'re done Tripn. Time to start planning your next adventure!');
            message.appendChild(content);
            container.appendChild(message);
            let nextButton = document.getElementById('directions-button');
            nextButton.remove();
        }
    }
    return(
        <div id={'directions-list-container'}>
            <div className={'destination-element'}>{destination}</div>
            <div className="directions-list">{directionsListArr}</div>
            <button id={'directions-button'} onClick={handleClick}>Next Destination</button>
        </div>
    )
}
