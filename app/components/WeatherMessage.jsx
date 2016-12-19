const React = require('react');

let WeatherMessage = (props) => {
	let {temp, location, country, condition} = props;

	return (
		<div className="block">
			<h4>It is <b>{Math.round(temp)} &#8457;</b> in {location}, {country}.</h4>
			<div>
				<h4>Current Weather Condition: <b>{condition}</b></h4>
			</div>
		</div>
	);

}

module.exports = WeatherMessage;