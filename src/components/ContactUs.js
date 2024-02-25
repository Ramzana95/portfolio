import React, { Component } from 'react';
export default class ContactUs extends Component 
{
    render(){

        let resumeData = this.props.resumeData;

        return(

            <section id = "contact">
                <div className = "row section-head">

                <div className = "ten columns">

                  
                </div>

                </div>

                <div className = "row">

                    <aside className = "eight columns footer - widgets">

                        <div className = "widget">

                            {/* <h4>LinkedIn:

                                {resumeData.LinkedinId}

                            </h4> */}

                        </div>

                    </aside>

                </div>

            </section>
        );
    }

}