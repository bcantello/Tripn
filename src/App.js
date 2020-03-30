import React, {useEffect, useState} from 'react';
import './styles.css';
import StartingLocationsForm from "./Components/StartingLocationsForm";
import Header from "./Components/header";
import Waypoints from "./Components/Waypoints/Waypoints";
import WaypointList from "./Components/Waypoints/WaypointList";
import DirectionsList from "./Components/Directions/DirectionsList";

function App() {
    const [endPoints, setEndPoints] = useState([]);
    const [directions, setDirections] = useState({});
    const [waypointsArr, setWaypointsArr] = useState([]);
    console.log("waypoints array: ", waypointsArr);

    useEffect(() => {
        const fetchDirections = async () => {
            let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const startingLocation = `&origin=${endPoints[0]}`;
            const endingLocation = `&destination=${endPoints[1]}`;
            const apiKey = '&key=';
            const url = 'https://maps.googleapis.com/maps/api/directions/json?';

            const waypointArr = waypointsArr.map( waypoint => {
                return ( waypoint=`via:${waypoint}|` );
            });
            const waypoints = `&waypoints=${waypointArr.join('')}`;

            let resp = await fetch(`${proxyUrl}${url}${apiKey}${startingLocation}${endingLocation}${waypoints}`);
            let restext = await resp.text();
            try {
                let resJson = JSON.parse(restext);
                console.log('fetchDirections-return: ', resJson);
                setDirections(resJson)
            } catch (e) {
                alert(`The application has encountered the following error: ${e}
                Please close and restart the application.`)
            }
        };
        fetchDirections();
    }, [endPoints, waypointsArr]);
    console.log('what is directions? ', directions);

    const handleEndpointsSubmit = (start, end) => {
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

    console.log("WHAT THE HELL: ", Object.getOwnPropertyNames(directions).sort());
    console.log(directions['routes']);

    return (
        <div className="App">
            <Header/>
            <StartingLocationsForm
                setEndPoints={setEndPoints}
                handleSubmit={handleEndpointsSubmit}
            />
            <div>
                <Waypoints
                    handleWaypointsSubmit={handleWaypointsSubmit}
                    setWaypointsArr={setWaypointsArr}
                />
                <WaypointList
                    deleteDestination={deleteDestination}
                    waypointsArr={waypointsArr}
                />
                <button>Finalize Trip</button>
            </div>
            <DirectionsList directions={directions}/>
        </div>
    );
}

export default App;
