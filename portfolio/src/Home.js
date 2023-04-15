import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as router, Routes, Route } from "react-router-dom";
import "./index.css"


class Home extends React.Component {
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

                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="rounded-circle">
                                    <img
                                        src="https://media.licdn.com/dms/image/D5603AQGc7McsRMRKFQ/profile-displayphoto-shrink_200_200/0/1675251693570?e=1686787200&v=beta&t=i9Z6gxfuFMBZHIbAx5br7veNyOg-oz2Ts8-ONzM1iGM"
                                        class="rounded-circle mx-auto d-block"
                                        alt="my photo"
                                        width="200px"
                                        height="210px"
                                    />
                                </div>
                                <br />
                            </div>
                            <div class="col-sm-8">
                                <h2 class="myskills">Career Objective</h2>
                                <br />
                                <p class="skills">
                                To make the finest use of my skills and evolving talent towards the optimal accomplishment organization's objectives 
                                and to become a strategic aide in its sustainable growth and enduring success.
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <h2 class="myskills">Education Qualification</h2>
                                <br />
                                <table class="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th>DEGREE</th>
                                            <th>COLLEGE/SCHOOL</th>
                                            <th>YOP</th>
                                            <th>LOCATION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>B.E(EEE)</td>
                                            <td>K.S.R College of engineering</td>
                                            <td>2016</td>
                                            <td>Namakkal</td>
                                        </tr>
                                        <tr>
                                            <td>HSC</td>
                                            <td>Kongu kalvi nailayam</td>
                                            <td>2012</td>
                                            <td>Erode</td>
                                        </tr>
                                        <tr>
                                            <td>SSLC</td>
                                            <td>Kongu Kalvi Nilayam</td>
                                            <td>2010</td>
                                            <td>Erode</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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

export default Home;
