import React from 'react'
import ReactDOM from 'react-dom'

let target = document.getElementById('vanilla');

setInterval((call) => {
    target.innerHTML = '<div><h1>Son las <span>' + new Date().toLocaleTimeString() + '</span></h1></div>'
}, 1000)

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>
                    Son las <span>{this.state.date.toLocaleTimeString()}</span>.
                </h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('react')
);