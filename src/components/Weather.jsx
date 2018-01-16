import React from 'react'
import axios from 'axios'

class Weather extends React.Component {
    constructor(props) {
		super(props);
		
		this.state = { 
			lat: '',
            lon: '' ,
            weatherDesc: {},
            weatherData: {},
            weatherLoaded: false,
            clouds: {},
            wind: {},
            city: '',
            country: ''
		};
	}

    componentWillMount() {
        this.getClientLocationAndWeather()
    }
    
    getClientLocationAndWeather() {
        axios.get(`//api.ipify.org`)
        .then(res => {
            if (res.status >= 200 && res.status < 300) {
                axios.get(`//freegeoip.net/json/${res.data}`)
                .then(res => {
                    if (res.status >= 200 && res.status < 300) {
						let { latitude, longitude } = res.data
						this.setState({
                            lat: latitude, 
                            lon: longitude
                        }, res => {
							this.getCurrentWeather()
						})
                    }
                }).catch(error => {
					console.log('Error calling the geolocation API')
				})
            } else {
                console.log('Error calling the weather API')
            }
        }).catch(error => {
            console.log('Error calling the weather API')
        })
    }

	getCurrentWeather() {
		let { lat, lon } = this.state

		axios.get(`//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=f560f5686c9d44522da78432786fa3f6`)
		.then(res => {
            let { clouds, wind } = res.data
            let city = res.data.name
            let country = res.data.sys.country
            let weatherDesc = res.data.weather[0]
            let weatherData = res.data.main

            this.setState({
                weatherDesc,
                weatherData,
                weatherLoaded: true,
                clouds,
                wind,
                city,
                country
            })
		})
    }
    
    mapWeatherIcon(apiCode) {
        let iconClass = ''
        
        let iconMap = {
            '01d': 'wi wi-day-sunny',
            '01n': 'wi wi-night-clear',
            '02d': 'wi wi-day-cloudy',
            '02n': 'wi wi-night-cloudy',
            '03d': 'wi wi-cloud',
            '03n': 'wi wi-cloud',
            '04d': 'wi wi-cloudy',
            '04n': 'wi wi-cloudy',
            '09d': 'wi wi-rain',
            '09n': 'wi wi-rain',
            '10d': 'wi wi-day-rain',
            '10n': 'wi wi-night-rain',
            '11d': 'wi wi-thunderstorm',
            '11n': 'wi wi-thunderstorm',
            '13d': 'wi wi-snow',
            '13n': 'wi wi-snow',
            '50d': 'wi wi-fog',
            '50n': 'wi wi-fog'
        }

        if (typeof iconMap[apiCode] === 'undefined') {
            iconClass = 'wi wi-na'
        } else {
            iconClass = iconMap[apiCode]
        }

        return iconClass
    }

    kelvinToCelsius(kelvin) {
        return kelvin - 273.15
    }

    capitalize(string) {
        let result = ''
        if (string) {
            result = string.charAt(0).toUpperCase() + string.slice(1);
        }
        return result
    }

    render() {
        let { 
            weatherDesc,
            weatherData,
            weatherLoaded,
            clouds,
            wind,
            city,
            country 
        } = this.state;
        let iconClass = this.mapWeatherIcon(weatherDesc.icon)
        let currTemp = Math.round(this.kelvinToCelsius(weatherData.temp))

        return (
            (!weatherLoaded ? 
                <div id="Weather"></div>
            :
                <div id="Weather">
                    <div className={iconClass}></div>
                    <span> {currTemp}° | {weatherData.pressure} hPa | {wind.speed} m/s from {wind.deg} deg</span>
                    <div className="text-center">
                        <span>{city}, {country}</span>
                    </div>
                </div>
            )
        );
    }
}

export default Weather