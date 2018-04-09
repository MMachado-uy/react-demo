import React from 'react'
import axios from 'axios'
import Loader from './Loader.jsx'

import * as Utils from '../utils/utils'

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
            country: '',
            refreshEvery: this.props.refreshEvery
		};
	}

    componentWillMount() {
        this.getClientLocationAndWeather()
    }

    componentDidMount() {
        let { refreshEvery } = this.state
        setInterval(() => this.getCurrentWeather(), refreshEvery)
    }

    getClientLocationAndWeather() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (location) =>{
                    this.setState({
                        lat: location.coords.latitude,
                        lon: location.coords.longitude
                    }, () => {
                        this.getCurrentWeather()
                    })
                }, 
                (reject) => {
                    this.getLocation()
                }
            )
        }
    }

    getLocation() {
        axios.get(`//api.ipify.org`)
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                axios.get(`//freegeoip.net/json/${res.data}`)
                .then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                        let { latitude, longitude, city, country_name } = res.data
 
						this.setState({
                            lat: latitude,
                            lon: longitude,
                            city,
                            country: country_name
                        }, (res) => {
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
        
		axios.get(`//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${env.WEATHER_APPID}`)
		.then((res) => {
            let { clouds, wind } = res.data
            let { city, country } = this.state

            if (city === '' || country === '') {
                city = res.data.name
                country =  Utils.mapCountryName(res.data.sys.country)
            }

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
        let iconClass = Utils.mapWeatherIcon(weatherDesc.icon)
        let currTemp = Utils.kelvinToCelsius(weatherData.temp)
        let windDirection = `wi wi-wind from-${wind.deg}-deg`

        return (
            (!weatherLoaded ?
                <div id="Weather">
                    <Loader />
                </div>
            :
                <div id="Weather" className="text-center">
                    <span className={iconClass}></span>
                    <span>
                        {currTemp}° |
                        {weatherData.pressure} hPa |
                        {wind.speed} m/s
                            <span className={windDirection}></span>
                    </span>
                    <div>
                        <span>{city}, {country}</span>
                    </div>
                </div>
            )
        );
    }
}

export default Weather