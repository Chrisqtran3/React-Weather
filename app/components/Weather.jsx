const React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');
let ErrorModal = require('ErrorModal');

let Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleSearch: function(location) {
		let that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined,
			country: undefined,
			condition: undefined
		});

		openWeatherMap.getData(location)
			.then(function(data) {
				that.setState({
					location: location,
					temp: data.temp,
					country: data.country,
					condition: data.condition,
					isLoading: false
				});
			}, function(e) {
				that.setState({
					isLoading: false,
					errorMessage: e.message
				});
			});
	},
	componentDidMount: function() {
		let location = this.props.location.query.location;

		if(location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},
	componentWillReceiveProps: function(newProps) {
		let location = newProps.location.query.location;

		if(location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}	
	},
	render: function() {
		let {isLoading, temp, location, country, condition, errorMessage} = this.state;

 		function renderMessage() {
 			if(isLoading) {
 				return <h3 className="text-center">Fetching weather...</h3>;
 			} else if(temp && location) {
 				return <WeatherMessage temp={temp} location={location} country={country} condition={condition}/>
 			}
 		}

 		function renderError() {
 			if(typeof errorMessage === 'string') {
 				return (
 					<ErrorModal message={errorMessage}/>
 				);
 			}
 		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;