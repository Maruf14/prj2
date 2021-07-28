import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faCoffee, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import { Fade, Zoom } from "react-awesome-reveal";

class Header extends Component {
    state = { hideHeader: true }

    toggleHeader = () => {
        this.setState((state) => {
            console.log(state);
            return { hideHeader: !state.hideHeader }
        });
    }



    render() {
        return (
            <header>
                <div className="container py-2 d-flex flex-wrap justify-content-between align-items-center">
                    <div className="d-flex">
                        <h2 className="text-white">Brandname</h2>
                        <ul className="d-lg-flex text-white d-none ms-3">
                            <li className="mx-2"><a href="#">Home</a> </li>
                            <li className="mx-2"><a href="#">Product</a> </li>
                            <li className="mx-2"><a href="#">Pricing</a> </li>
                            <li className="mx-2"><a href="#">Contact</a> </li>
                        </ul>
                    </div>

                    <div className="  d-lg-flex align-items-center d-none">
                        <a href="#" className="btn text-primary fw-bold px-3 py-2">Log in</a>
                        <a href="#" className="btn btn-primary py-2 px-3 fw-bold my-2">Become a Member  <FontAwesomeIcon icon={faArrowRight} className="ms-2 mt-1" /> </a>

                    </div>

                    <div className="d-lg-none d-flex me-2">
                        <button className="btn text-white px-3"><FontAwesomeIcon icon={faSearch} /></button>
                        <button className="btn text-white px-3"><FontAwesomeIcon icon={faShoppingCart} /></button>
                        <button className="btn text-white px-3" onClick={this.toggleHeader}><FontAwesomeIcon icon={faBars} /></button>


                    </div>

                    <div className={`menu-phone w-100 d-lg-none mt-4 ${this.state.hideHeader && "d-none" || ""}  `}>
                        <Zoom>
                            <ul className="text-white text-center d-block">
                                <li className="my-4 fs-3"><a href="#">Home</a> </li>
                                <li className="my-4 fs-3"><a href="#">Product</a> </li>
                                <li className="my-4 fs-3"><a href="#">Pricing</a> </li>
                                <li className="my-4 fs-3"><a href="#">Contact</a> </li>
                            </ul>
                        </Zoom>
                    </div>
                </div>
            </header>


        )
    }
}


export default Header;
