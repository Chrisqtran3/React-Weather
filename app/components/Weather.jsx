import React, { Component } from 'react'
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

class Weather extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: false
		}

		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(location) {
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
	}

	componentDidMount() {
		let location = this.props.location.query.location;

		if(location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	}

	componentWillReceiveProps(newProps) {
		let location = newProps.location.query.location;

		if(location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	}

	render() {
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
}

export default Weather;
