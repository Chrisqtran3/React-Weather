const React = require('react');

let WeatherMessage = (props) => {
	let {temp, location} = props;

	return (
		<h2>It is {Math.round(temp)} degrees in {location}.</h2>
	);

}

module.exports = WeatherMessage;