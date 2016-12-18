const React = require('react');

let WeatherMessage = (props) => {
	let {temp, location, country, condition} = props;

	return (
		<div className="block">
			<h4>It is {Math.round(temp)} degrees in {location}, {country}.</h4>
			<div>
				<h4>Current Weather Condition: {condition}</h4>
			</div>
		</div>
	);

}

module.exports = WeatherMessage;