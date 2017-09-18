import React from 'react'

import {Link} from 'react-router-dom';


const IndexPage = () =>({
    render(){

        return(
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="top_options">
                    <a href="https://www.medentmobile.com/portal/index.php?practice_id=8fTfL3cT" className="orange-text"> MEDENT Patient Portal</a>
                    <a href="http://www.imcyork.com/imc_med-history-1-.pdf" className="orange-text">New Patient Form</a>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="carousel fix">
                            <a className="carousel-item" href="https://www.google.com/maps/dir/''/1777+5th+Ave,+York,+PA+17403/data=!4m5!4m4!1m0!1m2!1m1!1s0x89c88ee09abdd845:0x647241f36cd01fa6?sa=X&ved=0ahUKEwixzvTnt5nWAhWFyyYKHZ2cAhIQwwUIKTAA"><img src="/images/imc.jpg"/></a>
                            <a className="carousel-item" href="/sculpsure"><img src="/images/sculpt.jpg"/></a>
                            <a className="carousel-item" href="/mdvip"><img src="/images/mdvip.jpg"/></a>
                        </div>
                    </div>
                 </div>
                <h4 className="center orange-text">We are excepting new patients for IMC, SculpSure and MDVIP.</h4>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="row">

                    <div className="csslax">
                        <div className="col s12 m6 offset-m3">
                            <br/>
                            <br/>
                            <br/>
                            <div className="card slightly_transparent">
                                <div className="card-content black-text">
                                    <span className="card-title">Who We Are</span>
                                    <p>Internal Medicine Consultants has been serving the South Central Pennsylvania area for the past 40 years. Originally establish in 1977, we having been providing unmatched personal care for all our patient's medical concerns. Whether its same day appointments, to in-house lab work or preventive care, our focus is on the patients’ needs above all else. As a patient at IMC, we want you to feel confident in your health and know that your medical issues are heard and are being cared for. We offer a state-of-the-art facility that allows us to be your one-stop shop for your health care needs. In addition to medical care, we also offer the latest in medical aesthetics. Just another way that we here at IMC aim to have you feeling great and looking great.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    },

    componentDidMount(){
        $('.carousel').carousel({padding: 4});


        if(Session.get('itExist') === false){
            setInterval(function() {
                $('.carousel').carousel('next', 1);
            }, 3000);
            Session.set('itExist', true);
            console.log(Session.get('noExist'));
        }else{
            console.log("It's already running");
        }
    }

});

export default IndexPage
