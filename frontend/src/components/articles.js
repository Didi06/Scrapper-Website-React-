import React from 'react';

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log("HERE", this.props.topArticles)
        return (
            <div className="container top-content">
                <div className="row">
                    {
                        this.props.topArticles.map((article, index) => (
                            <div key={index} className="col-3">
                                <a href={article.link}><span><img className="top-image-content" src={article.imgURL} /></span></a>
                                <a href={article.link}><h4 className="main-headline">{article.headline}</h4></a>
                            </div>
                        ))
                    }
                    {
                        this.props.articles.map((article, index) => (
                            <div key={index} className="col-6 main-content">
                                <a href={article.link}><span><img className="main-image" src={article.imgURL} /></span></a>
                                <a href={article.link}><h4 className="main-headline">{article.headline}</h4></a>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Articles;