import "./Section2card.css";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

class Section2card extends React.Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <div className="d-flex chegara justify-content-center col align-items-center ">
            <div className="pe-4"> <FontAwesomeIcon icon={faUserFriends} className="usericon mb-5" /></div>
            <div className="div">
                <h5 className="pb-2">{this.state.title}</h5>
                <p>{this.state.subtitle}</p>
            </div>
        </div>





    }
}

export default Section2card;

