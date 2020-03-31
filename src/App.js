import React, {useEffect, useState, createContext} from 'react';
import './styles.css';
import Header from "./Components/header";
import Main from "./Components/Main";

function App() {
    const [endPoints, setEndPoints] = useState([]);
    const [directions, setDirections] = useState({});
    const [waypointsArr, setWaypointsArr] = useState([]);

    useEffect(() => {
        const fetchDirections = async () => {
            let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const startingLocation = `&origin=${endPoints[0]}`;
            const endingLocation = `&destination=${endPoints[1]}`;
            const apiKey = `&key=AIzaSyDI9xPzHZ2CJU4qtow3dAY35UQHcei--CI`;
            const url = 'https://maps.googleapis.com/maps/api/directions/json?';

            const waypointArr = waypointsArr.map( waypoint => {
                return ( waypoint=`via:${waypoint}|` );
            });
            const waypoints = `&waypoints=${waypointArr.join('')}`;

            let resp = await fetch(`${proxyUrl}${url}${apiKey}${startingLocation}${endingLocation}${waypoints}`);
            let restext = await resp.text();
            try {
                let resJson = JSON.parse(restext);
                setDirections(resJson)
            } catch (e) {
                alert(`The application has encountered the following error: ${e}
                Please close and restart the application.`)
            }
        };
        fetchDirections();
    }, [endPoints, waypointsArr]);

    const handleEndpointsSubmit = (start, end) => {
        setEndPoints([...endPoints, start, end]);
    };

    const handleWaypointsSubmit = (waypoint) => {
        setWaypointsArr([...waypointsArr, waypoint]);
    };

    const deleteDestination = i => {
        let newWaypoints = [...waypointsArr];
        newWaypoints.splice(i, 1);
        setWaypointsArr(newWaypoints);
    };

    return (
        <div className="App">
            <Header/>
            <div id={'main-content-container'}>
                <UniversalProps.Provider value={
                    {
                    endPoints,
                    setEndPoints,
                    directions,
                    setDirections,
                    waypointsArr,
                    setWaypointsArr,
                    handleEndpointsSubmit,
                    handleWaypointsSubmit,
                    deleteDestination
                    }
                }>
                    <Main/>
                </UniversalProps.Provider>
            </div>
        </div>
    );
}

export default App;
export const UniversalProps = createContext();
