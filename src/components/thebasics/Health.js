import React from 'react';
import '../../assets/css/health.css';

import { Link } from 'react-router-dom';

class Health extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Health");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section className="w-100">  
                <div className="health">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body p-0">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h6>Now, let's match you to the right program...</h6>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <p className="pt-3">Have you ever been diagnosed with or taken medication for any of the following?</p>

                                        <div className="form-check pt-3">
                                            <input class="form-check-input" type="checkbox" />
                                            <label class="form-check-label">
                                                Diabetes (Type 1)
                                            </label>

                                            <span className="custom-tooltip ml-2">
                                                <i class="far fa-question-circle"></i>
                                                <div class="tooltip-text">Lorem Ipsum texto de relleno de las imprentas y archivos de texto.</div>
                                            </span>
                                        </div>

                                        {/* <div className="form-check pt-3">
                                            <input class="form-check-input" type="checkbox" />
                                            <label class="form-check-label">
                                                Hypertension
                                            </label>

                                            <span className="custom-tooltip ml-2">
                                                <i class="far fa-question-circle"></i>
                                                <div class="tooltip-text">Lorem Ipsum texto de relleno de las imprentas y archivos de texto.</div>
                                            </span>
                                        </div>

                                        <div className="form-check pt-3">
                                            <input class="form-check-input" type="checkbox" />
                                            <label class="form-check-label d-inline">
                                                I've never been diagonesd with or taken medication for any of these conditions.
                                            </label>

                                            <span className="custom-tooltip ml-2">
                                                <i class="far fa-question-circle"></i>
                                                <div class="tooltip-text">Lorem Ipsum texto de relleno de las imprentas y archivos de texto.</div>
                                            </span>
                                        </div> */}
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
export default Health;