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
            images: [],
            imgIndex: 0,
            background: '',
            author: {}
        }
    }

    componentWillMount() {
        this.getImages().then((res) => {
            let images = res

            this.setState({
                images: res
            }, () => {

                this.rotateImages()

                setInterval(() => {
                    this.rotateImages()
                }, 30000)
            })
        })
    }

    rotateImages() {
        let { imgIndex, images } = this.state
    
        if (imgIndex === images.length)
            imgIndex = 0

        this.setState({
            background: `url(${images[imgIndex].urls.regular})`,
            imgIndex: imgIndex + 1,
            author: images[imgIndex].user
        }, () => {
            console.log(this.state.author)
        })
    }

    getImages() {
        return new Promise((resolve, reject) => {
            axios.get('https://api.unsplash.com/photos/curated/', {
                params: {
                    client_id: env.UNSPLASH_ACCESS
                }
            })
            .then((res) => {
                if (res.status === 200 && typeof res.data !== 'undefined') {
                    resolve(res.data)
                }
            })
            .catch((err) => {
                reject()
            })
        })
    }

    render() {
        return (
            <div id="Background" style={{ backgroundImage: this.state.background }}>
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
        );
    }
}

export default Background