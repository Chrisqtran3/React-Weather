const React = require('react');

let About = (props) => {
	return (
		<div>
			<h3 className="text-center">About</h3>
			<p>
				This is weather application, built using React.js, that allows you to search the weather of a specific 
				city.
			</p>

			<p>Technologies Used:</p>
			<ul>
				<li>React with Webpack</li>
				<li>Foundation CSS framework</li>
				<li>Axios</li>
			</ul>

			<p>Links:</p>
			<ul>
				<li><a href="https://facebook.github.io/react/">React</a></li>
				<li><a href="http://openweathermap.org/api">Open Weather API</a></li>
				<li><a href="http://foundation.zurb.com/sites/docs/">Foundation Documentation</a></li>
			</ul>
		</div>
	);
}

module.exports = About;