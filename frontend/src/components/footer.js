import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav top-nav-bar">
                            <li className="nav-item">
                                <a className="nav-link text-muted footer-text" href="https:''www.usmagazine.com/services-privacypolicy/">Privacy Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted footer-text" href="https://www.usmagazine.com/accessiblity-statement">Accessibility Statement</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted footer-text" href="https://www.usmagazine.com/services-datapolicy">Data Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted footer-text" href="https://www.usmagazine.com/terms-and-conditions">Terms of Use</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted footer-text" href="https://www.usmagazine.com/services-contactus">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted footer-text" href="https://www.americanmediainc.com/brands/us-weekly">Media Kits</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted footer-text" href="https://www.usmagazine.com/services-faq">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted footer-text" href="https://www.usmagazine.com/subscribe">Subscribe</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default Footer;