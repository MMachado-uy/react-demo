import React from 'react'

class ImgCredit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: this.props.author.first_name,
            authorLink: `${this.props.author.links.html}?utm_source=react_clock&utm_medium=referral`
        }
    }

    render() {
        let { author, authorLink } = this.state

        return (
            <div id="ImgCredit" className="fixed bottom-right">
                <span>Photo by <a href={authorLink}>{author}</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a></span>
            </div>
        );
    }
}

export default ImgCredit