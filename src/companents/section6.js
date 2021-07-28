import "./section6.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap, faMapMarkerAlt, faMapSigns, faMobile, faPhone, faPhoneAlt, faPhoneSlash, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faPhoenixFramework } from "@fortawesome/free-brands-svg-icons";




class Section6 extends React.Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <section className="section6">
            <div className="container">

                <div className="row d-flex justify-content-center py-5 my-5">
                    <div className="col-sm-8 col-md-6">

                        <h2 className="pb-3 text-center">Get In Touch</h2>
                        <p className="text2 text-center">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics</p>
                    </div>
                </div>


                <div className="boxes">
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-6 col-10 bg-white text-center like">
                            <h1 className="text-center py-3 mt-4"><FontAwesomeIcon icon={faPhone} className="text-primary" /></h1>
                            <p className="text-dark py-1 fw-bold">georgia.young@example.com</p>
                            <p className="text-dark pb-3">Lorem, ipsum dolor.</p>
                            <a href="#" className="text-dark fw-bold fs-4">Get Support</a>
                            <button className="btn btn-outline-primary px-5  m-auto mt-3 mb-5">Submit Requst</button>
                        </div>


                        <div className="col-lg-4 col-md-6 col-10 bg-primary text-center size">
                            <h1 className="text-center py-3 mt-5"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" /></h1>
                            <p className="text-white py-1 fw-bold">georgia.young@example.com</p>
                            <p className="text-white pb-3">Lorem, ipsum dolor.</p>
                            <a href="#" className="text-white fw-bold fs-4">Get Support</a>
                            <button className="btn btn-outline-light px-5  m-auto mt-3 mb-5">Submit Requst</button>

                        </div>


                        <div className="col-lg-4 col-md-6 col-10 bg-white text-center like">
                            <h1 className="text-center py-3 mt-4"><FontAwesomeIcon icon={faEnvelope} className="text-primary" /></h1>
                            <p className="text-dark py-1 fw-bold">georgia.young@example.com</p>
                            <p className="text-dark pb-3">Lorem, ipsum dolor.</p>
                            <a href="#" className="text-dark fw-bold fs-4">Get Support</a>
                            <button className="btn btn-outline-primary px-5  m-auto mt-3 mb-5">Submit Requst</button>
                        </div>
                    </div>
                </div>

            </div>

        </section >
    }

}

export default Section6;




