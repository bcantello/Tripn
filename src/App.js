import React, {useEffect, useState, createContext} from 'react';
import './styles.css';
import Header from "./Components/header";
import Main from "./Components/Main";

require('dotenv').config();

function App() {
    const [endPoints, setEndPoints] = useState([]);
    const [directions, setDirections] = useState({});
    const [waypointsArr, setWaypointsArr] = useState([]);
    console.log("endpoints from app",endPoints);
    console.log("waypointsArr from app",waypointsArr)
    console.log("directions from app",directions)

    useEffect(() => {
        const fetchDirections = async () => {
            let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const startingLocation = `&origin=${endPoints[0]}`;
            const endingLocation = `&destination=${endPoints[1]}`;
            const apiKey = `&key=${process.env.REACT_APP_TRIPN_GMAPS_API_KEY}`;
            const url = 'https://maps.googleapis.com/maps/api/directions/json?';

            const waypointArr = waypointsArr.map( waypoint => {
                return ( waypoint=`|${waypoint}` );
            });
            const waypoints = `&waypoints=optimize:true|${waypointArr.join('')}`;

            let resp = await fetch(`${proxyUrl}${url}${startingLocation}${endingLocation}${waypoints}${apiKey}`);
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

    const resetState = () => {
        setWaypointsArr([]);
        setEndPoints([]);
    };

    return (
        <div className="App">
            <Header reset={resetState}/>
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
