import React, {useContext} from "react";
import DirectionsList from "./DirectionsList";
import {UniversalProps} from "../../App";
import './directionsStyles.css'

export default function Directions() {
    const universalProps = useContext(UniversalProps);
    return(
        <div>
            <div id={'end-directions-placeholder'} style={{display: 'none'}}>
                Looks like you're done Tripn. Time to start planning your next adventure!
            </div>
            <DirectionsList directions={universalProps.directions}/>
        </div>
    )
}
