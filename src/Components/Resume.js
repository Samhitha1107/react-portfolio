import React from "react";


export default class Resume extends Component {
    render() { 
        let resumeData = this.props.resumeData;
        return(
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                            
                        </h1>
                        <div className="three columns header-col">
                            {
                               resumeData.education && resumeData.education.map((item)=> {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3>{item.UniversityName}</h3>
                                            <p className="info">{item.Degree} <span>&bull;</span> <em className="date">{item.GraduationYear}</em></p>
                                            <p>{item.Description}</p>

                                        </div>
                                    </div>
                                )
                               })
                            }
                        </div>
                    </div>
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1>
                                <span>Work Experience</span>
                            </h1>
                            <div className="nine columns main-col">
                                {
                                    resumeData.work && resumeData.work.map((item)=> {
                                        return (
                                            <div className="row item">
                                                <div className="twelve columns">
                                                    <h3>{item.CompanyName}</h3>
                                                    <p className="info">{item.Position} <span>&bull;</span> <em className="date">{item.StartDate} - {item.EndDate}</em></p>
                                                    <p>{item.Description}</p>
                                                    
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}