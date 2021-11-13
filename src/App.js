import React, {useEffect} from 'react'

//Import the css from materialize, and also the M function of it.
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {

  useEffect(()=>{
    // Initialize Materialize JS for a better syling of the webpage
    M.AutoInit(); //Now we will be able to use modal dialogs, buttons and other stuff.
  });

  return (
    <div className="App">My App</div>
  );
}

export default App;
