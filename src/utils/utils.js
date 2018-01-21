/**
 * Unit Conversion
 */
export function kelvinToCelsius(k) {
	return Math.round(k - 273.15)
}

export function kelvinToFahrenheit(k) {
	return Math.round(k * 9/5 - 459.67)
}

export function msToMph(ms) {
	return Math.round(ms * 2.23694)
}

export function msToKnots(ms) {
	return Math.round(ms * 1.94254)
}

export function msToFts(ms) {
	return Math.round(ms * 3.28084)
}

export function msToKmh(ms) {
	return Math.round(ms * 3.6)
}

/**
 * Data conversion
 */
export function capitalize(string) {
	let result = string
	if (string) {
		result = string.charAt(0).toUpperCase() + string.slice(1);
	}
	return result
}

/**
 * Maps the API's code for current weather icon, to the installed font
 * @param {string} apiCode The code for the icon provided by the weather API
 */
export function mapWeatherIcon(apiCode) {
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