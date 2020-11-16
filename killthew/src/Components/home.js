import React from 'react';
//import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";
const API_BASE_URL = '';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var style = {
            header: {
                'textAlign':'center',
            },
            imageWidth : {
                'width':'100%',
            },
            slideshow_container : {
                'max-width': '1000px',
                'position': 'relative',
                'margin': 'auto'
            },
            mySlides : {
                'display': 'none'
            },
        }
        return(
            <div>
                <h2 style={style.header}>Your Weekend Monitor</h2>
                <p>
                    This website is about storing info/memories all your weekend activities or vacations. 
                </p>
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <img src=".Images/image1.jpg" style={style.imageWidth}></img>
                        <div className="text">Caption Text</div>
                    </div>

                    <div className="mySlides fade">
                        <img src=".Images/image2.jpg" style={style.imageWidth}></img>
                        <div className="text">Caption Two</div>
                    </div>

                    <div className="mySlides fade">
                        <img src=".Images/image3.jpg" style={style.imageWidth}></img>
                        <div className="text" >Caption Three</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);