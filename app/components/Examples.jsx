const React = require('react');
let {Link} = require('react-router');

let Examples = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are some example cities to try out!</p>
			<ol>
				<li>
					<Link to="/?location=New%20York%20City">New York City, New York</Link>
				</li>
				<li>
					<Link to='/?location=Paris'>Paris, France</Link>	
				</li>
				<li>
					<Link to="/?location=Tokyo">Tokyo, Japan</Link>
				</li>
			</ol>
		</div>
	);
}

module.exports = Examples;