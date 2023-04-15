import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"


class Techskills extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <body>
                <div class="heading">
                    <div class="jumbotron text-center" id="heading">
                        <h1 class="myname">GOKUL NATH S</h1>
                        <p class="myoccupation">Web Developer</p>
                        <ul class="nav nav-pills nav-justified" id="navigation">
                            <li class="nav-item">
                                <a class="nav-link active" href="/">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/Techskills">
                                    Techskills
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <br />
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2 class="myskills">Technical Skills</h2>
                                <br />
                                <ul class="skills">
                                    <li>
                                    	WEB TECHNOLOGIES: React JS, JavaScript, jQuery, HTML5, CSS3.
                                    </li>
                                    <li>
                                        FRAMEWORKS: Bootstrap4.
                                    </li>
                                    <li>
                                     	PLATFORM: Windows, LINUX. 
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-6">
                                <h2 class="myskills">Internship and Certification</h2>
                                <br />
                                <ul class="skills">
                                    <li>
                                    Certificate completion of internship training on HTML5, CSS3, JavaScript, jQuery, Bootstrap4.
                                    Certificate Number: E22IT122.
                                    </li>
                                    <li>
                                    	Certificate of completion in React JS-Udemy-The complete guide.
                                    </li>
                                </ul>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div class="jumbotron text-center" id="footer">
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3ByrQo2Sa4SziEDe1tbKATXw%3D%3D"
                                    class="fa fa-linkedin nav-link"
                                    style={{ color: "white" }}
                                />
                            </li>
                            <li class="nav-item">
                                <a href="https://www.github.com/gokulnath825"
                                    class="fa fa-github nav-link"
                                    style={{ color: "white" }}
                                />
                            </li>
                            <li class="nav-item">
                                <a href="https://www.instagram.com/gokul_yuvan_"
                                    class="fa fa-instagram nav-link"
                                    style={{ color: "white" }}
                                />
                            </li>
                            <li class="nav-item">
                                <a href="https://www.facebook.com/GokulYuvan"
                                    class="fa fa-facebook nav-link"
                                    style={{ color: "white" }}
                                />
                            </li>
                            <li class="nav-item">
                                <a href="https://www.twitter.com/"
                                    class="fa fa-twitter nav-link"
                                    style={{ color: "white" }}
                                />
                            </li>
                        </ul>

                    </div>
                </div>
            </body>
        );
    }
}

export default Techskills;