import React from 'react';

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div>
                    <img className="panoramic" src="https://candidpost.com/wp-content/uploads/2018/05/bella-hadid-festival-de-cannes-1.jpg" />
                </div>
                    <div className="social-icons">
                        <a href="#"><span><img className="social" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/256px-Facebook_icon.svg.png" /></span></a>
                        <a href="#"><span><img className="social" src="http://www.fgalegaciclismo.es/sites/default/files/field/image/instagram-1581266_640.jpg" /></span></a>
                        <a href="#"><span><img className="social" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/social-twitter-icon.png" /></span></a>
                    </div>
            </div>
        );
    }
}

export default Logo;