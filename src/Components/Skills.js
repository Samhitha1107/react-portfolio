import React from "react";


export default class Skills extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="skills">
                <div className="row skill-row">
                    <div className="two columns header-col">
                        <h1>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</h1>

                    </div>
                    <div className="ten columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Programming Languages</h3>
                                <p className="info">
                                    <span>JavaScript</span>
                                    <span>CSS</span>
                                    <span>HTML</span>
                                    <span>ASP.NET</span>
                                    <span>SQL</span>
                                    <span>React js</span>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}