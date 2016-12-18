let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=05a1f6eae3f40b3064288d2d11fc3a95&units=imperial';


module.exports = {
	getData: function(location) {
		let encodedLocation = encodeURIComponent(location);
		let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res) {
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return {
					temp: res.data.main.temp,
					country: res.data.sys.country,
					condition: res.data.weather[0].main
				};
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	}
}

