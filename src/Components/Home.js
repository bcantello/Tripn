import React, {useContext} from "react";
import StartingLocationsForm from "./StartingLocationsForm";
import { UniversalProps } from '../App'

export default function Home() {
    const universalProps = useContext(UniversalProps);
    return (
        <StartingLocationsForm
            setEndPoints={universalProps.setEndPoints}
            handleSubmit={universalProps.handleEndpointsSubmit}
        />
    )
}
