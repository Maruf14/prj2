import "./footer.css";
import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faPhoenixFramework, faTwitter } from "@fortawesome/free-brands-svg-icons";




class footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <footer>
            <div className="container">

                <div className="row">
                    <div className="col-lg-6 col-8"><h2 className="text-white">Brandname</h2></div>


                    <div className="col-lg-6 col-8">
                        <ul className="ul">
                            <li><a href="#" className="logoicon"><FontAwesomeIcon icon={faFacebook} className="design" /></a></li>
                            <li><a href="#" className="logoicon"><FontAwesomeIcon icon={faInstagram} className="design" /></a></li>
                            <li><a href="#" className="logoicon"><FontAwesomeIcon icon={faTwitter} className="design" /></a></li>

                        </ul>

                    </div>


                    <span className="mt-5"></span>
                </div>


                <div className="row mt-4">
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 m-auto">
                        <ul className="text-white d-block font">
                            <li className="fw-bold"><a href="#">Company info</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Carrier</a></li>
                            <li><a href="#">We are hiring</a></li>
                            <li><a href="#">Blog</a></li>

                        </ul>

                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 m-auto">
                        <ul className="text-white d-block font">
                            <li className="fw-bold"><a href="#">Legal</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Carrier</a></li>
                            <li><a href="#">We are hiring</a></li>
                            <li><a href="#">Blog</a></li>

                        </ul>

                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 m-auto">
                        <ul className="text-white d-block font">
                            <li className="fw-bold"><a href="#">Features</a></li>
                            <li><a href="#">Business Marketing</a></li>
                            <li><a href="#">User analytic</a></li>
                            <li><a href="#">Live chat</a></li>
                            <li><a href="#">Unlimited support</a></li>

                        </ul>

                    </div>


                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 m-auto">
                        <ul className="text-white d-block font">
                            <li className="fw-bold"><a href="#">Resources</a></li>
                            <li><a href="#">IOS & Android</a></li>
                            <li><a href="#">Watch a Demo</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">API</a></li>
                        </ul>

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 m-auto">
                        <ul className="text-white d-block font">
                            <li className="fw-bold"><a href="#">Get in touch</a></li>
                            <InputGroup>
                                <Input placeholder="something@idk.cool" />
                                <InputGroupAddon addonType="append">

                                    <div className="col-12">
                                        <button type="submit" className="btn-primary px-4 py-3 p-sm-2 p-xs-0 submit">Subscribe</button>
                                    </div>
                                </InputGroupAddon>
                            </InputGroup>
                            <li>Lorem, ipsum dolor</li>
                        </ul>

                    </div>




                </div>

                <i class="fa fa-copyright text-white" aria-hidden="true"></i>
            </div>

        </footer >
    }

}

export default footer;




