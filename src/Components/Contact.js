import React from "react";

export default class ContactUs extends Component {
    render() {
        
            let resumeData = this.props.resumeData;
            return (
                <section id="contact">
                    <div className="row section-head">
                        <div className="two columns header-col">
                            <p className="lead">
                            I am passionate regarding my work and actively seeking new challenges and opportunities to grow my skills.
                            Feel free contacting me!!
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <aside className="eigth columns footer-widgets">
                            <div className="widget widget_contact">
                                <h4>LinkedIn : 
                                    {resumeData.linkedinId}
                                </h4>
                            </div>
                        </aside>
                    </div>
                </section>
            )
            
        
    }
}