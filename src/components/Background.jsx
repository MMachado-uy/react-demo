import React from 'react'
import axios from 'axios'

import Clock from './Clock.jsx'
import Weather from './Weather.jsx'
import GHLink from './GHLink.jsx'
import ImgCredit from './ImgCredit.jsx'

class Background extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            image: '',
            background: '',
            author: '',
            sizeTracker: '',
            imageSizes: ['thumb', 'small', 'regular', 'raw', 'full']
        }
        
    }
    
    componentDidMount() {
        console.log('DID MOUNT')
        this.getImage()        
        setInterval(
            () => this.getImage(),
            300000
        )
    }

    // Get a random Image
    getImage() {
        console.log('Get Image')
        axios.get('https://api.unsplash.com/photos/random/', {
            params: {
                client_id: env.UNSPLASH_ACCESS
            }
        }).then((res) => {
            console.log('Get Image - Response')
            if (res.status === 200 && typeof res.data !== 'undefined') {
                console.log("res.data ", res.data);
                this.setState({ // Set the image dta
                    image: res.data,
                    author: res.data.user
                }, () => {
                    this.loadNextSize();    // Start the size rotation
                })
            }
        })
        .catch((err) => {
            // TODO: Do something
        })
    }

    loadNextSize() {
        console.log('Here')
        let { sizeTracker, image, imageSizes, background } = this.state
        console.log("sizeTracker ", sizeTracker);


        if (sizeTracker === '') {
            sizeTracker = 0

            if (typeof image.urls[imageSizes[sizeTracker]] !== 'undefined') {
                background = image.urls[imageSizes[sizeTracker]]
            }
        } else if (sizeTracker < imageSizes.length -1) {
            sizeTracker++
            
            while (typeof image.urls[imageSizes[sizeTracker]] === 'undefined' 
                   && sizeTracker < imageSizes.length -1) {         
                sizeTracker++
            }

            background = image.urls[imageSizes[sizeTracker]]
            console.log("sizeTracker ", sizeTracker);
            console.log("imageSizes[sizeTracker] ", imageSizes[sizeTracker]);
            console.log("image.urls ", image.urls);
            console.log("background ", background);
        }

        this.setState({
            background,
            sizeTracker
        })
    }

    render() {
        let { image, background } = this.state
 console.log("background ", background);
 console.log("image ", image);

        return (
            <div id="Background" style={{ backgroundImage: `url(${background})` }}>
                <img rel="prefetch" hidden src={background} alt="" width="300" onLoad={this.loadNextSize.bind(this)}/>
                <GHLink />
                <div className="mid-col">
                    <Clock />
                    <Weather 
                        refreshEvery={1800000}
                    />
                </div>
                <ImgCredit 
                    author={this.state.author}
                />
            </div>
        )
    }
}

export default Background