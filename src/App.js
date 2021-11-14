import React, {Fragment, useEffect} from 'react'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'

//Bring the store in with the Provider
//React Redux is the module that connext react to redux using Providers. It allows us to provide the App level state to react.
import {Provider} from 'react-redux'
//Import the Store from Store.js
import store from './store'
 
//Import the css from materialize, and also the M function of it.
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css'; 

const App = () => {

  useEffect(()=>{
    // Initialize Materialize JS for a better syling of the webpage
    M.AutoInit(); //Now we will be able to use modal dialogs, buttons and other stuff.
  });

  //Now add the provider and wrap the entire application within the provider, also pass the store as the store prop of the provider.
  return <Provider store={store}>
      <Fragment>
          <SearchBar/>
          <div className="container" >
            <AddBtn />
            <AddLogModal/>
            <EditLogModal/>
            <AddTechModal />
            <TechListModal />
            <Logs/>
          </div>
      </Fragment>
    </Provider>
  
}

export default App;
