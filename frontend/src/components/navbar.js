import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a href="localhost:8080"><span><img className="logo" src="https://devonfranklin.com/wp-content/uploads/2017/07/the-star-logo.png" /></span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav top-nav-bar">
                            <li className="nav-item">
                                <a className="nav-link text-white nav-text" href="https://www.usmagazine.com/celebrity-news">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white nav-text" href="https://www.usmagazine.com/stylish-2-2">Stylish</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white nav-text" href="https://www.usmagazine.com/entertainment">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white nav-text" href="https://www.usmagazine.com/celebrity-pets">Pets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white nav-text" href="https://www.usmagazine.com/royal-family">Royals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white nav-text" href="https://www.usmagazine.com/food">Food</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white nav-text" href="https://www.usmagazine.com/celebrity-moms">Moms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white nav-text" href="https://www.usmagazine.com/celebrity-body">Wellness</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;