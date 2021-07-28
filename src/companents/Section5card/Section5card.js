import "./Section5card.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckDouble, faUserCheck } from "@fortawesome/free-solid-svg-icons";




class Section5 extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = props;
    }

    render() {
        return <div className="box bg-white mb-4 pb-4">


            <h4 className="pt-5 pb-3 fw-bold">{this.state.value.title}</h4>
            <p className="text-secondary pb-5  w-50 m-auto">{this.state.value.subtitle}</p>

            <div className="d-lg-block d-flex pb-3 justify-content-center">
                <p className="fw-bold fs-2 text-primary">{this.state.value.price}</p>
                <p className="ps-1 py-2 text-primary period">{this.state.value.period}</p>
            </div>

            <button className="btn btn-primary m-auto d-lg-block d-none">Try for free</button>

            <ul className="list-style-none d-block my-4">
                <li> <FontAwesomeIcon icon={this.state.value.check >= 1 && faCheckCircle || faCheckCircle} className="text-success fw-bold me-2 fs-4" />{this.state.value.list1}</li>
                <li> <FontAwesomeIcon icon={this.state.value.check >= 2 && faCheckCircle || faCheckCircle} className="text-success fw-bold me-2 fs-4" />{this.state.value.list2}</li>
                <li> <FontAwesomeIcon icon={this.state.value.check >= 3 && faCheckCircle || faCheckCircle} className="text-success fw-bold me-2 fs-4" />{this.state.value.list3}</li>
                <li> <FontAwesomeIcon icon={this.state.value.check >= 4 && faCheckCircle || faCheckCircle} className="text-secondary fw-bold me-2 fs-4" />{this.state.value.list4}</li>
                <li> <FontAwesomeIcon icon={this.state.value.check >= 5 && faCheckCircle || faCheckCircle} className="text-secondary fw-bold me-2 fs-4" />{this.state.value.list5}</li>
            </ul>

            <button className="btn btn-primary end d-lg-none  d-block w-75 py-2 px-5"><p className="text-white">Try free</p></button>



        </div>


    }
}

export default Section5;

