import "./section2.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import Section2card from "./Section2card";
const data = [{
    title: "Investment Trading",
    subtitle: "The quick fox jumps over the lazy dog"
},
{
    title: "Raising Funds",
    subtitle: "The quick fox jumps over the lazy dog"
},

{
    title: "Financial Analisys",
    subtitle: "The quick fox jumps over the lazy dog"
},
{
    title: "Taxation Planning",
    subtitle: "The quick fox jumps over the lazy dog"
},
{
    title: "Save money and time",
    subtitle: "The quick fox jumps over the lazy dog"
},
{
    title: "Outsourced Consulting",
    subtitle: "The quick fox jumps over the lazy dog"
},

]

class section2 extends React.Component {

    render() {
        return <section className="section2" >

            <div className="row d-flex justify-content-center">
                <div className="col-sm-8 col-md-6">

                    <h2 className="pb-3 text-center">Better Strategy With <br /> Quality Business</h2>
                    <p className="text2 text-center">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
            </div>



            <div className="container">
                <div className="row ">

                    {data.map((value, index) => {
                        return <div className="col-lg-4 col-sm-6 text-white mt-4 ">
                            <Section2card title={value.title} subtitle={value.subtitle} />
                        </div>
                    })}





                </div>

            </div>
        </section>


    }

}


export default section2;