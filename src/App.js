import React, {useEffect, useState} from 'react';
import './styles.css';
import StartingLocationsForm from "./Components/StartingLocationsForm";
import Header from "./Components/header";
import Waypoints from "./Components/Waypoints/Waypoints";
import WaypointList from "./Components/Waypoints/WaypointList";

function App() {
    const [endPoints, setEndPoints] = useState([]);
    console.log('App - endPoints', endPoints);
    const [directions, setDirections] = useState({});
    const [waypointsArr, setWaypointsArr] = useState([]);

    useEffect(() => {
        const fetchDirections = async () => {
            let proxy_url = 'https://cors-anywhere.herokuapp.com/';
            const startingLocation = endPoints[0];
            console.log("here: ",endPoints[0]);
            const endingLocation = endPoints[1];
            const apiKey = '';
            const url = `https://maps.googleapis.com/maps/api/directions/json?&key=${apiKey}&origin=${startingLocation}&destination=${endingLocation}`

            let resp = await fetch(`${proxy_url}${url}`);
            let respJson = await resp.json();
            console.log('fetchDirections-return: ', respJson);
            setDirections(respJson)
        };
        fetchDirections();
    }, [endPoints]);
    console.log('what is directions? ', directions);

    const handleEndpointsSubmit = (start, end) => {
        console.log("handleSubmit from App: ",start, end,endPoints);
        setEndPoints([...endPoints, start, end]);
    };

    const handleWaypointsSubmit = (waypoint) => {
        console.log("handleSubmit from App: ",waypoint, waypointsArr);
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
            <StartingLocationsForm
                setEndPoints={setEndPoints}
                handleSubmit={handleEndpointsSubmit}
            />
            <Waypoints
                handleWaypointsSubmit={handleWaypointsSubmit}
                setWaypointsArr={setWaypointsArr}
            />
            <WaypointList
                deleteDestination={deleteDestination}
                waypointsArr={waypointsArr}
            />
        </div>
    );
}

export default App;
