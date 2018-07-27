import React from 'react'
import axios from 'axios'

/*b0e9949acd4d0ae24eae95da963d5bcca2deab2f5c8c32e34980b88c318e63f1*/
class Background extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            hiRes: '',
            loRes: ''
        }
    }

    componentDidMount() {
        axios.get(`https://api.unsplash.com/photos/random/?client_id=b0e9949acd4d0ae24eae95da963d5bcca2deab2f5c8c32e34980b88c318e63f1&featured`)
        .then(res => {
            console.log("res", res);

            this.setState({
                hiRes: res.data.urls.full,
                loRes: res.data.urls.thumb
            }, () => {
                console.log('HERE >>>>>>>>>>>>', this.state)
            })
        })
    }

    imgLoaded() {
        if (this.state.hiRes !== '' && this.state.loRes !== '') {
            this.setState({
                loaded: true
            })        
        }
    }

    render() {
        let { loaded, hiRes, loRes } = this.state
        let style = {
            backgroundImage: (loaded ? `url(${hiRes})` : `url(${loRes})`)
        }

        return (
            <div id="Background" className="">
                <div 
                    id="canvas" 
                    className={(loaded ? 'loaded' : '')}
                    style={style}>
                </div>
                <img 
                    className="prefetch"
                    hidden
                    src={hiRes}
                    rel="prefetch"
                    alt=""
                    onLoad={this.imgLoaded.bind(this)}
                />
            </div>
        );
    }
}

export default Background