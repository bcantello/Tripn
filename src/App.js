import React, {useEffect, useState} from 'react';
import './styles.css';
import StartingLocationForm from "./Components/StartingLocationForm";
import Header from "./Components/header";

function App() {
  const [endPoints, setEndPoints] = useState([]);
  console.log('App - endPoints', endPoints);
    const [directions, setDirections] = useState({});

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

  const handleSubmit = (start, end) => {
      console.log("handleSubmit from App: ",start, end,endPoints);
    setEndPoints([...endPoints, start, end]);
  };

    return (
        <div className="App">
            <Header/>
            <StartingLocationForm
                setEndPoints={setEndPoints}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default App;
