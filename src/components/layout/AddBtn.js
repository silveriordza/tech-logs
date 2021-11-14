import React from 'react'

const AddBtn = () => {
	return (
		//Make sure the href for modals, match perfectly with some DIV that will show up the modal forms. Look for the #add-log-modal in the AddLogModal.js div which is the matching one.
		<div className='fixed-action-btn'>
			<a href="#add-log-modal" className="btn-floating btn-large blue darken-2 modal-trigger">
				<i className="large material-icons">add</i>
			</a>
			<ul>
				<li>
					<a href="#tech-list-modal" className="btn-floating green modal-trigger">
						<i className="material-icons">person</i>
					</a>
				</li>
				<li>
					<a href="#add-tech-modal" className="btn-floating red modal-trigger">
						<i className="material-icons">person_add</i>
					</a>
				</li>
			</ul>
		</div>
	)
}

export default AddBtn
