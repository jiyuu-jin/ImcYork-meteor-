import React from 'react'

import {Link} from 'react-router-dom';


const IndexPage = () =>({
    render(){


        var styles = {
            backgroundPosition: "left"
        };

        return(
            <div>
                <div className="slider big-slider">
                    <ul className="slides big-slides">
                        <li>
                            <img src="/images/imc4.jpg"/>
                        </li>
                        <li>
                            <Link to="/sculpsure/">
                                <img style={styles} src="/images/sculpt2.jpg"/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="row physicians">
                    <div className="col s12 m3 center">
                        <div className="polaroid">
                            <img height="200px" src="/images/Tom2.jpg"/>
                            <div className="polar-cap">
                                <h5>Dr. Thomas F. Kurland</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m3 center">
                        <div className="polaroid">
                            <img height="200px" src="/images/Pete3.jpg"/>
                            <div className="polar-cap">
                                <h5>Dr. Peter A. Kouvatsos</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m3 center">
                        <div className="polaroid">
                            <img height="200px" src="/images/Carol.jpg"/>
                            <div className="polar-cap">
                                <h5>Carol Snyder, CRNP</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m3 center">
                        <div className="polaroid">
                            <img height="200px" src="/images/Bradley.jpg"/>
                            <div className="polar-cap">
                                <h5>Dr. Craig Bradley</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card">
                            <div className="card-content black-text">
                                <span className="card-title">Who We Are</span>
                                <p>Internal Medicine Consultants has been serving the South Central Pennsylvania area for the past 40 years. Originally establish in 1977, we having been providing unmatched personal care for all our patient's medical concerns. Whether its same day appointments, to in-house lab work or preventive care, our focus is on the patients’ needs above all else. As a patient at IMC, we want you to feel confident in your health and know that your medical issues are heard and are being cared for. We offer a state-of-the-art facility that allows us to be your one-stop shop for your health care needs. In addition to medical care, we also offer the latest in medical aesthetics. Just another way that we here at IMC aim to have you feeling great and looking great.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    componentDidMount(){
        $('.slider').slider();
    }

});

export default IndexPage
