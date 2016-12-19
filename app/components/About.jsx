const React = require('react');

let About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>
				This is a weather application, built using React.js, that allows you to search the weather of a specific 
				city.
			</p>

			<p><u>Technologies Used</u>:</p>
			<ul>
				<li>React with Webpack</li>
				<li>Foundation CSS framework</li>
				<li>Axios</li>
				<li>Sass</li>
			</ul>

			<p><u>Documentation</u>:</p>
			<ul>
				<li><a href="https://facebook.github.io/react/">React</a></li>
				<li><a href="http://openweathermap.org/api">Open Weather API</a></li>
				<li><a href="http://foundation.zurb.com/sites/docs/">Foundation</a></li>
				<li><a href="http://sass-lang.com/">Sass</a></li>
			</ul>
		</div>
	);
}

module.exports = About;