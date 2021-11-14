import React, {useState, useEffect } from 'react'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'

const Logs = () => {
	const [logs, setLogs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		//This will load once when the coponent is loaded.
		getLogs();
		// eslint-disable-next-line
	}, []);
	
	//This function will pull all the logs from the technicians from the JSON Server data.
	const getLogs = async () => {
		setLoading(true);
		const res = await fetch('/logs');
		const data = await res.json();
		setLogs(data);
		setLoading(false);
	}

	if(loading){
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

export default Logs
