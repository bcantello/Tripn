import React, {useState} from 'react';
import './styles.css';
import HomeForm from "./Components/HomeForm";

function App() {
  const [endPoints, setEndPoints] = useState([]);
  console.log('App - endPoints', endPoints);

  const handleSubmit = (location) => {
    setEndPoints([...endPoints, location]);
  };

  return (
      <div className="App">
        <HomeForm setEndPoints={setEndPoints} handleSubmit={handleSubmit}/>
      </div>
  );
}

export default App;
