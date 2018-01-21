import React from 'react'

import Clock from './Clock.jsx'
import Weather from './Weather.jsx'
import GHLink from './GHLink.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <GHLink />
                <Clock />
                <Weather 
                    refreshEvery={1800000}
                />
            </div>
        )
    }
}

export default App