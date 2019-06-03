import React from 'react';
import confLogo from '../images/badge-header.svg'
import "./styles/Badge.css"
class Badge extends React.Component {
    render() {
        //this.props;
        const firstName = "Cesar"
        const lastName = "Colina"
        return(
            <div className="badge">
                <div className="badge_header">
                    <img src={confLogo}></img>
                </div>
                <div className="badge_secttion-name">
                    <img className="badge_avatar" src="https://www.gravatar.com/avatar?d=identicon"></img>
                    <h1>{this.props.firstName} <br></br>{this.props.lastName}</h1>

                </div>
                <div className="badge_section-info">
                    <p>{this.props.jobTitle}</p>
                </div>
            </div>

        )
    }
}

export default Badge