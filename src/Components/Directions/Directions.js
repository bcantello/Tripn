import React, {useContext} from "react";
import DirectionsList from "./DirectionsList";
import {UniversalProps} from "../../App";
import './directionsStyles.css'

export default function Directions() {
    const universalProps = useContext(UniversalProps);
    return(
        <div>
            <div id={'end-directions-placeholder'}></div>
            <DirectionsList directions={universalProps.directions}/>
        </div>
    )
}
