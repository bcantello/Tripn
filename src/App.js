import React, {useState} from 'react';
import './styles.css';
import StartingLocationForm from "./Components/StartingLocationForm";

function App() {
  const [endPoints, setEndPoints] = useState([]);
  console.log('App - endPoints', endPoints);

  const handleSubmit = (start, end) => {
      console.log("handleSubmit from App: ",start, end,endPoints);
    setEndPoints([...endPoints, start, end]);
  };

    return (
        <div className="App">
            <StartingLocationForm
                setEndPoints={setEndPoints}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default App;
