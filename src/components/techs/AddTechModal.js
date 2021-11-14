import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const onSubmit = () => {
		if (firstName === '' || lastName === ''){
			M.toast({html: 'Please enter the first and last name'});
		} else {
			console.log(firstName, lastName);
		}
		setFirstName('')
		setLastName('')
	}

	return (
		//Note this div is the modal that will show up when the + bubble button is clicked and the id should perfectly match with the href of that button which was href='#add-log-modal'
		<div id='add-tech-modal' className='modal'>
			<div className="modal-content">
				<h4>New Technician</h4>
				<div className="row">
					<div className="input-field">
						<input 
							type="text" 
							name='firstName' 
							value={firstName}  
							onChange={e => setFirstName(e.target.value)}
						/>
						<label htmlFor="message" className="active">
							First Name
						</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<input 
							type="text" 
							name='lastName' 
							value={lastName} 
							onChange={e => setLastName(e.target.value)}
						/>
						<label htmlFor="message" className="active">
							Last Name
						</label>
					</div>
				</div>
				
			</div>
			<div className="modal-footer">
				<a 
					href="#!" 
					onClick={onSubmit}
					className="modal-close waves-effect blue waves-light btn">
					Enter
				</a>
			</div>
		</div>
	)
}

export default AddTechModal
