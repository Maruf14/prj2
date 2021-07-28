import "./section5.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section5card from "./Section5card";

const data = [
    {
        title: "Free",
        subtitle: "Organize across all apps by hand",
        price: "0$",
        period: "Per Week",
        check: "3",
        list1: "Unlimited product updates",
        list2: "Unlimited product updates",
        list3: "Unlimited product updates",
        list4: "1GB Cloud storage",
        list5: "Email and community support"
    },
    {
        title: "Silver",
        subtitle: "Organize across all apps by hand",
        price: "9.99$",
        period: "Per Month",
        check: "4",
        list1: "Unlimited product updates",
        list2: "Unlimited product updates",
        list3: "Unlimited product updates",
        list4: "1GB Cloud storage",
        list5: "Email and community support"
    },
    {
        title: "Gold",
        subtitle: "Organize across all apps by hand",
        price: "19.99$",
        period: "Per Year",
        check: "5",
        list1: "Unlimited product updates",
        list2: "Unlimited product updates",
        list3: "Unlimited product updates",
        list4: "1GB Cloud storage",
        list5: "Email and community support"
    }
]


class Section5 extends React.Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <section className="section5">
            <div className="container">

                <div className="row d-flex justify-content-center my-5">
                    <div className="col-sm-8 col-md-6 ">

                        <h2 className="pb-3 text-center">Pricing</h2>
                        <p className="text2 text-center">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics</p>
                    </div>
                </div>

                <div className="row ">
                    {data.map((value, index) => {
                        return <div className="col-lg-4 col-sm-6 col-10 m-auto">
                            <Section5card value={value} />
                        </div>

                    })};

                </div>








            </div>
        </section >
    }

}

export default Section5;




