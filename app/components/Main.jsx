import React from 'react'
import Nav from 'Nav';

let Main = ({ children }) => {
	return (
		<div>
			<Nav />
			<div className="block">
				<div className="row">
					<div className="columns medium-6 large-4 small-centered">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
