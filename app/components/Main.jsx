const React = require('react');
let Nav = require('Nav');

let Main = (props) => {
	return (
		<div>
			<Nav />
			<div className="block">
				<div className="row">
					<div className="columns medium-6 large-4 small-centered">
						{props.children}
					</div>
				</div>
			</div>
		</div>
	);
}

module.exports = Main;