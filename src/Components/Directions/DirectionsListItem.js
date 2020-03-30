import React from "react";

export default function DirectionsListItem(props) {
    console.log("THis is the shit!!!!!!!!!! ", props);
    //Below html stripping function from Sabaz on stackOverflow
    function strip(html){
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    let direction = strip(props['element']['html_instructions']);
    return (
        <div className="directions-item">
            {direction}
        </div>
    );
}
