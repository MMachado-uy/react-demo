import React from 'react'
import axios from 'axios'

import Clock from './Clock.jsx'
import GHLink from './GHLink.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('Else statement')
        axios.get('//api.ipify.org')
        .then(res => {
            console.log("GET IP - res: ", res);
            if (res.status >= 200 && res.status < 300) {
                axios.get('http://ip-api.com/json/' + res.data)
                .then(res => {
                    console.log("GET GEO - res: ", res);
                    if (res.status >= 200 && res.status < 300) {
                        let lat = res.data.lat
                        let lon = res.data.lon

                        axios.get(`//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=f560f5686c9d44522da78432786fa3f6`)
                        .then(res => {
                            console.log("GET WEATHER - res: ", res);
                        })
                    }
                })
            } else {
                console.log('Error calling the weather API')
            }
        }).catch(function (error) {
            console.log('Error calling the weather API')
        })
    }

    render() {
        return (
            <div>
                <GHLink />
                <Clock />
            </div>
        )
    }
}

export default App