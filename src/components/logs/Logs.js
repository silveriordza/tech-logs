//REMOVE useState
import React, {useEffect } from 'react'
//Need to import connect to connect the React component to Redux
import {connect} from 'react-redux'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'
import PropTypes from 'prop-types'
import {getLogs} from '../../actions/logActions'


//Since we are mapping the entire state in the mapStateToProps function below, we need to pull from that state the logs and the loading properties.
const Logs = ({log:{logs, loading}, getLogs}) => {
	
	useEffect(() => {
		//This will load once when the coponent is loaded.
		getLogs();
		// eslint-disable-next-line
	}, []);
		
	if(loading || logs === null){
		//This preloader component is showing a very nice progress bar while the list of logs is loading
		//If you don't use this preloader, it will show whatever message you put in here, for example <h4>Loading...</h4> but is not nice to see this message, is more nice to use the Materializer Preloader feature is a much nicer loading bar.
		return <Preloader />
	}

	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4 className="center">System Logs</h4>
			</li>
			{(!loading && logs.length === 0 ? ( 
				<p className='center'>No logs to show...</p> 
				) : (
				logs.map(log => <LogItem log={log} key={log.id}/>)
			))}
		</ul>
	)
}

//Everytime we have a prop as a parameter of the component, it is good idea to add it here to the component propTypes descriptions, for this don't forget to import the PropTypes from prop-types:
Logs.propTypes = {
	log: PropTypes.object.isRequired,
	getLogs: PropTypes.func.isRequired,
}

//Map the state to the props for the export of this Logs component.
const mapStateToProps = state => ({
	//we can set an object and then describe what we want from the state:
	log: state.log,

})

// When you bring in "connect" you need to modify the export, and it takes in two things, first, the map state to props, if you want to get enything from you app level state and bring it in to the component, it does it with props:
export default connect(mapStateToProps, {getLogs})(Logs);
