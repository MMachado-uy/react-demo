import React from 'react';

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
                <span className="large">
                    {this.state.date.getHours()}:{this.state.date.getMinutes()}
                </span>
                <span className="small">
                    {(this.state.date.getSeconds() < 10) ? '0' + this.state.date.getSeconds() : this.state.date.getSeconds()}
                </span>
            </div>
        );
    }
}

export default Clock