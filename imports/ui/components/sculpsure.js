import React from 'react'

const Sculpsure = () =>({

        render(){

                var styles = {
                        backgroundPosition: "left"
                };


                return(
                    <div>
                            <div className="slider big-slider">
                                    <ul className="slides big-slides">
                                            <li>
                                                    <img style={styles} src="/images/sculpt2.jpg"/>
                                            </li>
                                    </ul>
                            </div>
                            <div className="row">
                                    <div className="col offset-m3 m6">
                                            <h4>What is SculpSure?</h4>
                                            <h5>SculpSure is a breakthrough FDA approved, non-invasive light based body contouring system designed to reduce stubborn fat in just 25 minute treatments. This laser technology targets and heats fat cells under the skin without affecting the skin’s surface but raising the temperature of the fat cells and damaging their structural integrity. After the treatment, the damaged fat cells are removed permanently. They are naturally absorbed from your body through your lymphatic system. Since there is no downtime with SculpSure you can have one treatment done during your lunch break and return to work immediately. Patients will start seeing results as early as 6 weeks, with optimal results at 12 weeks.</h5>
                                    </div>
                            </div>
                            <div className="row">
                                    <div className="col offset-m3 m6">
                                            <h4>Is SculpSure right for me?</h4>
                                            <h5>SculpSure is ideal for people with trouble spots particularly those that seem resistant to diet and exercise.</h5>
                                    </div>
                            </div>
                            <div className="row">
                                    <div className="col offset-m3 m6">
                                            <h4>How many treatments will I need?</h4>
                                            <h5>Every patient is different. Your treatment provider will develop a customized treatment plan to meet your desired goals. Askyour treatment provider about the treatment that is right for you.</h5>
                                    </div>
                            </div>
                            <div className="row">
                                    <div className="col offset-m3 m6">
                                            <h4>What should I expect duringthe treatment?</h4>
                                            <h5>Most patients feel a tingling sensation intermittenly throughout the treatment hich is generally well tolerated.</h5>
                                    </div>
                            </div>
                            <div className="row">
                                    <div className="col offset-m3 m6">
                                            <h4>When will I see results?</h4>
                                            <h5>Patients may start to see results as early as 6 weeks following treatment as the body begins to evacuate the destroyed fat cells, with optimal results usually seen at 12 weeks.</h5>
                                    </div>
                            </div>
                            <div className="row">
                                    <div className="col offset-m3 m6">
                                            <h4>How long will the results last?</h4>
                                            <h5>Treated cells are destroyed during the treatment and will not regenerate.</h5>
                                    </div>
                            </div>
                    </div>
                )
        },

        componentDidMount(){
                $('.slider').slider();
        }
});
export default Sculpsure;
