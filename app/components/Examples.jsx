const React = require('react');
let {Link} = require('react-router');

let Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are some example cities to try out!</p>
			<ol>
				<li>
					<Link to='/?location=Philadelphia'>Philadelphia, PA</Link>	
				</li>
				<li>
					<Link to='/?location=Paris'>Paris, FRA</Link>	
				</li>
			</ol>
		</div>
	);
}

module.exports = Examples;