import React from 'react'

import GHLogo from '../assets/images/github.png'

class GHLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="gh-link" className="fixed top-right">
                <a href="https://github.com/MauricioModelit/react-demo" target="_blank">
                    <img src={GHLogo} alt="Github Logo"/>
                </a>
            </div>
        );
    }
}

export default GHLink