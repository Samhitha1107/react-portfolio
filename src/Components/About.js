import React, { Component } from "react";

export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="src\images\WhatsApp Image 2023-02-08 at 8.57.51 PM (2).jpeg" alt="" />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p>{resumeData.about}</p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>{resumeData.name}</span>
                                        <br />
                                        <span>{resumeData.website}</span>
                                        <br />

                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        )
    }
}