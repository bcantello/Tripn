import React from "react";
import './directionsStyles.css';

export default function DirectionsListItem(props) {
    //Below html stripping function from Sabaz on stackOverflow
    function strip(html){
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    let direction = strip(props['element']['html_instructions']);
    let distance = props['element'].distance.text;
    return (
        <div className="directions-item">
            <span className={'direction-element'}>{direction}</span>
            <span className={'distance-element'}>{distance}</span>
        </div>
    );
}
