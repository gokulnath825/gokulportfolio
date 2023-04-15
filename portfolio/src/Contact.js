import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class Contact extends React.Component {
    constructor() {
        super();
        this.state = { subject: "", body: "" };

    }
    validateForm = event => {
        var subject = document.getElementById("subject").value;
        var body = document.getElementById("body").value;
        window.location.href =
            "mailto:gokulnath825@gmail.com?subject=" + subject + "&body=" + body;
        event.preventDefault();
        return false;
    };

    render() {
        return (
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


                <div class="container" id="mailme">
                    <div class="row">
                        <div class="col-sm-8">
                            <form
                                class="form-horizontal"
                                onSubmit={this.validateForm}
                                target="_blank"
                                method="GET"
                            >
                                <div class="form-group form-group-lg">
                                    <label class="skills" for="Subject">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        class="form-control"
                                        required
                                    />
                                </div>
                                <div class="form-group form-group-lg">
                                    <label class="skills" for="Body">
                                        Your Message
                                    </label>
                                    <textarea id="body" class="form-control" rows="5" required />
                                </div>
                                <input
                                    type="submit"
                                    value="Send"
                                    id="navigation"
                                    class="btn btn-primary"
                                />
                            </form>
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
        );
    }
}

export default Contact;