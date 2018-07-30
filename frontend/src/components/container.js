import React from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Logo from './logo';
import Articles from './articles';
import Footer from './footer';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topArticles: [],
            articles: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/')
            .then((response) => {
                console.log(response.data)
                var tempArr = [];
                var tempArr2 = [];
                for (var i = 0; i < 4; i++) {
                    var tempObj = {
                        headline: response.data[i].headline,
                        imgURL: response.data[i].imgURL,
                        link: response.data[i].link
                    }
                    tempArr.push(tempObj);
                }
                console.log(tempArr)
                for (var i = 4; i < response.data.length; i++) {
                    var tempObj = {
                        headline: response.data[i].headline,
                        imgURL: response.data[i].imgURL,
                        link: response.data[i].link
                    }
                    tempArr2.push(tempObj);
                }
                console.log(tempArr2);

                this.setState({
                    topArticles: tempArr,
                    articles: tempArr2
                })
            })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Logo />
                <Articles topArticles={this.state.topArticles} articles={this.state.articles} />
                <Footer />
            </div>
        )
    }
}

export default Container;