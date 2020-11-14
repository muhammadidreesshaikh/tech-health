import React from 'react';
import '../../assets/css/confirmation.css';
import { Link } from 'react-router-dom';

import image from '../../assets/img/i.png';
import image1 from '../../assets/img/a.png';
import image2 from '../../assets/img/mobile.png';

class Confirmation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Confirmation");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section className="w-100"> 
                <div className="confirmation">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body p-0">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h3 className="pt-3">All set! Let's start your health journey</h3>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="row main-last">
                                        
                                            <div className="col-12 col-md-6 col-lg-6">
                                                <h6 className="pt-5">Download The Digital Medicine App.</h6>

                                                <div className="download mt-4">
                                                    <span>Download the app.</span>
                                                    <a href="#"><img src={image} /></a>   <a href="#"><img src={image1} /></a>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6 col-lg-6">
                                                <div className="mobile">
                                                    <img src={image2}/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="row icons">
                                        
                                            <div className="col-12 col-md-12 col-lg-12">
                                                <div className="row icons-inner">
                                                    <div className="col-12 col-md-3 col-lg-3">
                                                        <i class="fas fa-user-md"></i>
                                                    </div>

                                                    <div className="col-12 col-md-9 col-lg-9">
                                                        <h6>Health Coach in your pocket</h6>
                                                        <span>fact that a reader will be distracted by the readable content of a page</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-12 col-md-12 col-lg-12">
                                                <div className="row icons-inner">
                                                    <div className="col-12 col-md-3 col-lg-3">
                                                        <i class="fas fa-briefcase-medical"></i>
                                                    </div>

                                                    <div className="col-12 col-md-9 col-lg-9">
                                                        <h6>Stay on top your health</h6>
                                                        <span>It is a long established fact that a reader will be distracted</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-12 col-lg-12">
                                                <div className="row icons-inner">
                                                    <div className="col-12 col-md-3 col-lg-3">
                                                        <i class="fas fa-archive"></i>
                                                    </div>

                                                    <div className="col-12 col-md-9 col-lg-9">
                                                        <h6>Track your oders</h6>
                                                        <span>It is a long established fact that a reader will be distracted by the readable.</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Confirmation;