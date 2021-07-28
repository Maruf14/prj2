import "./section4.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





class Section4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <section className="section4">
            <div className="container">

                <div className="row d-flex justify-content-center">
                    <div className="col-sm-8 col-md-6 ">

                        <h2 className="pb-3 text-center">About us</h2>
                        <p className="text2 text-center">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics</p>
                    </div>
                </div>



                <div className="row">
                    <div className="col-lg-6 col-sm-8">
                        <img src="guys.png" alt="" className="guys w-100" />
                    </div>

                </div>
            </div>
        </section>
    }

}

export default Section4;




