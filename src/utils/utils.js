/**********************/
/*   Unit conversion   /
/**********************/

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

/**********************/
/*   Data conversion   /
/**********************/

/**
 * Capitalizes the first letter of a given string
 * Ignoring some character symbols i.e: (hello) -> (Hello)
 * @param {String} word
 */
export function capitalize(word) {
	let uppercaseReset = ['{', '[', '!', '(', '¿', '-', '<', '¡']
	let result = word
	
	if (word) {
		let i = 0
		while (uppercaseReset.indexOf(word.charAt(i)) >= 0 && i < word.length) {
			i++
		}
		if (i > 0) {
			result = word.slice(0, i).toLowerCase() + word.charAt(i).toUpperCase() + word.slice(i + 1).toLowerCase();
		} else {
			result = word.charAt(i).toUpperCase() + word.slice(i + 1).toLowerCase();
		}
	}
	return result
}

/**
 * Capitalizes each first letter in a phrase and low-cases the rest of the word
 * @param {String} phrase 
 */
export function capitalizePhrase(phrase) {
	let result = phrase
	if (phrase) {
		let words = result.split(' ')
		
		words = words.map((word) => {
			return capitalize(word);
		})

		result = words.join(' ')
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

/**
 * Maps an ISO 3166-1 alfa-2 Country Code to the full length country name
 * @param {ISO 3166-1 alfa-2 Country Code} countryCode 
 */
export function mapCountryName(countryCode) {
	let countryName

	let countriesMap = {
		'AX': 'AALAND ISLANDS',
		'AF': 'AFGHANISTAN',
		'AL': 'ALBANIA',
		'DZ': 'ALGERIA',
		'AS': 'AMERICAN SAMOA',
		'AD': 'ANDORRA',
		'AO': 'ANGOLA',
		'AI': 'ANGUILLA',
		'AQ': 'ANTARCTICA',
		'AG': 'ANTIGUA AND BARBUDA',
		'AR': 'ARGENTINA',
		'AM': 'ARMENIA',
		'AW': 'ARUBA',
		'AU': 'AUSTRALIA',
		'AT': 'AUSTRIA',
		'AZ': 'AZERBAIJAN',
		'BS': 'BAHAMAS',
		'BH': 'BAHRAIN',
		'BD': 'BANGLADESH',
		'BB': 'BARBADOS',
		'BY': 'BELARUS',
		'BE': 'BELGIUM',
		'BZ': 'BELIZE',
		'BJ': 'BENIN',
		'BM': 'BERMUDA',
		'BT': 'BHUTAN',
		'BO': 'BOLIVIA',
		'BA': 'BOSNIA AND HERZEGOWINA',
		'BW': 'BOTSWANA',
		'BV': 'BOUVET ISLAND',
		'BR': 'BRAZIL',
		'IO': 'BRITISH INDIAN OCEAN TERRITORY',
		'BN': 'BRUNEI DARUSSALAM',
		'BG': 'BULGARIA',
		'BF': 'BURKINA FASO',
		'BI': 'BURUNDI',
		'KH': 'CAMBODIA',
		'CM': 'CAMEROON',
		'CA': 'CANADA',
		'CV': 'CAPE VERDE',
		'KY': 'CAYMAN ISLANDS',
		'CF': 'CENTRAL AFRICAN REPUBLIC',
		'TD': 'CHAD',
		'CL': 'CHILE',
		'CN': 'CHINA',
		'CX': 'CHRISTMAS ISLAND',
		'CC': 'COCOS (KEELING) ISLANDS',
		'CO': 'COLOMBIA',
		'KM': 'COMOROS',
		'CD': 'CONGO, Democratic Republic of',
		'CG': 'CONGO, Republic of',
		'CK': 'COOK ISLANDS',
		'CR': 'COSTA RICA',
		'CI': 'COTE D\'IVOIRE',
		'HR': 'CROATIA',
		'CU': 'CUBA',
		'CY': 'CYPRUS',
		'CZ': 'CZECH REPUBLIC',
		'DK': 'DENMARK',
		'DJ': 'DJIBOUTI',
		'DM': 'DOMINICA',
		'DO': 'DOMINICAN REPUBLIC',
		'EC': 'ECUADOR',
		'EG': 'EGYPT',
		'SV': 'EL SALVADOR',
		'GQ': 'EQUATORIAL GUINEA',
		'ER': 'ERITREA',
		'EE': 'ESTONIA',
		'ET': 'ETHIOPIA',
		'FK': 'FALKLAND ISLANDS (MALVINAS)',
		'FO': 'FAROE ISLANDS',
		'FJ': 'FIJI',
		'FI': 'FINLAND',
		'FR': 'FRANCE',
		'GF': 'FRENCH GUIANA',
		'PF': 'FRENCH POLYNESIA',
		'TF': 'FRENCH SOUTHERN TERRITORIES',
		'GA': 'GABON',
		'GM': 'GAMBIA',
		'GE': 'GEORGIA',
		'DE': 'GERMANY',
		'GH': 'GHANA',
		'GI': 'GIBRALTAR',
		'GR': 'GREECE',
		'GL': 'GREENLAND',
		'GD': 'GRENADA',
		'GP': 'GUADELOUPE',
		'GU': 'GUAM',
		'GT': 'GUATEMALA',
		'GN': 'GUINEA',
		'GW': 'GUINEA-BISSAU',
		'GY': 'GUYANA',
		'HT': 'HAITI',
		'HM': 'HEARD AND MC DONALD ISLANDS',
		'HN': 'HONDURAS',
		'HK': 'HONG KONG',
		'HU': 'HUNGARY',
		'IS': 'ICELAND',
		'IN': 'INDIA',
		'ID': 'INDONESIA',
		'IR': 'IRAN (ISLAMIC REPUBLIC OF)',
		'IQ': 'IRAQ',
		'IE': 'IRELAND',
		'IL': 'ISRAEL',
		'IT': 'ITALY',
		'JM': 'JAMAICA',
		'JP': 'JAPAN',
		'JO': 'JORDAN',
		'KZ': 'KAZAKHSTAN',
		'KE': 'KENYA',
		'KI': 'KIRIBATI',
		'KP': 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF',
		'KR': 'KOREA, REPUBLIC OF',
		'KW': 'KUWAIT',
		'KG': 'KYRGYZSTAN',
		'LA': 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC',
		'LV': 'LATVIA',
		'LB': 'LEBANON',
		'LS': 'LESOTHO',
		'LR': 'LIBERIA',
		'LY': 'LIBYAN ARAB JAMAHIRIYA',
		'LI': 'LIECHTENSTEIN',
		'LT': 'LITHUANIA',
		'LU': 'LUXEMBOURG',
		'MO': 'MACAU',
		'MK': 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF',
		'MG': 'MADAGASCAR',
		'MW': 'MALAWI',
		'MY': 'MALAYSIA',
		'MV': 'MALDIVES',
		'ML': 'MALI',
		'MT': 'MALTA',
		'MH': 'MARSHALL ISLANDS',
		'MQ': 'MARTINIQUE',
		'MR': 'MAURITANIA',
		'MU': 'MAURITIUS',
		'YT': 'MAYOTTE',
		'MX': 'MEXICO',
		'FM': 'MICRONESIA, FEDERATED STATES OF',
		'MD': 'MOLDOVA, REPUBLIC OF',
		'MC': 'MONACO',
		'MN': 'MONGOLIA',
		'MS': 'MONTSERRAT',
		'MA': 'MOROCCO',
		'MZ': 'MOZAMBIQUE',
		'MM': 'MYANMAR',
		'NA': 'NAMIBIA',
		'NR': 'NAURU',
		'NP': 'NEPAL',
		'NL': 'NETHERLANDS',
		'AN': 'NETHERLANDS ANTILLES',
		'NC': 'NEW CALEDONIA',
		'NZ': 'NEW ZEALAND',
		'NI': 'NICARAGUA',
		'NE': 'NIGER',
		'NG': 'NIGERIA',
		'NU': 'NIUE',
		'NF': 'NORFOLK ISLAND',
		'MP': 'NORTHERN MARIANA ISLANDS',
		'NO': 'NORWAY',
		'OM': 'OMAN',
		'PK': 'PAKISTAN',
		'PW': 'PALAU',
		'PS': 'PALESTINIAN TERRITORY',
		'PA': 'PANAMA',
		'PG': 'PAPUA NEW GUINEA',
		'PY': 'PARAGUAY',
		'PE': 'PERU',
		'PH': 'PHILIPPINES',
		'PN': 'PITCAIRN',
		'PL': 'POLAND',
		'PT': 'PORTUGAL',
		'PR': 'PUERTO RICO',
		'QA': 'QATAR',
		'RE': 'REUNION',
		'RO': 'ROMANIA',
		'RU': 'RUSSIAN FEDERATION',
		'RW': 'RWANDA',
		'SH': 'SAINT HELENA',
		'KN': 'SAINT KITTS AND NEVIS',
		'LC': 'SAINT LUCIA',
		'PM': 'SAINT PIERRE AND MIQUELON',
		'VC': 'SAINT VINCENT AND THE GRENADINES',
		'WS': 'SAMOA',
		'SM': 'SAN MARINO',
		'ST': 'SAO TOME AND PRINCIPE',
		'SA': 'SAUDI ARABIA',
		'SN': 'SENEGAL',
		'CS': 'SERBIA AND MONTENEGRO',
		'SC': 'SEYCHELLES',
		'SL': 'SIERRA LEONE',
		'SG': 'SINGAPORE',
		'SK': 'SLOVAKIA',
		'SI': 'SLOVENIA',
		'SB': 'SOLOMON ISLANDS',
		'SO': 'SOMALIA',
		'ZA': 'SOUTH AFRICA',
		'GS': 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS',
		'ES': 'SPAIN',
		'LK': 'SRI LANKA',
		'SD': 'SUDAN',
		'SR': 'SURINAME',
		'SJ': 'SVALBARD AND JAN MAYEN ISLANDS',
		'SZ': 'SWAZILAND',
		'SE': 'SWEDEN',
		'CH': 'SWITZERLAND',
		'SY': 'SYRIAN ARAB REPUBLIC',
		'TW': 'TAIWAN',
		'TJ': 'TAJIKISTAN',
		'TZ': 'TANZANIA, UNITED REPUBLIC OF',
		'TH': 'THAILAND',
		'TL': 'TIMOR-LESTE',
		'TG': 'TOGO',
		'TK': 'TOKELAU',
		'TO': 'TONGA',
		'TT': 'TRINIDAD AND TOBAGO',
		'TN': 'TUNISIA',
		'TR': 'TURKEY',
		'TM': 'TURKMENISTAN',
		'TC': 'TURKS AND CAICOS ISLANDS',
		'TV': 'TUVALU',
		'UG': 'UGANDA',
		'UA': 'UKRAINE',
		'AE': 'UNITED ARAB EMIRATES',
		'GB': 'UNITED KINGDOM',
		'US': 'UNITED STATES',
		'UM': 'UNITED STATES MINOR OUTLYING ISLANDS',
		'UY': 'URUGUAY',
		'UZ': 'UZBEKISTAN',
		'VU': 'VANUATU',
		'VA': 'VATICAN CITY STATE (HOLY SEE)',
		'VE': 'VENEZUELA',
		'VN': 'VIET NAM',
		'VG': 'VIRGIN ISLANDS (BRITISH)',
		'VI': 'VIRGIN ISLANDS (U.S.)',
		'WF': 'WALLIS AND FUTUNA ISLANDS',
		'EH': 'WESTERN SAHARA',
		'YE': 'YEMEN',
		'ZM': 'ZAMBIA',
		'ZW': 'ZIMBABWE'
	}

	if (typeof countriesMap[countryCode.toUpperCase()] === 'undefined') {
		countryName = 'N/A'
	} else {
		countryName = capitalizePhrase(countriesMap[countryCode.toUpperCase()])
	}
	
	return countryName
}