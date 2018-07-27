import React from 'react'
import axios from 'axios'

/*b0e9949acd4d0ae24eae95da963d5bcca2deab2f5c8c32e34980b88c318e63f1*/
class Background extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            hiRes: '',
            loRes: '',
            photographerName: '',
            photographerUrl: ''
        }
    }

    componentDidMount() {
        axios.get(`https://api.unsplash.com/photos/random/?client_id=b0e9949acd4d0ae24eae95da963d5bcca2deab2f5c8c32e34980b88c318e63f1&featured`)
        .then(res => {
 console.log("res ", res);
            let { user, urls } = res.data
            let append = 'utm_source=react_clock&utm_medium=referral'
            let photographerName = `${user.first_name} ${user.last_name}`

            this.setState({
                hiRes: urls.full,
                loRes: urls.thumb,
                photographerName,
                photographerUrl: `${user.links.html}?${append}`
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
        let { loaded, hiRes, loRes, photographerName, photographerUrl } = this.state
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
                {loaded ? 
                    <div className="fixed bottom-right smallest">
                        Photo by <a target="_blank" href={photographerUrl}>{photographerName}</a> on <a target="_blank" href="https://unsplash.com/?utm_source=react_clock&utm_medium=referral">Unsplash</a>
                    </div>
                : ''}
            </div>
        );
    }
}

export default Background