import React, {useContext} from "react";
import DirectionsList from "./DirectionsList";
import {UniversalProps} from "../../App";

export default function Directions() {
    const universalProps = useContext(UniversalProps);
    return(
        <div>
            <DirectionsList directions={universalProps.directions}/>
        </div>

    )
}
