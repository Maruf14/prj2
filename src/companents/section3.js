import "./section3.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section3card from "./Section3card";


const data = [
    {
        img: "user1.png",
        name: "Regina Miles",
        job: "Designer",
        star: "3",
        description: "This proved to be impossible using concepts of space and time.Einstein new view of time first and then"
    },
    {
        img: "user2.png",
        name: "Regina Smith",
        job: "Designer",
        star: "4",
        description: "This proved to be impossible using concepts of space and time.Einstein new view of time first and then"
    }
]

class Section3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <section className="section3">
            <div className="container">

                <div className="row d-flex justify-content-center carding">
                    <div className="col-sm-8 col-md-6 pb-5">

                        <h2 className="pb-3 text-center">What Clients Say</h2>
                        <p className="text2 text-center">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics</p>
                    </div>
                </div>



                <div className="row">
                    {data.map((value, index) => {
                        return <div className="col-lg-6 mb-5">
                            <Section3card value={value} />
                        </div>
                    })}

                </div>
            </div>
        </section>
    }

}

export default Section3;




