import "./Section1.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



function Section(props) {
    return (
        <section className="section">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-8 col-md-6 down">

                        <h1 className="text-white text-center text1 m-auto pb-5 fw-bold ">Creating a Beautifull   & Usefull Solutions</h1>
                        <p className="text-white text-center">We know how large objects will act, but things on a <br /> small scale just do not act that way.</p>

                        <div className="buttons d-block d-lg-flex mt-5 mb-3">
                            <button className="btn btn-primary colorbtn1 px-5 py-3 mb-3">Get Quote Now</button>
                            <button className="btn btn-outline-primary colorbtn2 px-5  py-3 mx-3">Learn More</button>
                        </div>



                    </div>
                </div>
            </div>
        </section>




    );
}
export default Section;