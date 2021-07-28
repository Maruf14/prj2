import "./Section3card.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";



class Section3 extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = props;
    }

    render() {
        return <div className="box bg-white">
            <div className="row danger">
                <div className="col-sm-4 p-0">
                    <img src={this.state.value.img} className="foto w-100" />
                </div>
                <div className="col-sm-8 ms-2 carding">
                    <div className="ms-2 carding float-start">
                        <h3>{this.state.value.name}</h3>
                        <p>{this.state.value.job}</p>

                        <FontAwesomeIcon icon={this.state.value.star >= 1 && faStar || farStar} className="text-warning me-1 fs-5" />
                        <FontAwesomeIcon icon={this.state.value.star >= 2 && faStar || farStar} className="text-warning me-1 fs-5" />
                        <FontAwesomeIcon icon={this.state.value.star >= 3 && faStar || farStar} className="text-warning me-1 fs-5" />
                        <FontAwesomeIcon icon={this.state.value.star >= 4 && faStar || farStar} className="text-warning me-1 fs-5" />
                        <FontAwesomeIcon icon={this.state.value.star >= 5 && faStar || farStar} className="text-warning fs-5" />



                        <p className="pt-2">{this.state.value.description}</p>
                    </div>

                </div>
            </div>


        </div>





    }
}

export default Section3;

