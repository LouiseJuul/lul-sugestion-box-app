import {useEffect, useState} from 'react';
import Suggestions from "./Suggestions";
import Suggestion from "./Suggestion";
import { Router } from "@reach/router";
import AuthService from "./AuthService";
import Login from "./Login";

const API_URL = process.env.REACT_APP_API;
const authService = new AuthService(`${API_URL}/users/authenticate`);

function App() {
  const [data, setData] = useState([]);

  function compare(a, b) {
    if (a.title > b.title) return 1;
    else return -1;
  }


  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/suggestions`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data.sort(compare));
      authService.getUsername();
    }
    getData();
  }, []); 

  async function login(username, password) {
    try {
      const resp = await authService.login(username, password);
      console.log("Authentication:", resp.msg);
    } catch (e) {
      console.log("Login", e);
    }
  }



  async function postSignature(id, username) {
    console.log("Adding the signature", username);
    console.log("id", id);

    // TODO: Post the username to /api/suggestions/:id/signature
    // TODO: username in the body
  }




  // if logged in "is logged in" - not looged in - show the login component
  let loginContent = <p>Is logged in</p>
  if (!authService.loggedIn()) {
    loginContent = <Login login={login} />;
  } 

  return (
    <>
  <h1>Suggestion App!</h1>
  {loginContent}
      <Router>
        <Suggestions path="/" suggestions={data}></Suggestions>
        <Suggestion path="/:id" 
          getSuggestion={id => data.find(s => s._id === id)}
          username={authService.getUsername()}
          postSignature={postSignature}
 ></Suggestion>

 </Router>

    </>
  );
}

export default App;
