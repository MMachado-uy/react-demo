import React from 'react'

class Loader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="loader">
                <div className="bouncer-1"></div>
                <div className="bouncer-2"></div>
            </div>
        )
    }
}

export default Loader