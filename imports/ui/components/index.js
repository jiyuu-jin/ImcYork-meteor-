import React from 'react'

import {Link} from 'react-router-dom';


const IndexPage = () =>({
    render(){


        var styles = {
            backgroundPosition: "left"
        };

        return(
            <div>
                <div className="carousel">
                    <a className="carousel-item" href="#one!"><img src="/images/imc.jpg"/></a>
                    <a className="carousel-item" href="#two!"><img src="/images/sculpt.jpg"/></a>
                    <a className="carousel-item" href="#two!"><img src="/images/sculpt.jpg"/></a>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
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
        $('.carousel').carousel({padding: 4});
    }

});

export default IndexPage
