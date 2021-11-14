import React, {useState, useEffect } from 'react'
import TechItem from './TechItem';

const TechListModal = () => {
	const [techs, setTechs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		//This will load once when the coponent is loaded.
		getTechs();
		// eslint-disable-next-line
	}, []);
	
	//This function will pull all the logs from the technicians from the JSON Server data.
	const getTechs = async () => {
		setLoading(true);
		const res = await fetch('/techs');
		const data = await res.json();
		setTechs(data);
		setLoading(false);
	}

	return (
		<div id="tech-list-modal" className='modal'>
			<div className="modal-content">
				<h4>Technician List</h4>
				<ul className="collection">
					{!loading && techs.map(tech => (
						<TechItem tech={tech} key={tech.id} />
					))}
				</ul>
			</div>
		</div>

	)
}

export default TechListModal
