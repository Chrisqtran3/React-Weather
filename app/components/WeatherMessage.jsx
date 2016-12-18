const React = require('react');

let WeatherMessage = (props) => {
	let {temp, location} = props;

	return (
		<h3 className="text-center">It is {Math.round(temp)} degrees in {location}.</h3>
	);

}

module.exports = WeatherMessage;