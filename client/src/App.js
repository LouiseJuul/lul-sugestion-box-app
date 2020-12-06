import React, {useEffect, useState} from 'react';
import Suggestions from "./Suggestions";
import Suggestion from "./Suggestion";
import { Router } from "@reach/router";

const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/suggestions`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []); 

  return (
    <>

      <h1>Suggestion App!</h1>
      <Router>
        <Suggestions path="/" suggestions={data}></Suggestions>
        <Suggestion path="/:id" 
          getSuggestion={id => data.find(s => s._id === id)}
 ></Suggestion>

 </Router>

    </>
  );
}

export default App;
