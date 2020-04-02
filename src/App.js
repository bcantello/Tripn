import React, {useEffect, useState, createContext} from 'react';
import './styles.css';
import Header from "./Components/header";
import Main from "./Components/Main";

require('dotenv').config();

function App() {
    const [endPoints, setEndPoints] = useState([]);
    const [directions, setDirections] = useState({});
    const [waypointsArr, setWaypointsArr] = useState([]);

    console.log('waypointsArr from App: ',waypointsArr);

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const startingLocation = `&origin=${endPoints[0]}`;
    const endingLocation = `&destination=${endPoints[1]}`;
    const apiKey = `&key=${process.env.REACT_APP_TRIPN_GMAPS_API_KEY}`;
    const url = 'https://maps.googleapis.com/maps/api/directions/json?';

    const waypointArr = waypointsArr.map( waypoint => {
        return ( waypoint=`optimize:true|via:${waypoint}|` );
    });
    const waypoints = `&waypoints=${waypointArr.join('')}`;
    const apiUrl = `${proxyUrl}${url}${apiKey}${startingLocation}${endingLocation}${waypoints}`;

    useEffect(() => {
        const fetchDirections = async () => {
            let resp = await fetch(`${apiUrl}`);
            let resText = await resp.text();
            try {
                let resJson = JSON.parse(resText);
                setDirections(resJson)
            } catch (e) {
                alert(`The application has encountered the following error: ${e}
                Please close and restart the application.`)
            }
        };
        fetchDirections();
    }, [endPoints, waypointsArr, apiUrl]);
    console.log('fetchdirections() from App: ',directions);

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
                    apiKey,
                    waypoints,
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
