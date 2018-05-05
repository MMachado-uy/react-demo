import React from 'react'

class ImgCredit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            author: '',
            authorLink: ''
        }
    }

    Placeholder() {
        return (
            <div></div>
        )
    }

    Credit() {
        let { author } = this. props
        let authorLink, authorName

        if (author !== '') {
            authorLink= `${author.links.html}?utm_source=react_clock&utm_medium=referral`
            authorName = `${author.first_name} ${author.last_name}`;
        }

        return (
            <div id="ImgCredit" className="fixed bottom-right">
                <span>Photo by <a target="_blank" href={authorLink}>{authorName}</a> on <a target="_blank" href="https://unsplash.com/?utm_source=react_clock&utm_medium=referral">Unsplash</a></span>
            </div>
        )
    }

    render() {
        let { author } = this.props

        const bottom = author === '' ? (
            this.Placeholder()
        ) : (
            this.Credit()
        )

        return (
            bottom
        )
    }
}

export default ImgCredit