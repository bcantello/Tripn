import React, {useState} from "react";
import DirectionsListItem from "./DirectionsListItem";
import './directionsStyles.css'

export default function DirectionsList({directions}) {
    let directionsListArr = this;
    let destination = this;
    let time = this;
    let distance = this;
    const [count, setCount] = useState(0);
    const container = document.getElementById('end-directions-placeholder');

    const handleCountIncrement = () => {
        if (count < directions['routes'][0]['legs'].length) {
            setCount(count + 1);
            let tempCount = count + 1;
            if (tempCount === directions['routes'][0]['legs'].length) {
                container.style.display = "block";
            }
        }
    };

    const handleCountDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
            let tempCount = count - 1;
            if (tempCount < directions['routes'][0]['legs'].length) {
                container.style.display = "none";
            }
        }
    };

    if (directions['routes'] !== undefined) {
        if (directions['routes'][0]['legs'][count] !== undefined) {
            destination = directions['routes'][0]['legs'][count]['end_address'];
            time = directions['routes'][0]['legs'][count]['duration']['text'];
            distance = directions['routes'][0]['legs'][count]['distance']['text'];
            let directionSteps = directions['routes'][0]['legs'][count]['steps'];
            directionsListArr = directionSteps.map((e, index) => {
                return (
                    <DirectionsListItem element={e} key={index}/>
                );
            });
        }
    }
    return(
        <div id={'directions-list-container'}>
            <div className={'destination-element'}>{destination}</div>
            <div className={'distance-time-element'}><span>{time} </span><span> {distance}</span></div>
            <div className="directions-list">{directionsListArr}</div>
            <button id={'directions-button'} onClick={handleCountDecrement}>Previous Destination</button>
            <button id={'directions-button'} onClick={handleCountIncrement}>Next Destination</button>
        </div>
    )
}
