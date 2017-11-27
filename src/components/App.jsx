import React from 'react';

import Clock from './Clock.jsx'
import GHLink from './GHLink.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <GHLink />
                <Clock />
            </div>
        );
    }
}

export default App